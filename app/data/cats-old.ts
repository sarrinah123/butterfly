import { Cat } from "../types/Cat";

export const cats: Cat[] = [
  {
    id: 1,
    name: "Batman",
    image: "/images/batman.jpg",
    personality: [
      "Protective",
      "Curious",
      "Always watching"
    ],
    funFact:
      "Probably judges everyone silently.",
    note:
      "Every time you talk about him, it sounds like family."
  },

  {
    id: 2,
    name: "Kittu",
    image: "/images/kittu.jpg",
    personality: [
      "Sleepy",
      "Relaxed",
      "Affectionate"
    ],
    funFact:
      "Master of ignoring humans.",
    note:
      "I don't think Kittu has ever rushed a day in his life."
  },

  {
    id: 3,
    name: "Sheru",
    image: "/images/sheru.jpg",
    personality: [
      "Chaotic",
      "Energetic",
      "Playful"
    ],
    funFact:
      "Runs at 3AM.",
    note:
      "Every story involving Sheru somehow ends in chaos."
  }
];