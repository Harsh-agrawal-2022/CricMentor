import React, { useEffect, useRef, useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Camera, 
  Play, 
  Pause, 
  RotateCcw, 
  Target,
  Trophy,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Zap
} from "lucide-react";
import { CRICKET_GOATS, type PlayerProfile, SHOT_TYPES } from "@/data/cricketGoats";
import { toast } from "@/hooks/use-toast";
import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";

const MODEL_URL = "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task";

interface PoseAnalysis {
  accuracy: number;
  feedback: string[];
  biomechanics: {
    [key: string]: {
      current: number;
      target: number;
      accuracy: number;
    };
  };
}

const LiveTraining = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<string>("tendulkar");
  const [selectedShot, setSelectedShot] = useState<string>("coverDrive");
  const [isTraining, setIsTraining] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [analysis, setAnalysis] = useState<PoseAnalysis | null>(null);
  const [realTimeScore, setRealTimeScore] = useState(0);
  const [sessionStats, setSessionStats] = useState({
    attempts: 0,
    bestScore: 0,
    averageScore: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const landmarkerRef = useRef<PoseLandmarker | null>(null);
  const rafRef = useRef<number | null>(null);

  const selectedPlayerData = useMemo(() => 
    CRICKET_GOATS.find(p => p.id === selectedPlayer), 
    [selectedPlayer]
  );
  
  const shotData = useMemo(() => 
    selectedPlayerData?.shots[selectedShot], 
    [selectedPlayerData, selectedShot]
  );

  // Initialize MediaPipe
  useEffect(() => {
    const initializeMediaPipe = async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.21/wasm"
        );
        
        const landmarker = await PoseLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath: MODEL_URL,
            delegate: "GPU"
          },
          runningMode: "VIDEO",
          numPoses: 1
        });
        
        landmarkerRef.current = landmarker;
        setIsReady(true);
      } catch (error) {
        console.error("Failed to initialize MediaPipe:", error);
        toast({
          title: "Initialization Error",
          description: "Failed to load AI model. Please refresh the page.",
          variant: "destructive"
        });
      }
    };

    initializeMediaPipe();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setIsTraining(true);
        startPoseDetection();
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Could not access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    setIsTraining(false);
  };

  const analyzePose = (landmarks: any[]) => {
    if (!shotData || !landmarks.length) return null;

    // Extract key pose landmarks for cricket biomechanics
    const pose = landmarks[0];
    
    // Calculate angles for different body parts
    const calculateAngle = (p1: any, p2: any, p3: any) => {
      const radians = Math.atan2(p3.y - p2.y, p3.x - p2.x) - 
                     Math.atan2(p1.y - p2.y, p1.x - p2.x);
      let angle = Math.abs(radians * 180 / Math.PI);
      if (angle > 180) angle = 360 - angle;
      return angle;
    };

    const currentBiomechanics = {
      front_elbow: calculateAngle(
        pose.landmarks[11], // left shoulder
        pose.landmarks[13], // left elbow  
        pose.landmarks[15]  // left wrist
      ),
      back_elbow: calculateAngle(
        pose.landmarks[12], // right shoulder
        pose.landmarks[14], // right elbow
        pose.landmarks[16]  // right wrist
      ),
      shoulder_rotation: calculateAngle(
        pose.landmarks[11], // left shoulder
        pose.landmarks[23], // left hip
        pose.landmarks[12]  // right shoulder
      ),
      front_knee: calculateAngle(
        pose.landmarks[23], // left hip
        pose.landmarks[25], // left knee
        pose.landmarks[27]  // left ankle
      ),
      spine_tilt: calculateAngle(
        pose.landmarks[11], // left shoulder
        pose.landmarks[23], // left hip
        { x: pose.landmarks[23].x, y: pose.landmarks[23].y + 0.1 }
      ),
      hip_rotation: calculateAngle(
        pose.landmarks[11], // left shoulder
        pose.landmarks[23], // left hip
        pose.landmarks[24]  // right hip
      ),
      head_position: calculateAngle(
        pose.landmarks[0],  // nose
        pose.landmarks[11], // left shoulder
        pose.landmarks[12]  // right shoulder
      ),
      bat_angle: calculateAngle(
        pose.landmarks[15], // left wrist
        pose.landmarks[16], // right wrist
        { x: pose.landmarks[16].x, y: pose.landmarks[16].y + 0.1 }
      )
    };

    // Compare with target biomechanics
    const biomechanicsAnalysis: any = {};
    let totalAccuracy = 0;
    const feedback: string[] = [];

    Object.keys(shotData.biomechanics).forEach(key => {
      const target = shotData.biomechanics[key as keyof typeof shotData.biomechanics];
      const current = currentBiomechanics[key as keyof typeof currentBiomechanics];
      const difference = Math.abs(target - current);
      const accuracy = Math.max(0, 100 - (difference * 2)); // 2% penalty per degree difference
      
      biomechanicsAnalysis[key] = {
        current,
        target,
        accuracy
      };
      
      totalAccuracy += accuracy;

      // Generate specific feedback
      if (accuracy < 70) {
        switch (key) {
          case 'front_elbow':
            feedback.push(`Adjust front elbow angle (current: ${current.toFixed(1)}°, target: ${target}°)`);
            break;
          case 'shoulder_rotation':
            feedback.push(`${current > target ? 'Reduce' : 'Increase'} shoulder rotation`);
            break;
          case 'spine_tilt':
            feedback.push(`Adjust spine tilt for better balance`);
            break;
          default:
            feedback.push(`Improve ${key.replace('_', ' ')} positioning`);
        }
      }
    });

    const overallAccuracy = totalAccuracy / Object.keys(shotData.biomechanics).length;
    
    if (feedback.length === 0) {
      feedback.push("Excellent technique! Keep it up!");
    }

    return {
      accuracy: Math.round(overallAccuracy),
      feedback,
      biomechanics: biomechanicsAnalysis
    };
  };

  const startPoseDetection = () => {
    const detectPose = () => {
      if (videoRef.current && landmarkerRef.current && isTraining) {
        try {
          const results = landmarkerRef.current.detectForVideo(
            videoRef.current,
            Date.now()
          );

          // Draw pose on canvas
          if (canvasRef.current && results.landmarks) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              
              // Draw landmarks
              results.landmarks.forEach((landmark: any) => {
                landmark.forEach((point: any) => {
                  ctx.fillStyle = '#00ff00';
                  ctx.beginPath();
                  ctx.arc(
                    point.x * canvas.width,
                    point.y * canvas.height,
                    3, 0, 2 * Math.PI
                  );
                  ctx.fill();
                });
              });
            }
          }

          // Analyze pose
          const poseAnalysis = analyzePose(results.landmarks || []);
          if (poseAnalysis) {
            setAnalysis(poseAnalysis);
            setRealTimeScore(poseAnalysis.accuracy);
          }

        } catch (error) {
          console.error("Pose detection error:", error);
        }
      }
      
      rafRef.current = requestAnimationFrame(detectPose);
    };

    detectPose();
  };

  const recordShot = () => {
    if (analysis) {
      const newAttempts = sessionStats.attempts + 1;
      const newBestScore = Math.max(sessionStats.bestScore, analysis.accuracy);
      const newAverageScore = ((sessionStats.averageScore * sessionStats.attempts) + analysis.accuracy) / newAttempts;
      
      setSessionStats({
        attempts: newAttempts,
        bestScore: newBestScore,
        averageScore: Math.round(newAverageScore)
      });

      toast({
        title: "Shot Recorded!",
        description: `Score: ${analysis.accuracy}% - ${analysis.feedback[0]}`,
        variant: analysis.accuracy >= 80 ? "default" : "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Live Cricket Training
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time AI analysis with professional player comparison
          </p>
        </div>

        {/* Setup Controls */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Training Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Cricket Legend</label>
                <Select value={selectedPlayer} onValueChange={setSelectedPlayer}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CRICKET_GOATS.map(player => (
                      <SelectItem key={player.id} value={player.id}>
                        {player.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Shot Type</label>
                <Select value={selectedShot} onValueChange={setSelectedShot}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedPlayerData && Object.keys(selectedPlayerData.shots).map(shot => (
                      <SelectItem key={shot} value={shot}>
                        {shot.replace(/([A-Z])/g, ' $1').trim()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                {!isTraining ? (
                  <Button 
                    onClick={startCamera} 
                    disabled={!isReady}
                    className="w-full"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Start Training
                  </Button>
                ) : (
                  <Button onClick={stopCamera} variant="destructive" className="w-full">
                    <Pause className="mr-2 h-4 w-4" />
                    Stop Training
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video Feed */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Live Camera Feed
                  {isTraining && (
                    <Badge className="ml-auto">
                      <Zap className="h-3 w-3 mr-1" />
                      Live
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    width={640}
                    height={480}
                  />
                  
                  {!isTraining && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-muted-foreground">Camera feed will appear here</p>
                      </div>
                    </div>
                  )}

                  {/* Real-time Score Overlay */}
                  {isTraining && analysis && (
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-lg">
                      <div className="text-2xl font-bold">{realTimeScore}%</div>
                      <div className="text-xs">Live Score</div>
                    </div>
                  )}
                </div>

                {isTraining && (
                  <div className="flex gap-2 mt-4">
                    <Button onClick={recordShot} disabled={!analysis}>
                      <Target className="mr-2 h-4 w-4" />
                      Record Shot
                    </Button>
                    <Button variant="outline" onClick={() => setAnalysis(null)}>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reset Analysis
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Real-time Analysis */}
            {analysis && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Real-time Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Overall Accuracy:</span>
                    <Badge variant={analysis.accuracy >= 80 ? "default" : analysis.accuracy >= 60 ? "secondary" : "destructive"}>
                      {analysis.accuracy}%
                    </Badge>
                  </div>
                  
                  <Progress value={analysis.accuracy} className="h-3" />

                  <div className="space-y-2">
                    <h4 className="font-medium">Live Feedback:</h4>
                    {analysis.feedback.map((tip, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm">
                        {analysis.accuracy >= 80 ? (
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                        )}
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Target Player Info */}
            {selectedPlayerData && shotData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Training Target</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {selectedPlayerData.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold">{selectedPlayerData.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedPlayerData.country}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Shot Accuracy:</span>
                      <Badge>{shotData.accuracy}%</Badge>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Technique:</span>
                      <p className="text-muted-foreground mt-1">{shotData.technique}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Key Points:</h4>
                    <ul className="text-sm space-y-1">
                      {shotData.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Session Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Session Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary">{sessionStats.attempts}</div>
                    <div className="text-xs text-muted-foreground">Attempts</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">{sessionStats.bestScore}%</div>
                    <div className="text-xs text-muted-foreground">Best</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">{sessionStats.averageScore}%</div>
                    <div className="text-xs text-muted-foreground">Average</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={() => setSessionStats({ attempts: 0, bestScore: 0, averageScore: 0 })}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Reset Session
                </Button>
              </CardContent>
            </Card>

            {/* Biomechanics Breakdown */}
            {analysis && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Biomechanics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(analysis.biomechanics).map(([key, data]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key.replace('_', ' ')}</span>
                        <span className={data.accuracy >= 80 ? "text-green-600" : data.accuracy >= 60 ? "text-orange-600" : "text-red-600"}>
                          {data.accuracy.toFixed(0)}%
                        </span>
                      </div>
                      <Progress value={data.accuracy} className="h-1.5" />
                      <div className="text-xs text-muted-foreground">
                        Current: {data.current.toFixed(1)}° | Target: {data.target}°
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTraining;