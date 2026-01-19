export type ShotType = "Cover Drive" | "Pull Shot" | "Straight Drive";

export type JointKey =
  | "front_elbow"
  | "back_elbow"
  | "shoulder_rotation"
  | "front_knee"
  | "spine_tilt";

export interface ShotReference {
  name: ShotType;
  tolerance: number; // degrees
  angles: Record<JointKey, number>;
  tips: Partial<Record<JointKey, string>>;
}

export const DEFAULT_TOLERANCE = 10; // ±10°

// Assumes right-handed batter by default: front = left side, back = right side
export const REFERENCE_SHOTS: Record<ShotType, ShotReference> = {
  "Cover Drive": {
    name: "Cover Drive",
    tolerance: DEFAULT_TOLERANCE,
    angles: {
      front_elbow: 170, // almost straight lead arm
      back_elbow: 90, // back elbow around right angle
      shoulder_rotation: 35, // modest shoulder open
      front_knee: 150, // front knee slightly bent
      spine_tilt: 15, // slight forward lean
    },
    tips: {
      front_elbow: "Straighten your front elbow",
      back_elbow: "Keep your back elbow up around 90°",
      front_knee: "Bend your front knee slightly and stride towards the ball",
      spine_tilt: "Keep a gentle forward spine tilt over the ball",
      shoulder_rotation: "Open your shoulders slightly towards cover",
    },
  },
  "Pull Shot": {
    name: "Pull Shot",
    tolerance: DEFAULT_TOLERANCE,
    angles: {
      front_elbow: 120, // more flex to control
      back_elbow: 100, // powerful bat swing
      shoulder_rotation: 60, // shoulders rotate more
      front_knee: 140, // athletic base
      spine_tilt: 20, // forward athletic tilt
    },
    tips: {
      shoulder_rotation: "Rotate your shoulders more to face the pull",
      front_elbow: "Allow some flex in the front elbow for control",
      back_elbow: "Drive the bat with the back elbow",
    },
  },
  "Straight Drive": {
    name: "Straight Drive",
    tolerance: DEFAULT_TOLERANCE,
    angles: {
      front_elbow: 175, // very straight through contact
      back_elbow: 85, // compact power
      shoulder_rotation: 20, // stay side-on
      front_knee: 155, // stable front knee
      spine_tilt: 10, // subtle forward lean
    },
    tips: {
      shoulder_rotation: "Stay more side-on for a straight drive",
      front_elbow: "Extend your front elbow through the line",
      spine_tilt: "Keep your head over the ball with a light forward tilt",
    },
  },
};
