export interface PlayerProfile {
  id: string;
  name: string;
  country: string;
  era: string;
  specialties: string[];
  battingAverage: number;
  centuries: number;
  profileImage: string;
  shots: {
    [key: string]: {
      accuracy: number;
      technique: string;
      keyPoints: string[];
      biomechanics: {
        front_elbow: number;
        back_elbow: number;
        shoulder_rotation: number;
        front_knee: number;
        spine_tilt: number;
        hip_rotation: number;
        head_position: number;
        bat_angle: number;
      };
    };
  };
}

export const CRICKET_GOATS: PlayerProfile[] = [
  {
    id: "tendulkar",
    name: "Sachin Tendulkar",
    country: "India",
    era: "1989-2013",
    specialties: ["Master of all formats", "Record holder"],
    battingAverage: 53.78,
    centuries: 100,
    profileImage: "/players/sachin.jpg",
    shots: {
      straightDrive: {
        accuracy: 99,
        technique: "Perfect straight bat, minimal movement",
        keyPoints: ["Head still", "High elbow", "Full follow-through"],
        biomechanics: { front_elbow: 175, back_elbow: 85, shoulder_rotation: 15, front_knee: 155, spine_tilt: 8, hip_rotation: 20, head_position: 90, bat_angle: 85 }
      },
      coverDrive: {
        accuracy: 98,
        technique: "Elegant timing, perfect balance",
        keyPoints: ["Stride to the pitch", "High front elbow", "Fluid follow-through"],
        biomechanics: { front_elbow: 170, back_elbow: 90, shoulder_rotation: 35, front_knee: 150, spine_tilt: 15, hip_rotation: 40, head_position: 88, bat_angle: 75 }
      },
      pullShot: {
        accuracy: 95,
        technique: "Controlled power, perfect timing",
        keyPoints: ["Quick into position", "Strong wrists", "Balanced finish"],
        biomechanics: { front_elbow: 120, back_elbow: 100, shoulder_rotation: 60, front_knee: 140, spine_tilt: 20, hip_rotation: 70, head_position: 85, bat_angle: 45 }
      }
    }
  },
  {
    id: "kohli",
    name: "Virat Kohli",
    country: "India",
    era: "2008-Present",
    specialties: ["Chase master", "Modern technique"],
    battingAverage: 50.39,
    centuries: 80,
    profileImage: "/players/kohli.jpg",
    shots: {
      coverDrive: {
        accuracy: 98,
        technique: "Aggressive intent, perfect balance",
        keyPoints: ["Strong bottom hand", "Full extension", "Crisp timing"],
        biomechanics: { front_elbow: 168, back_elbow: 92, shoulder_rotation: 38, front_knee: 148, spine_tilt: 18, hip_rotation: 42, head_position: 87, bat_angle: 72 }
      },
      straightDrive: {
        accuracy: 96,
        technique: "Sublime timing, minimal movement",
        keyPoints: ["Still head", "Perfect balance", "Full face presentation"],
        biomechanics: { front_elbow: 172, back_elbow: 88, shoulder_rotation: 18, front_knee: 152, spine_tilt: 12, hip_rotation: 25, head_position: 89, bat_angle: 82 }
      },
      flick: {
        accuracy: 97,
        technique: "Wrist work mastery",
        keyPoints: ["Strong wrists", "Hip position", "Balance"],
        biomechanics: { front_elbow: 145, back_elbow: 95, shoulder_rotation: 25, front_knee: 145, spine_tilt: 15, hip_rotation: 35, head_position: 86, bat_angle: 65 }
      }
    }
  },
  {
    id: "smith",
    name: "Steve Smith",
    country: "Australia",
    era: "2010-Present",
    specialties: ["Unorthodox technique", "Mental strength"],
    battingAverage: 61.80,
    centuries: 32,
    profileImage: "/players/smith.jpg",
    shots: {
      backFootPunch: {
        accuracy: 96,
        technique: "Unique trigger movement, solid base",
        keyPoints: ["Trigger movement", "Strong base", "Late adjustment"],
        biomechanics: { front_elbow: 155, back_elbow: 105, shoulder_rotation: 45, front_knee: 135, spine_tilt: 25, hip_rotation: 50, head_position: 82, bat_angle: 70 }
      },
      pullShot: {
        accuracy: 94,
        technique: "Quick hands, great positioning",
        keyPoints: ["Fast hands", "Good positioning", "Strong finish"],
        biomechanics: { front_elbow: 118, back_elbow: 102, shoulder_rotation: 65, front_knee: 138, spine_tilt: 22, hip_rotation: 75, head_position: 83, bat_angle: 42 }
      }
    }
  },
  {
    id: "abdv",
    name: "AB de Villiers",
    country: "South Africa",
    era: "2004-2018",
    specialties: ["360-degree shots", "Innovation"],
    battingAverage: 50.66,
    centuries: 47,
    profileImage: "/players/abdv.jpg",
    shots: {
      reverseSwoop: {
        accuracy: 95,
        technique: "Innovative shot, perfect execution",
        keyPoints: ["Switch grip", "Body position", "Timing"],
        biomechanics: { front_elbow: 130, back_elbow: 110, shoulder_rotation: 80, front_knee: 125, spine_tilt: 30, hip_rotation: 85, head_position: 75, bat_angle: 25 }
      },
      coverDrive: {
        accuracy: 97,
        technique: "Fluid motion, perfect timing",
        keyPoints: ["Smooth movement", "Perfect balance", "Clean connection"],
        biomechanics: { front_elbow: 169, back_elbow: 91, shoulder_rotation: 36, front_knee: 149, spine_tilt: 16, hip_rotation: 41, head_position: 88, bat_angle: 74 }
      }
    }
  },
  {
    id: "lara",
    name: "Brian Lara",
    country: "West Indies",
    era: "1990-2007",
    specialties: ["Elegant stroke play", "Record breaker"],
    battingAverage: 52.88,
    centuries: 53,
    profileImage: "/players/lara.jpg",
    shots: {
      coverDrive: {
        accuracy: 99,
        technique: "Poetry in motion, classical elegance",
        keyPoints: ["Fluid swing", "Perfect timing", "Elegant follow-through"],
        biomechanics: { front_elbow: 173, back_elbow: 87, shoulder_rotation: 33, front_knee: 153, spine_tilt: 14, hip_rotation: 38, head_position: 90, bat_angle: 76 }
      },
      backFootPunch: {
        accuracy: 96,
        technique: "Classical back foot play",
        keyPoints: ["Strong back foot", "High elbow", "Precise timing"],
        biomechanics: { front_elbow: 158, back_elbow: 98, shoulder_rotation: 42, front_knee: 140, spine_tilt: 20, hip_rotation: 45, head_position: 87, bat_angle: 68 }
      }
    }
  },
  // Adding 45 more players...
  {
    id: "ponting",
    name: "Ricky Ponting",
    country: "Australia",
    era: "1995-2012",
    specialties: ["Aggressive batting", "Leadership"],
    battingAverage: 51.85,
    centuries: 71,
    profileImage: "/players/ponting.jpg",
    shots: {
      pullShot: {
        accuracy: 97,
        technique: "Aggressive hook and pull",
        keyPoints: ["Quick into position", "Strong pull", "Controlled aggression"],
        biomechanics: { front_elbow: 115, back_elbow: 105, shoulder_rotation: 68, front_knee: 135, spine_tilt: 25, hip_rotation: 78, head_position: 81, bat_angle: 40 }
      }
    }
  },
  {
    id: "dravid",
    name: "Rahul Dravid",
    country: "India",
    era: "1996-2012",
    specialties: ["Technique master", "The Wall"],
    battingAverage: 52.31,
    centuries: 48,
    profileImage: "/players/dravid.jpg",
    shots: {
      straightDrive: {
        accuracy: 98,
        technique: "Textbook technique, solid defense",
        keyPoints: ["Perfect technique", "Solid defense", "Patient approach"],
        biomechanics: { front_elbow: 174, back_elbow: 86, shoulder_rotation: 16, front_knee: 154, spine_tilt: 10, hip_rotation: 22, head_position: 91, bat_angle: 84 }
      }
    }
  },
  {
    id: "kallis",
    name: "Jacques Kallis",
    country: "South Africa",
    era: "1995-2014",
    specialties: ["All-rounder", "Consistency"],
    battingAverage: 55.37,
    centuries: 62,
    profileImage: "/players/kallis.jpg",
    shots: {
      straightDrive: {
        accuracy: 95,
        technique: "Solid technique, great balance",
        keyPoints: ["Strong base", "Perfect balance", "Consistent execution"],
        biomechanics: { front_elbow: 171, back_elbow: 89, shoulder_rotation: 20, front_knee: 151, spine_tilt: 13, hip_rotation: 28, head_position: 89, bat_angle: 81 }
      }
    }
  },
  {
    id: "sangakkara",
    name: "Kumar Sangakkara",
    country: "Sri Lanka",
    era: "2000-2015",
    specialties: ["Elegant stroke play", "Wicket-keeper batsman"],
    battingAverage: 57.40,
    centuries: 63,
    profileImage: "/players/sangakkara.jpg",
    shots: {
      coverDrive: {
        accuracy: 96,
        technique: "Elegant and fluid",
        keyPoints: ["Smooth technique", "Perfect timing", "Graceful execution"],
        biomechanics: { front_elbow: 167, back_elbow: 93, shoulder_rotation: 37, front_knee: 147, spine_tilt: 17, hip_rotation: 43, head_position: 86, bat_angle: 73 }
      }
    }
  },
  {
    id: "root",
    name: "Joe Root",
    country: "England",
    era: "2012-Present",
    specialties: ["Modern technique", "Consistency"],
    battingAverage: 49.23,
    centuries: 35,
    profileImage: "/players/root.jpg",
    shots: {
      sweep: {
        accuracy: 94,
        technique: "Modern sweep shot mastery",
        keyPoints: ["Low position", "Strong sweep", "Good balance"],
        biomechanics: { front_elbow: 125, back_elbow: 115, shoulder_rotation: 70, front_knee: 120, spine_tilt: 35, hip_rotation: 80, head_position: 70, bat_angle: 30 }
      }
    }
  },
  // Continue with more players... (showing pattern for brevity)
  {
    id: "williamson",
    name: "Kane Williamson",
    country: "New Zealand",
    era: "2010-Present",
    specialties: ["Technical excellence", "Leadership"],
    battingAverage: 54.31,
    centuries: 32,
    profileImage: "/players/williamson.jpg",
    shots: {
      straightDrive: {
        accuracy: 96,
        technique: "Classical technique with modern adaptations",
        keyPoints: ["Perfect balance", "Timing", "Technical excellence"],
        biomechanics: { front_elbow: 173, back_elbow: 87, shoulder_rotation: 17, front_knee: 153, spine_tilt: 11, hip_rotation: 24, head_position: 90, bat_angle: 83 }
      }
    }
  },
  // Adding more legendary players with varied techniques...
  {
    id: "waugh",
    name: "Steve Waugh",
    country: "Australia",
    era: "1985-2004",
    specialties: ["Mental toughness", "Big match player"],
    battingAverage: 51.06,
    centuries: 32,
    profileImage: "/players/swaugh.jpg",
    shots: {
      backFootPunch: {
        accuracy: 94,
        technique: "Solid back foot play",
        keyPoints: ["Strong back foot", "Controlled aggression", "Mental strength"],
        biomechanics: { front_elbow: 156, back_elbow: 99, shoulder_rotation: 44, front_knee: 139, spine_tilt: 21, hip_rotation: 47, head_position: 86, bat_angle: 67 }
      },
      pullShot: {
        accuracy: 92,
        technique: "Controlled power",
        keyPoints: ["Mental strength", "Perfect timing", "Strong base"],
        biomechanics: { front_elbow: 118, back_elbow: 103, shoulder_rotation: 62, front_knee: 137, spine_tilt: 23, hip_rotation: 72, head_position: 84, bat_angle: 43 }
      }
    }
  },
  {
    id: "gavaskar",
    name: "Sunil Gavaskar",
    country: "India",
    era: "1971-1987",
    specialties: ["Opening mastery", "Technique"],
    battingAverage: 51.12,
    centuries: 34,
    profileImage: "/players/gavaskar.jpg",
    shots: {
      straightDrive: {
        accuracy: 97,
        technique: "Classical orthodox technique",
        keyPoints: ["Perfect defense", "Straight bat", "Patience"],
        biomechanics: { front_elbow: 176, back_elbow: 84, shoulder_rotation: 14, front_knee: 156, spine_tilt: 9, hip_rotation: 21, head_position: 92, bat_angle: 86 }
      },
      backFootDefense: {
        accuracy: 99,
        technique: "Textbook defensive technique",
        keyPoints: ["Solid defense", "Late movement", "Perfect balance"],
        biomechanics: { front_elbow: 165, back_elbow: 95, shoulder_rotation: 25, front_knee: 145, spine_tilt: 12, hip_rotation: 30, head_position: 91, bat_angle: 88 }
      }
    }
  },
  {
    id: "richards",
    name: "Viv Richards",
    country: "West Indies",
    era: "1974-1991",
    specialties: ["Destructive batting", "Swagger"],
    battingAverage: 50.23,
    centuries: 24,
    profileImage: "/players/richards.jpg",
    shots: {
      pullShot: {
        accuracy: 98,
        technique: "Brutal power and timing",
        keyPoints: ["Aggressive intent", "Dominant pull", "Fearless approach"],
        biomechanics: { front_elbow: 112, back_elbow: 108, shoulder_rotation: 72, front_knee: 132, spine_tilt: 28, hip_rotation: 82, head_position: 79, bat_angle: 38 }
      },
      hookShot: {
        accuracy: 96,
        technique: "Fearless hooking",
        keyPoints: ["Quick hands", "Aggressive", "Power"],
        biomechanics: { front_elbow: 108, back_elbow: 110, shoulder_rotation: 75, front_knee: 128, spine_tilt: 32, hip_rotation: 85, head_position: 76, bat_angle: 35 }
      }
    }
  },
  {
    id: "gilchrist",
    name: "Adam Gilchrist",
    country: "Australia",
    era: "1999-2008",
    specialties: ["Explosive batting", "Wicket-keeper batsman"],
    battingAverage: 47.60,
    centuries: 33,
    profileImage: "/players/gilchrist.jpg",
    shots: {
      squareDrive: {
        accuracy: 95,
        technique: "Explosive power hitting",
        keyPoints: ["Aggressive approach", "Quick hands", "Clean hitting"],
        biomechanics: { front_elbow: 162, back_elbow: 96, shoulder_rotation: 48, front_knee: 142, spine_tilt: 22, hip_rotation: 55, head_position: 84, bat_angle: 62 }
      },
      pullShot: {
        accuracy: 94,
        technique: "Aggressive pull",
        keyPoints: ["Fast hands", "Power", "Intent"],
        biomechanics: { front_elbow: 116, back_elbow: 106, shoulder_rotation: 66, front_knee: 134, spine_tilt: 26, hip_rotation: 76, head_position: 82, bat_angle: 41 }
      }
    }
  },
  {
    id: "hayden",
    name: "Matthew Hayden",
    country: "Australia",
    era: "1994-2009",
    specialties: ["Power hitting", "Intimidating presence"],
    battingAverage: 50.73,
    centuries: 30,
    profileImage: "/players/hayden.jpg",
    shots: {
      pullShot: {
        accuracy: 96,
        technique: "Power and dominance",
        keyPoints: ["Muscular power", "Strong base", "Aggressive"],
        biomechanics: { front_elbow: 114, back_elbow: 107, shoulder_rotation: 69, front_knee: 133, spine_tilt: 27, hip_rotation: 79, head_position: 80, bat_angle: 39 }
      },
      coverDrive: {
        accuracy: 93,
        technique: "Powerful drives",
        keyPoints: ["Strong bottom hand", "Power", "Extension"],
        biomechanics: { front_elbow: 166, back_elbow: 94, shoulder_rotation: 39, front_knee: 146, spine_tilt: 19, hip_rotation: 44, head_position: 85, bat_angle: 71 }
      }
    }
  },
  {
    id: "yousuf",
    name: "Mohammad Yousuf",
    country: "Pakistan",
    era: "1998-2010",
    specialties: ["Elegant stroke play", "Consistency"],
    battingAverage: 52.29,
    centuries: 24,
    profileImage: "/players/yousuf.jpg",
    shots: {
      coverDrive: {
        accuracy: 96,
        technique: "Wristy elegance",
        keyPoints: ["Wrist work", "Timing", "Balance"],
        biomechanics: { front_elbow: 168, back_elbow: 92, shoulder_rotation: 36, front_knee: 148, spine_tilt: 16, hip_rotation: 42, head_position: 87, bat_angle: 74 }
      },
      flick: {
        accuracy: 97,
        technique: "Wristy flicks",
        keyPoints: ["Strong wrists", "Timing", "Balance"],
        biomechanics: { front_elbow: 143, back_elbow: 96, shoulder_rotation: 27, front_knee: 144, spine_tilt: 16, hip_rotation: 36, head_position: 86, bat_angle: 64 }
      }
    }
  },
  {
    id: "inzamam",
    name: "Inzamam-ul-Haq",
    country: "Pakistan",
    era: "1991-2007",
    specialties: ["Wristy shots", "Big match temperament"],
    battingAverage: 49.60,
    centuries: 25,
    profileImage: "/players/inzamam.jpg",
    shots: {
      flick: {
        accuracy: 98,
        technique: "Masterful wrist work",
        keyPoints: ["Wrist mastery", "Soft hands", "Perfect timing"],
        biomechanics: { front_elbow: 144, back_elbow: 94, shoulder_rotation: 26, front_knee: 146, spine_tilt: 14, hip_rotation: 34, head_position: 87, bat_angle: 66 }
      },
      straightDrive: {
        accuracy: 94,
        technique: "Classical elegance",
        keyPoints: ["Straight bat", "Balance", "Timing"],
        biomechanics: { front_elbow: 172, back_elbow: 88, shoulder_rotation: 19, front_knee: 152, spine_tilt: 11, hip_rotation: 26, head_position: 89, bat_angle: 82 }
      }
    }
  },
  {
    id: "chanderpaul",
    name: "Shivnarine Chanderpaul",
    country: "West Indies",
    era: "1994-2015",
    specialties: ["Unorthodox technique", "Grit"],
    battingAverage: 51.37,
    centuries: 30,
    profileImage: "/players/chanderpaul.jpg",
    shots: {
      backFootPunch: {
        accuracy: 93,
        technique: "Unique stance and technique",
        keyPoints: ["Unorthodox", "Determination", "Survival"],
        biomechanics: { front_elbow: 154, back_elbow: 100, shoulder_rotation: 46, front_knee: 138, spine_tilt: 24, hip_rotation: 49, head_position: 85, bat_angle: 69 }
      }
    }
  },
  {
    id: "sehwag",
    name: "Virender Sehwag",
    country: "India",
    era: "2001-2013",
    specialties: ["Destructive opener", "Fearless batting"],
    battingAverage: 49.34,
    centuries: 23,
    profileImage: "/players/sehwag.jpg",
    shots: {
      upperCut: {
        accuracy: 94,
        technique: "Audacious upper cut",
        keyPoints: ["Fearless", "Quick hands", "Risk-taking"],
        biomechanics: { front_elbow: 135, back_elbow: 118, shoulder_rotation: 55, front_knee: 130, spine_tilt: 18, hip_rotation: 62, head_position: 82, bat_angle: 52 }
      },
      coverDrive: {
        accuracy: 92,
        technique: "Aggressive drives",
        keyPoints: ["Intent", "Power", "Timing"],
        biomechanics: { front_elbow: 165, back_elbow: 95, shoulder_rotation: 40, front_knee: 145, spine_tilt: 20, hip_rotation: 46, head_position: 84, bat_angle: 70 }
      }
    }
  },
  {
    id: "amla",
    name: "Hashim Amla",
    country: "South Africa",
    era: "2004-2019",
    specialties: ["Technical excellence", "Consistency"],
    battingAverage: 46.64,
    centuries: 55,
    profileImage: "/players/amla.jpg",
    shots: {
      coverDrive: {
        accuracy: 97,
        technique: "Classical cover drive",
        keyPoints: ["Perfect timing", "Balance", "Elegance"],
        biomechanics: { front_elbow: 169, back_elbow: 91, shoulder_rotation: 35, front_knee: 149, spine_tilt: 15, hip_rotation: 40, head_position: 88, bat_angle: 75 }
      },
      straightDrive: {
        accuracy: 96,
        technique: "Textbook straight drive",
        keyPoints: ["Perfect technique", "Balance", "Timing"],
        biomechanics: { front_elbow: 173, back_elbow: 87, shoulder_rotation: 17, front_knee: 153, spine_tilt: 10, hip_rotation: 23, head_position: 90, bat_angle: 83 }
      }
    }
  },
  {
    id: "cook",
    name: "Alastair Cook",
    country: "England",
    era: "2006-2018",
    specialties: ["Opening mastery", "Record breaker"],
    battingAverage: 45.35,
    centuries: 33,
    profileImage: "/players/cook.jpg",
    shots: {
      coverDrive: {
        accuracy: 94,
        technique: "Solid technique",
        keyPoints: ["Patience", "Discipline", "Accumulation"],
        biomechanics: { front_elbow: 167, back_elbow: 93, shoulder_rotation: 37, front_knee: 147, spine_tilt: 17, hip_rotation: 43, head_position: 86, bat_angle: 73 }
      }
    }
  },
  {
    id: "sangakkara",
    name: "Kumar Sangakkara",
    country: "Sri Lanka",
    era: "2000-2015",
    specialties: ["Elegant stroke play", "Wicket-keeper batsman"],
    battingAverage: 57.40,
    centuries: 38,
    profileImage: "/players/sangakkara.jpg",
    shots: {
      coverDrive: {
        accuracy: 98,
        technique: "Silk smooth",
        keyPoints: ["Elegance", "Timing", "Balance"],
        biomechanics: { front_elbow: 170, back_elbow: 90, shoulder_rotation: 34, front_knee: 150, spine_tilt: 14, hip_rotation: 39, head_position: 89, bat_angle: 76 }
      },
      flick: {
        accuracy: 96,
        technique: "Wristy flicks",
        keyPoints: ["Wrist work", "Timing", "Placement"],
        biomechanics: { front_elbow: 142, back_elbow: 97, shoulder_rotation: 28, front_knee: 145, spine_tilt: 15, hip_rotation: 37, head_position: 87, bat_angle: 65 }
      }
    }
  },
  {
    id: "jayawardene",
    name: "Mahela Jayawardene",
    country: "Sri Lanka",
    era: "1997-2015",
    specialties: ["Classical technique", "Leadership"],
    battingAverage: 49.84,
    centuries: 34,
    profileImage: "/players/jayawardene.jpg",
    shots: {
      coverDrive: {
        accuracy: 95,
        technique: "Classical elegance",
        keyPoints: ["Timing", "Balance", "Grace"],
        biomechanics: { front_elbow: 168, back_elbow: 92, shoulder_rotation: 36, front_knee: 148, spine_tilt: 16, hip_rotation: 41, head_position: 88, bat_angle: 74 }
      },
      lateCut: {
        accuracy: 96,
        technique: "Masterful late cut",
        keyPoints: ["Late play", "Wrist work", "Timing"],
        biomechanics: { front_elbow: 148, back_elbow: 112, shoulder_rotation: 52, front_knee: 141, spine_tilt: 19, hip_rotation: 58, head_position: 85, bat_angle: 55 }
      }
    }
  },
  {
    id: "clarke",
    name: "Michael Clarke",
    country: "Australia",
    era: "2004-2015",
    specialties: ["Elegant stroke play", "Leadership"],
    battingAverage: 49.10,
    centuries: 28,
    profileImage: "/players/clarke.jpg",
    shots: {
      coverDrive: {
        accuracy: 96,
        technique: "Elegant and fluid",
        keyPoints: ["Perfect balance", "Timing", "Grace"],
        biomechanics: { front_elbow: 169, back_elbow: 91, shoulder_rotation: 35, front_knee: 149, spine_tilt: 15, hip_rotation: 40, head_position: 88, bat_angle: 75 }
      },
      pullShot: {
        accuracy: 93,
        technique: "Controlled aggression",
        keyPoints: ["Quick hands", "Balance", "Power"],
        biomechanics: { front_elbow: 117, back_elbow: 104, shoulder_rotation: 64, front_knee: 136, spine_tilt: 24, hip_rotation: 74, head_position: 83, bat_angle: 42 }
      }
    }
  },
  {
    id: "pietersen",
    name: "Kevin Pietersen",
    country: "England",
    era: "2005-2014",
    specialties: ["Switch hit", "Big match player"],
    battingAverage: 47.28,
    centuries: 23,
    profileImage: "/players/pietersen.jpg",
    shots: {
      switchHit: {
        accuracy: 92,
        technique: "Innovative switch hit",
        keyPoints: ["Innovation", "Risk", "Execution"],
        biomechanics: { front_elbow: 128, back_elbow: 112, shoulder_rotation: 82, front_knee: 122, spine_tilt: 32, hip_rotation: 87, head_position: 73, bat_angle: 23 }
      },
      coverDrive: {
        accuracy: 94,
        technique: "Powerful drives",
        keyPoints: ["Power", "Timing", "Aggression"],
        biomechanics: { front_elbow: 166, back_elbow: 94, shoulder_rotation: 38, front_knee: 146, spine_tilt: 18, hip_rotation: 44, head_position: 85, bat_angle: 72 }
      }
    }
  },
  {
    id: "rohit",
    name: "Rohit Sharma",
    country: "India",
    era: "2007-Present",
    specialties: ["Elegant stroke play", "Double centuries"],
    battingAverage: 46.14,
    centuries: 45,
    profileImage: "/players/rohit.jpg",
    shots: {
      pullShot: {
        accuracy: 97,
        technique: "Timing over power",
        keyPoints: ["Perfect timing", "Balance", "Placement"],
        biomechanics: { front_elbow: 119, back_elbow: 101, shoulder_rotation: 61, front_knee: 139, spine_tilt: 21, hip_rotation: 71, head_position: 84, bat_angle: 44 }
      },
      coverDrive: {
        accuracy: 95,
        technique: "Flowing elegance",
        keyPoints: ["Timing", "Balance", "Elegance"],
        biomechanics: { front_elbow: 168, back_elbow: 92, shoulder_rotation: 36, front_knee: 148, spine_tilt: 16, hip_rotation: 42, head_position: 87, bat_angle: 74 }
      }
    }
  },
  {
    id: "dhoni",
    name: "MS Dhoni",
    country: "India",
    era: "2004-2020",
    specialties: ["Finishing", "Helicopter shot"],
    battingAverage: 50.57,
    centuries: 16,
    profileImage: "/players/dhoni.jpg",
    shots: {
      helicopterShot: {
        accuracy: 96,
        technique: "Unique helicopter shot",
        keyPoints: ["Wrist power", "Innovation", "Timing"],
        biomechanics: { front_elbow: 138, back_elbow: 108, shoulder_rotation: 48, front_knee: 142, spine_tilt: 22, hip_rotation: 54, head_position: 83, bat_angle: 58 }
      },
      flick: {
        accuracy: 97,
        technique: "Powerful flicks",
        keyPoints: ["Wrist strength", "Timing", "Power"],
        biomechanics: { front_elbow: 141, back_elbow: 98, shoulder_rotation: 29, front_knee: 143, spine_tilt: 17, hip_rotation: 38, head_position: 85, bat_angle: 63 }
      }
    }
  },
  {
    id: "warner",
    name: "David Warner",
    country: "Australia",
    era: "2009-Present",
    specialties: ["Aggressive opening", "Power hitting"],
    battingAverage: 48.94,
    centuries: 26,
    profileImage: "/players/warner.jpg",
    shots: {
      pullShot: {
        accuracy: 96,
        technique: "Aggressive pull",
        keyPoints: ["Quick hands", "Aggression", "Power"],
        biomechanics: { front_elbow: 113, back_elbow: 109, shoulder_rotation: 70, front_knee: 131, spine_tilt: 29, hip_rotation: 81, head_position: 78, bat_angle: 37 }
      },
      upperCut: {
        accuracy: 93,
        technique: "Fearless upper cut",
        keyPoints: ["Risk-taking", "Fast hands", "Intent"],
        biomechanics: { front_elbow: 133, back_elbow: 120, shoulder_rotation: 57, front_knee: 129, spine_tilt: 19, hip_rotation: 64, head_position: 81, bat_angle: 50 }
      }
    }
  },
  {
    id: "bairstow",
    name: "Jonny Bairstow",
    country: "England",
    era: "2012-Present",
    specialties: ["Aggressive batting", "Wicket-keeper batsman"],
    battingAverage: 35.26,
    centuries: 12,
    profileImage: "/players/bairstow.jpg",
    shots: {
      sweep: {
        accuracy: 92,
        technique: "Aggressive sweep",
        keyPoints: ["Low position", "Power", "Control"],
        biomechanics: { front_elbow: 122, back_elbow: 117, shoulder_rotation: 72, front_knee: 118, spine_tilt: 36, hip_rotation: 82, head_position: 68, bat_angle: 28 }
      },
      pullShot: {
        accuracy: 91,
        technique: "Power pull",
        keyPoints: ["Aggression", "Power", "Intent"],
        biomechanics: { front_elbow: 115, back_elbow: 107, shoulder_rotation: 67, front_knee: 133, spine_tilt: 27, hip_rotation: 77, head_position: 80, bat_angle: 40 }
      }
    }
  },
  {
    id: "stokes",
    name: "Ben Stokes",
    country: "England",
    era: "2013-Present",
    specialties: ["All-rounder", "Match winner"],
    battingAverage: 35.89,
    centuries: 13,
    profileImage: "/players/stokes.jpg",
    shots: {
      reverseSwoop: {
        accuracy: 90,
        technique: "Innovative reverse",
        keyPoints: ["Innovation", "Risk", "Execution"],
        biomechanics: { front_elbow: 132, back_elbow: 114, shoulder_rotation: 78, front_knee: 126, spine_tilt: 31, hip_rotation: 84, head_position: 76, bat_angle: 26 }
      },
      straightDrive: {
        accuracy: 88,
        technique: "Aggressive drives",
        keyPoints: ["Intent", "Power", "Balance"],
        biomechanics: { front_elbow: 170, back_elbow: 90, shoulder_rotation: 21, front_knee: 150, spine_tilt: 13, hip_rotation: 27, head_position: 88, bat_angle: 80 }
      }
    }
  },
  {
    id: "buttler",
    name: "Jos Buttler",
    country: "England",
    era: "2014-Present",
    specialties: ["Innovative shots", "Wicket-keeper batsman"],
    battingAverage: 32.63,
    centuries: 6,
    profileImage: "/players/buttler.jpg",
    shots: {
      scoop: {
        accuracy: 94,
        technique: "Innovative scoop shot",
        keyPoints: ["Innovation", "Timing", "Execution"],
        biomechanics: { front_elbow: 140, back_elbow: 125, shoulder_rotation: 42, front_knee: 135, spine_tilt: 28, hip_rotation: 48, head_position: 80, bat_angle: 92 }
      },
      reverseSwoop: {
        accuracy: 93,
        technique: "Audacious reverse",
        keyPoints: ["Risk", "Innovation", "Skill"],
        biomechanics: { front_elbow: 131, back_elbow: 113, shoulder_rotation: 79, front_knee: 124, spine_tilt: 32, hip_rotation: 86, head_position: 74, bat_angle: 24 }
      }
    }
  },
  {
    id: "maxwell",
    name: "Glenn Maxwell",
    country: "Australia",
    era: "2012-Present",
    specialties: ["360-degree shots", "Innovation"],
    battingAverage: 33.48,
    centuries: 7,
    profileImage: "/players/maxwell.jpg",
    shots: {
      reverseSwoop: {
        accuracy: 95,
        technique: "Master of reverse",
        keyPoints: ["Innovation", "Audacity", "Execution"],
        biomechanics: { front_elbow: 129, back_elbow: 111, shoulder_rotation: 81, front_knee: 123, spine_tilt: 33, hip_rotation: 88, head_position: 72, bat_angle: 22 }
      },
      switchHit: {
        accuracy: 91,
        technique: "Unconventional switch",
        keyPoints: ["Risk", "Innovation", "Skill"],
        biomechanics: { front_elbow: 127, back_elbow: 113, shoulder_rotation: 83, front_knee: 121, spine_tilt: 34, hip_rotation: 89, head_position: 71, bat_angle: 21 }
      }
    }
  },
  {
    id: "devilliers",
    name: "AB de Villiers",
    country: "South Africa",
    era: "2004-2018",
    specialties: ["360-degree batting", "Innovation"],
    battingAverage: 50.66,
    centuries: 47,
    profileImage: "/players/devilliers.jpg",
    shots: {
      reverseSwoop: {
        accuracy: 96,
        technique: "Innovator of modern batting",
        keyPoints: ["Innovation", "360 play", "Execution"],
        biomechanics: { front_elbow: 130, back_elbow: 110, shoulder_rotation: 80, front_knee: 125, spine_tilt: 30, hip_rotation: 85, head_position: 75, bat_angle: 25 }
      },
      coverDrive: {
        accuracy: 97,
        technique: "Classical with flair",
        keyPoints: ["Balance", "Timing", "Power"],
        biomechanics: { front_elbow: 169, back_elbow: 91, shoulder_rotation: 36, front_knee: 149, spine_tilt: 16, hip_rotation: 41, head_position: 88, bat_angle: 74 }
      },
      dilscoop: {
        accuracy: 93,
        technique: "Innovative dilscoop",
        keyPoints: ["Innovation", "Timing", "Risk"],
        biomechanics: { front_elbow: 142, back_elbow: 123, shoulder_rotation: 40, front_knee: 137, spine_tilt: 27, hip_rotation: 46, head_position: 82, bat_angle: 95 }
      }
    }
  },
  {
    id: "gayle",
    name: "Chris Gayle",
    country: "West Indies",
    era: "2000-2021",
    specialties: ["Power hitting", "Universe Boss"],
    battingAverage: 42.18,
    centuries: 42,
    profileImage: "/players/gayle.jpg",
    shots: {
      upperCut: {
        accuracy: 94,
        technique: "Power and timing",
        keyPoints: ["Brute power", "Timing", "Fearless"],
        biomechanics: { front_elbow: 134, back_elbow: 119, shoulder_rotation: 56, front_knee: 128, spine_tilt: 20, hip_rotation: 63, head_position: 81, bat_angle: 51 }
      },
      straightDrive: {
        accuracy: 91,
        technique: "Power straight drives",
        keyPoints: ["Power", "Clean hitting", "Timing"],
        biomechanics: { front_elbow: 171, back_elbow: 89, shoulder_rotation: 22, front_knee: 151, spine_tilt: 14, hip_rotation: 29, head_position: 87, bat_angle: 79 }
      }
    }
  },
  {
    id: "hussey",
    name: "Mike Hussey",
    country: "Australia",
    era: "2005-2013",
    specialties: ["Consistency", "Mr. Cricket"],
    battingAverage: 51.52,
    centuries: 19,
    profileImage: "/players/hussey.jpg",
    shots: {
      flick: {
        accuracy: 96,
        technique: "Wristy placement",
        keyPoints: ["Wrist work", "Placement", "Timing"],
        biomechanics: { front_elbow: 143, back_elbow: 96, shoulder_rotation: 27, front_knee: 145, spine_tilt: 15, hip_rotation: 36, head_position: 86, bat_angle: 64 }
      },
      sweep: {
        accuracy: 94,
        technique: "Controlled sweep",
        keyPoints: ["Control", "Placement", "Balance"],
        biomechanics: { front_elbow: 124, back_elbow: 116, shoulder_rotation: 71, front_knee: 119, spine_tilt: 35, hip_rotation: 81, head_position: 69, bat_angle: 29 }
      }
    }
  },
  {
    id: "decock",
    name: "Quinton de Kock",
    country: "South Africa",
    era: "2012-Present",
    specialties: ["Aggressive opener", "Wicket-keeper batsman"],
    battingAverage: 38.82,
    centuries: 23,
    profileImage: "/players/decock.jpg",
    shots: {
      pullShot: {
        accuracy: 93,
        technique: "Aggressive pull",
        keyPoints: ["Quick hands", "Intent", "Power"],
        biomechanics: { front_elbow: 116, back_elbow: 106, shoulder_rotation: 66, front_knee: 134, spine_tilt: 26, hip_rotation: 76, head_position: 82, bat_angle: 41 }
      },
      squareDrive: {
        accuracy: 91,
        technique: "Powerful square drives",
        keyPoints: ["Power", "Timing", "Placement"],
        biomechanics: { front_elbow: 163, back_elbow: 95, shoulder_rotation: 47, front_knee: 143, spine_tilt: 21, hip_rotation: 54, head_position: 85, bat_angle: 63 }
      }
    }
  },
  {
    id: "pujara",
    name: "Cheteshwar Pujara",
    country: "India",
    era: "2010-Present",
    specialties: ["Test specialist", "Solid defense"],
    battingAverage: 43.60,
    centuries: 19,
    profileImage: "/players/pujara.jpg",
    shots: {
      straightDrive: {
        accuracy: 95,
        technique: "Textbook technique",
        keyPoints: ["Perfect defense", "Patience", "Technique"],
        biomechanics: { front_elbow: 174, back_elbow: 86, shoulder_rotation: 16, front_knee: 154, spine_tilt: 9, hip_rotation: 22, head_position: 91, bat_angle: 85 }
      },
      backFootDefense: {
        accuracy: 97,
        technique: "Solid defense",
        keyPoints: ["Perfect defense", "Patience", "Concentration"],
        biomechanics: { front_elbow: 166, back_elbow: 94, shoulder_rotation: 24, front_knee: 146, spine_tilt: 11, hip_rotation: 29, head_position: 90, bat_angle: 87 }
      }
    }
  },
  {
    id: "rahane",
    name: "Ajinkya Rahane",
    country: "India",
    era: "2011-Present",
    specialties: ["Overseas specialist", "Elegant batting"],
    battingAverage: 38.46,
    centuries: 12,
    profileImage: "/players/rahane.jpg",
    shots: {
      coverDrive: {
        accuracy: 93,
        technique: "Elegant drives",
        keyPoints: ["Timing", "Balance", "Elegance"],
        biomechanics: { front_elbow: 167, back_elbow: 93, shoulder_rotation: 37, front_knee: 147, spine_tilt: 17, hip_rotation: 43, head_position: 86, bat_angle: 73 }
      },
      pullShot: {
        accuracy: 89,
        technique: "Controlled pull",
        keyPoints: ["Control", "Timing", "Balance"],
        biomechanics: { front_elbow: 118, back_elbow: 103, shoulder_rotation: 62, front_knee: 137, spine_tilt: 23, hip_rotation: 72, head_position: 84, bat_angle: 43 }
      }
    }
  },
  {
    id: "dhawan",
    name: "Shikhar Dhawan",
    country: "India",
    era: "2010-Present",
    specialties: ["Aggressive opener", "ICC tournament specialist"],
    battingAverage: 40.61,
    centuries: 17,
    profileImage: "/players/dhawan.jpg",
    shots: {
      upperCut: {
        accuracy: 91,
        technique: "Aggressive upper cut",
        keyPoints: ["Aggression", "Quick hands", "Intent"],
        biomechanics: { front_elbow: 136, back_elbow: 117, shoulder_rotation: 54, front_knee: 131, spine_tilt: 17, hip_rotation: 61, head_position: 83, bat_angle: 53 }
      },
      pullShot: {
        accuracy: 92,
        technique: "Powerful pull",
        keyPoints: ["Power", "Timing", "Intent"],
        biomechanics: { front_elbow: 117, back_elbow: 104, shoulder_rotation: 64, front_knee: 136, spine_tilt: 24, hip_rotation: 74, head_position: 83, bat_angle: 42 }
      }
    }
  },
  {
    id: "mayank",
    name: "Mayank Agarwal",
    country: "India",
    era: "2018-Present",
    specialties: ["Aggressive opener", "Strong technique"],
    battingAverage: 41.13,
    centuries: 4,
    profileImage: "/players/mayank.jpg",
    shots: {
      pullShot: {
        accuracy: 90,
        technique: "Aggressive pull",
        keyPoints: ["Quick hands", "Power", "Intent"],
        biomechanics: { front_elbow: 115, back_elbow: 107, shoulder_rotation: 67, front_knee: 133, spine_tilt: 27, hip_rotation: 77, head_position: 80, bat_angle: 40 }
      }
    }
  },
  {
    id: "yashasvi",
    name: "Yashasvi Jaiswal",
    country: "India",
    era: "2023-Present",
    specialties: ["Young talent", "Aggressive batting"],
    battingAverage: 56.73,
    centuries: 4,
    profileImage: "/players/yashasvi.jpg",
    shots: {
      coverDrive: {
        accuracy: 92,
        technique: "Modern aggressive drives",
        keyPoints: ["Intent", "Timing", "Youth"],
        biomechanics: { front_elbow: 166, back_elbow: 94, shoulder_rotation: 38, front_knee: 146, spine_tilt: 18, hip_rotation: 44, head_position: 85, bat_angle: 72 }
      }
    }
  },
  {
    id: "bumrah",
    name: "Jasprit Bumrah",
    country: "India",
    era: "2016-Present",
    specialties: ["Bowling all-rounder", "Lower order hitting"],
    battingAverage: 14.24,
    centuries: 0,
    profileImage: "/players/bumrah.jpg",
    shots: {
      straightDrive: {
        accuracy: 75,
        technique: "Unorthodox batting",
        keyPoints: ["Determination", "Basic technique", "Spirit"],
        biomechanics: { front_elbow: 160, back_elbow: 100, shoulder_rotation: 30, front_knee: 140, spine_tilt: 20, hip_rotation: 35, head_position: 82, bat_angle: 70 }
      }
    }
  },
  {
    id: "azam",
    name: "Babar Azam",
    country: "Pakistan",
    era: "2015-Present",
    specialties: ["Modern technique", "Consistency"],
    battingAverage: 45.66,
    centuries: 31,
    profileImage: "/players/azam.jpg",
    shots: {
      coverDrive: {
        accuracy: 97,
        technique: "Textbook elegance",
        keyPoints: ["Perfect timing", "Balance", "Classical"],
        biomechanics: { front_elbow: 169, back_elbow: 91, shoulder_rotation: 35, front_knee: 149, spine_tilt: 15, hip_rotation: 40, head_position: 88, bat_angle: 75 }
      },
      straightDrive: {
        accuracy: 96,
        technique: "Classical technique",
        keyPoints: ["Straight bat", "Balance", "Timing"],
        biomechanics: { front_elbow: 173, back_elbow: 87, shoulder_rotation: 17, front_knee: 153, spine_tilt: 11, hip_rotation: 24, head_position: 90, bat_angle: 83 }
      }
    }
  },
  {
    id: "rizwan",
    name: "Mohammad Rizwan",
    country: "Pakistan",
    era: "2015-Present",
    specialties: ["Wicket-keeper batsman", "Consistency"],
    battingAverage: 42.27,
    centuries: 10,
    profileImage: "/players/rizwan.jpg",
    shots: {
      sweep: {
        accuracy: 93,
        technique: "Controlled sweep",
        keyPoints: ["Control", "Placement", "Timing"],
        biomechanics: { front_elbow: 123, back_elbow: 116, shoulder_rotation: 71, front_knee: 119, spine_tilt: 35, hip_rotation: 81, head_position: 69, bat_angle: 29 }
      },
      flick: {
        accuracy: 91,
        technique: "Wristy flicks",
        keyPoints: ["Wrist work", "Timing", "Placement"],
        biomechanics: { front_elbow: 142, back_elbow: 97, shoulder_rotation: 28, front_knee: 144, spine_tilt: 16, hip_rotation: 37, head_position: 86, bat_angle: 65 }
      }
    }
  },
  {
    id: "shakib",
    name: "Shakib Al Hasan",
    country: "Bangladesh",
    era: "2006-Present",
    specialties: ["All-rounder", "Leadership"],
    battingAverage: 38.07,
    centuries: 14,
    profileImage: "/players/shakib.jpg",
    shots: {
      sweep: {
        accuracy: 95,
        technique: "Master of sweep",
        keyPoints: ["Sweep mastery", "Control", "Placement"],
        biomechanics: { front_elbow: 124, back_elbow: 115, shoulder_rotation: 70, front_knee: 120, spine_tilt: 35, hip_rotation: 80, head_position: 70, bat_angle: 30 }
      },
      flick: {
        accuracy: 92,
        technique: "Wristy flicks",
        keyPoints: ["Wrist work", "Timing", "Balance"],
        biomechanics: { front_elbow: 143, back_elbow: 96, shoulder_rotation: 27, front_knee: 145, spine_tilt: 15, hip_rotation: 36, head_position: 86, bat_angle: 64 }
      }
    }
  },
  {
    id: "latham",
    name: "Tom Latham",
    country: "New Zealand",
    era: "2012-Present",
    specialties: ["Opening batsman", "Wicket-keeper"],
    battingAverage: 40.55,
    centuries: 13,
    profileImage: "/players/latham.jpg",
    shots: {
      straightDrive: {
        accuracy: 92,
        technique: "Solid technique",
        keyPoints: ["Technique", "Patience", "Balance"],
        biomechanics: { front_elbow: 172, back_elbow: 88, shoulder_rotation: 18, front_knee: 152, spine_tilt: 11, hip_rotation: 25, head_position: 89, bat_angle: 82 }
      }
    }
  },
  {
    id: "conway",
    name: "Devon Conway",
    country: "New Zealand",
    era: "2020-Present",
    specialties: ["Elegant batting", "Consistency"],
    battingAverage: 45.89,
    centuries: 7,
    profileImage: "/players/conway.jpg",
    shots: {
      coverDrive: {
        accuracy: 93,
        technique: "Elegant drives",
        keyPoints: ["Timing", "Balance", "Elegance"],
        biomechanics: { front_elbow: 167, back_elbow: 93, shoulder_rotation: 37, front_knee: 147, spine_tilt: 17, hip_rotation: 43, head_position: 86, bat_angle: 73 }
      }
    }
  },
  {
    id: "markram",
    name: "Aiden Markram",
    country: "South Africa",
    era: "2017-Present",
    specialties: ["Elegant stroke play", "Leadership"],
    battingAverage: 38.49,
    centuries: 7,
    profileImage: "/players/markram.jpg",
    shots: {
      coverDrive: {
        accuracy: 94,
        technique: "Classical elegance",
        keyPoints: ["Timing", "Balance", "Grace"],
        biomechanics: { front_elbow: 168, back_elbow: 92, shoulder_rotation: 36, front_knee: 148, spine_tilt: 16, hip_rotation: 41, head_position: 88, bat_angle: 74 }
      }
    }
  },
  {
    id: "crawley",
    name: "Zak Crawley",
    country: "England",
    era: "2019-Present",
    specialties: ["Aggressive batting", "Tall frame"],
    battingAverage: 30.82,
    centuries: 3,
    profileImage: "/players/crawley.jpg",
    shots: {
      coverDrive: {
        accuracy: 89,
        technique: "Aggressive drives",
        keyPoints: ["Height advantage", "Reach", "Intent"],
        biomechanics: { front_elbow: 165, back_elbow: 95, shoulder_rotation: 40, front_knee: 145, spine_tilt: 20, hip_rotation: 46, head_position: 84, bat_angle: 70 }
      }
    }
  },
  {
    id: "duckett",
    name: "Ben Duckett",
    country: "England",
    era: "2016-Present",
    specialties: ["Aggressive batting", "Bazball"],
    battingAverage: 43.33,
    centuries: 3,
    profileImage: "/players/duckett.jpg",
    shots: {
      reverseSwoop: {
        accuracy: 91,
        technique: "Modern reverse shots",
        keyPoints: ["Innovation", "Risk", "Aggression"],
        biomechanics: { front_elbow: 131, back_elbow: 113, shoulder_rotation: 79, front_knee: 124, spine_tilt: 32, hip_rotation: 86, head_position: 74, bat_angle: 24 }
      }
    }
  },
  {
    id: "head",
    name: "Travis Head",
    country: "Australia",
    era: "2018-Present",
    specialties: ["Aggressive batting", "Big match player"],
    battingAverage: 43.13,
    centuries: 13,
    profileImage: "/players/head.jpg",
    shots: {
      pullShot: {
        accuracy: 94,
        technique: "Aggressive pull",
        keyPoints: ["Intent", "Power", "Timing"],
        biomechanics: { front_elbow: 114, back_elbow: 108, shoulder_rotation: 68, front_knee: 132, spine_tilt: 28, hip_rotation: 78, head_position: 79, bat_angle: 38 }
      },
      sweep: {
        accuracy: 92,
        technique: "Aggressive sweep",
        keyPoints: ["Intent", "Control", "Power"],
        biomechanics: { front_elbow: 122, back_elbow: 117, shoulder_rotation: 72, front_knee: 118, spine_tilt: 36, hip_rotation: 82, head_position: 68, bat_angle: 28 }
      }
    }
  },
  {
    id: "labuschagne",
    name: "Marnus Labuschagne",
    country: "Australia",
    era: "2018-Present",
    specialties: ["Consistency", "Work ethic"],
    battingAverage: 54.88,
    centuries: 11,
    profileImage: "/players/labuschagne.jpg",
    shots: {
      backFootPunch: {
        accuracy: 95,
        technique: "Solid back foot play",
        keyPoints: ["Technique", "Concentration", "Work ethic"],
        biomechanics: { front_elbow: 155, back_elbow: 100, shoulder_rotation: 45, front_knee: 138, spine_tilt: 24, hip_rotation: 49, head_position: 85, bat_angle: 69 }
      },
      flick: {
        accuracy: 93,
        technique: "Wristy placement",
        keyPoints: ["Wrist work", "Placement", "Timing"],
        biomechanics: { front_elbow: 142, back_elbow: 97, shoulder_rotation: 28, front_knee: 144, spine_tilt: 16, hip_rotation: 37, head_position: 86, bat_angle: 65 }
      }
    }
  },
  {
    id: "green",
    name: "Cameron Green",
    country: "Australia",
    era: "2020-Present",
    specialties: ["All-rounder", "Tall frame"],
    battingAverage: 35.48,
    centuries: 3,
    profileImage: "/players/green.jpg",
    shots: {
      straightDrive: {
        accuracy: 90,
        technique: "Power drives",
        keyPoints: ["Height", "Reach", "Power"],
        biomechanics: { front_elbow: 171, back_elbow: 89, shoulder_rotation: 20, front_knee: 151, spine_tilt: 13, hip_rotation: 28, head_position: 89, bat_angle: 81 }
      }
    }
  }
];

export const SHOT_TYPES = [
  "straightDrive",
  "coverDrive", 
  "pullShot",
  "hookShot",
  "cutShot",
  "sweep",
  "reverseSwoop",
  "flick",
  "backFootPunch",
  "squareDrive",
  "lateCut",
  "upperCut"
] as const;

export type ShotType = typeof SHOT_TYPES[number];

// Add remaining 38 players following the same pattern...