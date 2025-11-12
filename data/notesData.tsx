import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/image-0.png"),
    title: "Belajar Mobile App",
    description: "Belajar membuat aplikasi mobile app",
    date: "29 Oktober 2025",
  },
  {
    id: 2,
    image: require("@/assets/images/image-1.png"),
    title: "Belajar Backend",
    description: "Belajar membuat restful api",
    date: "30 Oktober 2025",
  },
  {
    id: 3,
    image: require("@/assets/images/image-2.png"),
    title: "Belajar Frontend",
    description: "Belajar membuat dashboard menggunakan React",
    date: "30 Oktober 2025",
  },
  {
    id: 4,
    image: require("@/assets/images/image-3.png"),
    title: "Belajar Backend",
    description: "Belajar membuat restful api",
    date: "30 Oktober 2025",
  },
];

export type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};
