export interface Point {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
}

export const toDegrees = (rad: number) => (rad * 180) / Math.PI;

export function calculateAngle(a: Point, b: Point, c: Point): number {
  // Angle ABC (at point B)
  const ab = { x: a.x - b.x, y: a.y - b.y };
  const cb = { x: c.x - b.x, y: c.y - b.y };
  const dot = ab.x * cb.x + ab.y * cb.y;
  const magAB = Math.hypot(ab.x, ab.y);
  const magCB = Math.hypot(cb.x, cb.y);
  if (magAB === 0 || magCB === 0) return 0;
  let angle = Math.acos(Math.min(Math.max(dot / (magAB * magCB), -1), 1));
  return Math.abs(toDegrees(angle)); // 0..180
}

export type Landmarks = Point[]; // MediaPipe returns normalized [0..1]

// MediaPipe Pose indexes
const L = {
  shoulder: 11,
  elbow: 13,
  wrist: 15,
  hip: 23,
  knee: 25,
  ankle: 27,
};
const R = {
  shoulder: 12,
  elbow: 14,
  wrist: 16,
  hip: 24,
  knee: 26,
  ankle: 28,
};

export type AngleMap = {
  front_elbow: number;
  back_elbow: number;
  shoulder_rotation: number;
  front_knee: number;
  spine_tilt: number;
};

export function extractAngles(landmarks: Landmarks): AngleMap | null {
  if (!landmarks || landmarks.length < 33) return null;

  const left = {
    shoulder: landmarks[L.shoulder],
    elbow: landmarks[L.elbow],
    wrist: landmarks[L.wrist],
    hip: landmarks[L.hip],
    knee: landmarks[L.knee],
    ankle: landmarks[L.ankle],
  };
  const right = {
    shoulder: landmarks[R.shoulder],
    elbow: landmarks[R.elbow],
    wrist: landmarks[R.wrist],
    hip: landmarks[R.hip],
    knee: landmarks[R.knee],
    ankle: landmarks[R.ankle],
  };

  // Right-handed default: front side = left
  const front_elbow = calculateAngle(left.wrist, left.elbow, left.shoulder);
  const back_elbow = calculateAngle(right.wrist, right.elbow, right.shoulder);

  // Shoulder rotation: angle of shoulder line to horizontal
  const dx = right.shoulder.x - left.shoulder.x;
  const dy = right.shoulder.y - left.shoulder.y;
  const shoulder_rotation = Math.abs(toDegrees(Math.atan2(dy, dx)));

  const front_knee = calculateAngle(left.hip, left.knee, left.ankle);

  // Spine tilt: angle between vector (mid-hip -> mid-shoulder) and vertical
  const midHip = {
    x: (left.hip.x + right.hip.x) / 2,
    y: (left.hip.y + right.hip.y) / 2,
  };
  const midShoulder = {
    x: (left.shoulder.x + right.shoulder.x) / 2,
    y: (left.shoulder.y + right.shoulder.y) / 2,
  };
  const v = { x: midShoulder.x - midHip.x, y: midShoulder.y - midHip.y };
  const vertical = { x: 0, y: -1 };
  const dot = v.x * vertical.x + v.y * vertical.y;
  const magV = Math.hypot(v.x, v.y);
  const magVert = 1;
  const spine_tilt = magV === 0 ? 0 : Math.abs(toDegrees(Math.acos(Math.min(Math.max(dot / (magV * magVert), -1), 1))));

  return { front_elbow, back_elbow, shoulder_rotation, front_knee, spine_tilt };
}

export function compareAngles(
  current: AngleMap,
  reference: Record<string, number>,
  tolerance: number
) {
  const result: Record<string, { value: number; target: number; ok: boolean }> = {};
  let okCount = 0;
  let total = 0;
  for (const key of Object.keys(reference)) {
    const value = (current as any)[key] as number;
    const target = reference[key];
    const ok = Math.abs(value - target) <= tolerance;
    result[key] = { value, target, ok };
    total++;
    if (ok) okCount++;
  }
  const score = Math.round((okCount / Math.max(total, 1)) * 100);
  return { result, score };
}

export const POSE_CONNECTIONS: Array<[number, number]> = [
  // Arms
  [11, 13],
  [13, 15],
  [12, 14],
  [14, 16],
  // Shoulders & torso
  [11, 12],
  [11, 23],
  [12, 24],
  [23, 24],
  // Legs
  [23, 25],
  [25, 27],
  [24, 26],
  [26, 28],
];
