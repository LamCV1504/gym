import { create } from "zustand";

type Plan = {
  name: string;
  price: string;
  features: string[];
  discount?: string;
};

type Store = {
  selectedPlan: Plan | null;
  open: boolean;
  setPlan: (plan: Plan) => void;
  close: () => void;
};

export const usePlanStore = create<Store>((set) => ({
  selectedPlan: null,
  open: false,
  setPlan: (plan) => set({ selectedPlan: plan, open: true }),
  close: () => set({ open: false, selectedPlan: null }),
}));
