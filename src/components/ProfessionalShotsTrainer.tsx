import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Trophy, 
  Target,
  Camera,
  Video,
  Star,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Professional players' reference shots
const GOAT_PLAYERS = {
  "Virat Kohli": {
    coverDrive: { accuracy: 98, technique: "Perfect balance, high elbow", video: "/virat-cover-drive.mp4" },
    straightDrive: { accuracy: 96, technique: "Sublime timing, minimal movement", video: "/virat-straight-drive.mp4" },
    pullShot: { accuracy: 94, technique: "Controlled aggression, perfect weight transfer", video: "/virat-pull.mp4" }
  },
  "Steve Smith": {
    coverDrive: { accuracy: 95, technique: "Unorthodox but effective", video: "/smith-cover-drive.mp4" },
    straightDrive: { accuracy: 97, technique: "Textbook technique", video: "/smith-straight-drive.mp4" },
    pullShot: { accuracy: 93, technique: "Quick hands, great positioning", video: "/smith-pull.mp4" }
  },
  "AB de Villiers": {
    coverDrive: { accuracy: 97, technique: "Fluid motion, perfect timing", video: "/ab-cover-drive.mp4" },
    straightDrive: { accuracy: 95, technique: "Effortless power", video: "/ab-straight-drive.mp4" },
    pullShot: { accuracy: 96, technique: "360-degree mastery", video: "/ab-pull.mp4" }
  },
  "Brian Lara": {
    coverDrive: { accuracy: 99, technique: "Poetry in motion", video: "/lara-cover-drive.mp4" },
    straightDrive: { accuracy: 98, technique: "Classical elegance", video: "/lara-straight-drive.mp4" },
    pullShot: { accuracy: 92, technique: "Wrist work genius", video: "/lara-pull.mp4" }
  },
  "Sachin Tendulkar": {
    coverDrive: { accuracy: 98, technique: "Master class execution", video: "/sachin-cover-drive.mp4" },
    straightDrive: { accuracy: 99, technique: "Perfect straight bat", video: "/sachin-straight-drive.mp4" },
    pullShot: { accuracy: 95, technique: "Controlled power", video: "/sachin-pull.mp4" }
  }
};

const SHOT_TYPES = ["coverDrive", "straightDrive", "pullShot"] as const;
type ShotType = typeof SHOT_TYPES[number];

