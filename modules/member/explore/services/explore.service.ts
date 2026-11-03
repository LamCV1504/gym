import { exercises } from "../data/mockData";
import type { Exercise } from "../type";

export const exploreService = {
  async getExercises(): Promise<Exercise[]> {
    return exercises;
  },
};
