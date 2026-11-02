
export type Exercise = {
  id: number;
  name: string;
  youtubeId: string;
  muscles: string[];
  description: string;
  layout: "square" | "vertical" | "horizontal";
};