import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { REFERENCE_SHOTS, ShotType } from "@/data/referenceShots";
import { AngleMap, POSE_CONNECTIONS, compareAngles, extractAngles } from "@/utils/angles";
import { toast } from "@/hooks/use-toast";
import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";

const MODEL_URL = "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_full/float16/1/pose_landmarker_full.task";

function useSpeech() {
  const lastUtter = useRef<string>("");
  const lastTime = useRef<number>(0);
  const speak = (text: string) => {
    const now = Date.now();
    if (text === lastUtter.current && now - lastTime.current < 3000) return; // debounce
    lastUtter.current = text;
    lastTime.current = now;
    if ("speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.05;
      u.pitch = 1.0;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    }
  };
  return { speak };
}

export default function CricketTrainer() {
  const [mode, setMode] = useState<"practice" | "analysis">("practice");
  const [shot, setShot] = useState<ShotType>("Cover Drive");
  const [score, setScore] = useState<number>(0);
  const [running, setRunning] = useState(false);
  const [ready, setReady] = useState(false);
  const [report, setReport] = useState<Array<{ key: string; accuracy: number }>>([]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const landmarkerRef = useRef<PoseLandmarker | null>(null);

  const { speak } = useSpeech();

  const reference = useMemo(() => REFERENCE_SHOTS[shot], [shot]);

  useEffect(() => {
    document.title = `Cricket Shot Trainer – ${shot}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Real-time cricket shot posture coaching with pose detection, visual overlays, audio feedback, and scoring.");
  }, [shot]);

  // Initialize MediaPipe landmarker
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
        );
        const landmarker = await PoseLandmarker.createFromOptions(filesetResolver, {
          baseOptions: { modelAssetPath: MODEL_URL },
          runningMode: "VIDEO",
          numPoses: 1,
        });
        if (!mounted) return;
        landmarkerRef.current = landmarker;
        setReady(true);
      } catch (e) {
        console.error(e);
        toast({ title: "Failed to load pose model", description: "Please refresh and try again." });
      }
    })();
    return () => {
      mounted = false;
      landmarkerRef.current?.close();
      landmarkerRef.current = null;
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setRunning(true);
        loop();
      }
    } catch (e) {
      console.error(e);
      toast({ title: "Camera access denied", description: "Please enable camera permissions." });
    }
  };

  const stopCamera = () => {
    setRunning(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const v = videoRef.current;
    if (v && v.srcObject) {
      (v.srcObject as MediaStream).getTracks().forEach((t) => t.stop());
      v.srcObject = null;
    }
  };

  const draw = (landmarks: any[] | undefined, jointsOk?: Record<string, boolean>) => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Mirror for coaching feel
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();

    if (!landmarks || !landmarks[0]) return;
    const lm = landmarks[0];

    // Draw skeleton
    ctx.lineWidth = 4;
    ctx.strokeStyle = `hsl(var(--muted-foreground))`;
    ctx.globalAlpha = 0.9;
    for (const [a, b] of POSE_CONNECTIONS) {
      const pa = lm[a];
      const pb = lm[b];
      if (!pa || !pb) continue;
      const ax = (1 - pa.x) * canvas.width; // mirrored
      const ay = pa.y * canvas.height;
      const bx = (1 - pb.x) * canvas.width;
      const by = pb.y * canvas.height;
      ctx.beginPath();
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.stroke();
    }

    // Key joints color coding
    const jointPoints: Array<{ idx: number; key?: string }> = [
      { idx: 13, key: "front_elbow" },
      { idx: 14, key: "back_elbow" },
      { idx: 25, key: "front_knee" },
      { idx: 11 },
      { idx: 12 },
    ];
    for (const jp of jointPoints) {
      const p = lm[jp.idx];
      if (!p) continue;
      const x = (1 - p.x) * canvas.width;
      const y = p.y * canvas.height;
      const ok = jp.key ? jointsOk?.[jp.key] : undefined;
      ctx.fillStyle = ok == null ? `hsl(var(--accent))` : ok ? `hsl(var(--sidebar-ring))` : `hsl(var(--destructive))`;
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const evaluate = (landmarks: any[] | undefined) => {
    if (!landmarks || !landmarks[0]) return;
    const angles = extractAngles(landmarks[0]) as AngleMap | null;
    if (!angles) return;
    const { result, score } = compareAngles(angles, reference.angles as any, reference.tolerance);
    setScore(score);

    // Speak feedback
    const incorrect = Object.entries(result).filter(([, v]) => !v.ok).map(([k]) => k);
    if (incorrect.length === 0 && score > 90) {
      speak("Perfect shot!");
    } else if (incorrect.length > 0) {
      const first = incorrect[0] as keyof typeof reference.tips;
      const tip = reference.tips[first] ?? `Adjust your ${first.replace("_", " ")}`;
      speak(tip);
    }

    const jointsOk: Record<string, boolean> = Object.fromEntries(
      Object.entries(result).map(([k, v]) => [k, v.ok])
    );
    draw(landmarks, jointsOk);
  };

  const loop = () => {
    const v = videoRef.current;
    const landmarker = landmarkerRef.current;
    if (!v || !landmarker) return;
    const ts = performance.now();
    const res = landmarker.detectForVideo(v, ts);
    evaluate(res.landmarks as any);
    rafRef.current = requestAnimationFrame(loop);
  };

  // Analysis mode: upload video and compute joint accuracy over frames
  const onVideoFile = async (file: File) => {
    stopCamera();
    const url = URL.createObjectURL(file);
    const v = videoRef.current;
    if (!v) return;
    v.srcObject = null;
    v.src = url;
    await v.play();

    const landmarker = landmarkerRef.current;
    if (!landmarker) return;

    const counts: Record<string, { ok: number; total: number }> = {
      front_elbow: { ok: 0, total: 0 },
      back_elbow: { ok: 0, total: 0 },
      shoulder_rotation: { ok: 0, total: 0 },
      front_knee: { ok: 0, total: 0 },
      spine_tilt: { ok: 0, total: 0 },
    };

    const step = async () => {
      if (v.paused || v.ended) return finalize();
      const res = landmarker.detectForVideo(v, performance.now());
      const lm = (res.landmarks as any[] | undefined);
      draw(lm);
      if (lm && lm[0]) {
        const angles = extractAngles(lm[0]);
        if (angles) {
          const cmp = compareAngles(angles, reference.angles as any, reference.tolerance);
          for (const [k, val] of Object.entries(cmp.result)) {
            counts[k] = counts[k] || { ok: 0, total: 0 };
            counts[k].total += 1;
            if (val.ok) counts[k].ok += 1;
          }
        }
      }
      requestAnimationFrame(step);
    };

    const finalize = () => {
      const report = Object.entries(counts).map(([key, v]) => ({
        key,
        accuracy: v.total ? Math.round((v.ok / v.total) * 100) : 0,
      }));
      setReport(report);
      const overall = Math.round(
        report.reduce((acc, r) => acc + r.accuracy, 0) / Math.max(report.length, 1)
      );
      setScore(overall);
      speak("Analysis complete");
    };

    requestAnimationFrame(step);
  };

  return (
    <section className="container py-10 space-y-6">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Cricket Shot Trainer</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Real-time cricket posture coaching with pose detection, visual overlays, audio feedback, and scoring. Practice or upload a clip for analysis.</p>
      </header>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Coach Console</span>
            <Badge variant="secondary">Score: {score}%</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            <div className="flex-1">
              <Select value={shot} onValueChange={(v) => setShot(v as ShotType)}>
                <SelectTrigger aria-label="Select shot type"><SelectValue placeholder="Select shot" /></SelectTrigger>
                <SelectContent>
                  {Object.keys(REFERENCE_SHOTS).map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button onClick={startCamera} disabled={!ready || running}>Start Practice</Button>
              <Button variant="secondary" onClick={stopCamera} disabled={!running}>Stop</Button>
            </div>
          </div>

          <Tabs value={mode} onValueChange={(v) => setMode(v as any)}>
            <TabsList>
              <TabsTrigger value="practice">Practice Mode</TabsTrigger>
              <TabsTrigger value="analysis">Analysis Mode</TabsTrigger>
            </TabsList>
            <TabsContent value="practice" className="space-y-2">
              <div className="relative rounded-lg overflow-hidden border">
                <video ref={videoRef} className="w-full h-auto block" playsInline muted />
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
              </div>
              <p className="text-sm text-muted-foreground">Tips are spoken aloud. Ensure your volume is on. Joints turn green when correct, red when off.</p>
            </TabsContent>
            <TabsContent value="analysis" className="space-y-3">
              <div className="flex items-center gap-3">
                <input type="file" accept="video/*" onChange={(e) => e.target.files && onVideoFile(e.target.files[0])} />
                <span className="text-sm text-muted-foreground">Upload a short clip (5–10s) of your shot for a detailed report.</span>
              </div>
              <div className="relative rounded-lg overflow-hidden border">
                <video ref={videoRef} className="w-full h-auto block" controls playsInline />
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
              </div>
              {report.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  {report.map((r) => (
                    <Card key={r.key}>
                      <CardContent className="p-3 text-center">
                        <div className="text-xs uppercase text-muted-foreground">{r.key.replace("_", " ")}</div>
                        <div className="text-2xl font-semibold">{r.accuracy}%</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}