const ProfessionalShotsTrainer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<string>("Virat Kohli");
  const [selectedShot, setSelectedShot] = useState<ShotType>("coverDrive");
  const [mode, setMode] = useState<"learn" | "practice" | "compare">("learn");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [userScore, setUserScore] = useState<number>(0);
  const [comparisonResult, setComparisonResult] = useState<any>(null);
  const [practiceStats, setPracticeStats] = useState({
    attempts: 0,
    bestScore: 0,
    averageScore: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const currentPlayerShot = GOAT_PLAYERS[selectedPlayer as keyof typeof GOAT_PLAYERS][selectedShot];

  const getShotDisplayName = (shot: ShotType) => {
    const names = {
      coverDrive: "Cover Drive",
      straightDrive: "Straight Drive", 
      pullShot: "Pull Shot"
    };
    return names[shot];
  };

  const startLiveAnalysis = async () => {
    try {
      setIsAnalyzing(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      toast({
        title: "Camera Started",
        description: "Practice your shot - AI is analyzing your technique!"
      });
    } catch (error) {
      toast({
        title: "Camera Error", 
        description: "Could not access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopAnalysis = () => {
    setIsAnalyzing(false);
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const simulateAnalysis = () => {
    // Simulate AI analysis with random score
    const score = Math.floor(Math.random() * 40) + 60; // 60-100% range
    setUserScore(score);
    
    const newAttempts = practiceStats.attempts + 1;
    const newBestScore = Math.max(practiceStats.bestScore, score);
    const newAverageScore = ((practiceStats.averageScore * practiceStats.attempts) + score) / newAttempts;
    
    setPracticeStats({
      attempts: newAttempts,
      bestScore: newBestScore,
      averageScore: Math.round(newAverageScore)
    });

    setComparisonResult({
      playerScore: currentPlayerShot.accuracy,
      userScore: score,
      difference: currentPlayerShot.accuracy - score,
      feedback: score > 85 ? "Excellent! Very close to professional level" : 
                score > 70 ? "Good technique, keep practicing!" : 
                "Focus on the fundamentals, watch the reference closely"
    });

    toast({
      title: "Analysis Complete",
      description: `Your shot scored ${score}% compared to ${selectedPlayer}'s ${currentPlayerShot.accuracy}%`
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Learn from Cricket GOATs
          </h1>
          <p className="text-lg text-muted-foreground">
            Master cricket shots by learning from the greatest players of all time
          </p>
        </div>

        {/* Player Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Select Your Cricket Legend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.keys(GOAT_PLAYERS).map((player) => (
                <Button
                  key={player}
                  variant={selectedPlayer === player ? "default" : "outline"}
                  onClick={() => setSelectedPlayer(player)}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                >
                  <Star className="h-5 w-5" />
                  <span className="text-sm font-medium">{player}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Shot Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Choose Shot Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {SHOT_TYPES.map((shot) => (
                <Button
                  key={shot}
                  variant={selectedShot === shot ? "default" : "outline"}
                  onClick={() => setSelectedShot(shot)}
                  className="h-20 flex flex-col items-center gap-2"
                >
                  <div className="text-lg font-semibold">{getShotDisplayName(shot)}</div>
                  <Badge variant="secondary">
                    {currentPlayerShot.accuracy}% Accuracy
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mode Tabs */}
        <Tabs value={mode} onValueChange={(value) => setMode(value as any)} className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="learn">Learn Technique</TabsTrigger>
            <TabsTrigger value="practice">Practice Live</TabsTrigger>
            <TabsTrigger value="compare">Compare Results</TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedPlayer}'s {getShotDisplayName(selectedShot)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <Video className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Professional Reference Video</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Technique Rating:</span>
                      <Badge className="bg-green-100 text-green-800">
                        {currentPlayerShot.accuracy}%
                      </Badge>
                    </div>
                    <Progress value={currentPlayerShot.accuracy} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Key Points:</strong> {currentPlayerShot.technique}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technique Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Perfect head position over the ball</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">High front elbow through contact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Complete follow-through</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Balanced finish position</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Study Frame by Frame
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practice" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Live Practice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg mb-4 relative">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay
                      muted
                      playsInline
                    />
                    <canvas
                      ref={canvasRef}
                      className="absolute inset-0 w-full h-full"
                    />
                    {!isAnalyzing && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Camera feed will appear here</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {!isAnalyzing ? (
                      <Button onClick={startLiveAnalysis} className="flex-1">
                        <Play className="mr-2 h-4 w-4" />
                        Start Practice
                      </Button>
                    ) : (
                      <>
                        <Button onClick={stopAnalysis} variant="outline" className="flex-1">
                          <Pause className="mr-2 h-4 w-4" />
                          Stop
                        </Button>
                        <Button onClick={simulateAnalysis} className="flex-1">
                          <Target className="mr-2 h-4 w-4" />
                          Analyze Shot
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Practice Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{practiceStats.attempts}</div>
                      <div className="text-xs text-muted-foreground">Attempts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{practiceStats.bestScore}%</div>
                      <div className="text-xs text-muted-foreground">Best Score</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{practiceStats.averageScore}%</div>
                      <div className="text-xs text-muted-foreground">Average</div>
                    </div>
                  </div>
                  
                  {userScore > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Latest Score:</span>
                        <span className="font-medium">{userScore}%</span>
                      </div>
                      <Progress value={userScore} className="h-2" />
                    </div>
                  )}

                  <Button variant="outline" className="w-full">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset Stats
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="compare" className="space-y-6">
            {comparisonResult ? (
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Comparison Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">{selectedPlayer}</div>
                        <div className="text-sm text-muted-foreground">Professional</div>
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {comparisonResult.playerScore}%
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">Your Shot</div>
                        <div className="text-sm text-muted-foreground">Latest Attempt</div>
                      </div>
                      <div className="text-2xl font-bold text-secondary">
                        {comparisonResult.userScore}%
                      </div>
                    </div>

                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Gap to Professional Level</div>
                      <div className="text-xl font-bold">
                        {comparisonResult.difference}% difference
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-blue-50 rounded-lg mb-4">
                      <p className="text-sm">{comparisonResult.feedback}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Areas for Improvement:</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Focus on maintaining head position</li>
                        <li>• Work on follow-through completion</li>
                        <li>• Practice weight transfer timing</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <Target className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">No Comparison Data</h3>
                  <p className="text-muted-foreground mb-4">
                    Practice a shot first to see how you compare to {selectedPlayer}
                  </p>
                  <Button onClick={() => setMode("practice")}>
                    Start Practicing
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfessionalShotsTrainer;