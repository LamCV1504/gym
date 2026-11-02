import { Exercise } from "@/modules/member/explore/type";
import { create } from "zustand";

type State = {
  exercises: Exercise[];
  selected: Exercise | null;
  keyword: string;
  setExercises: (data: Exercise[]) => void;
  setSelected: (e: Exercise | null) => void;
  setKeyword: (k: string) => void;
};

export const useExploreStore = create<State>((set) => ({
  exercises: [],
  selected: null,
  keyword: "",
  setExercises: (data) => set({ exercises: data }),
  setSelected: (e) => set({ selected: e }),
  setKeyword: (k) => set({ keyword: k }),
}));