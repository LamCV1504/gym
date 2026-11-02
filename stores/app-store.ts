import { create } from "zustand";

type ClassItem = {
  id: number;
  name: string;
  time: string;
};

type Store = {
  userName: string;
  goal: string;
  currentProgress: number;
  message: string;
  branchName: string;
  crowdLevel: "Low" | "Medium" | "High";
  classes: ClassItem[];

  setData: (data: Partial<Store>) => void;
};

export const useAppStore = create<Store>((set) => ({
  userName: "Khanh",
  goal: "build muscle & lose fat",
  message:
    "Keep up the good work! You're making great progress towards your goal.",
  currentProgress: 90,
  branchName: "District 7 Branch",
  crowdLevel: "Medium",
  classes: [],

  setData: (data) => set(data),
}));
