// profile.store.ts
import { create } from "zustand";
import { Membership, UserProfile } from "../typpe";

interface ProfileState {
  profile: UserProfile | null;
  membership: Membership | null;

  setProfile: (data: UserProfile) => void;
  setMembership: (data: Membership) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: {
    id: "1",
    name: "Lâm Cow",
    avatar: "./avatar1.png",
    phone: "0123456789",
    weight: 66.15,
    height: 175,
    goal: "gain_muscle",
    targetWeight: 69,
  },
  membership: {
    id: "m1",
    planName: "Premium 3 tháng",
    startDate: "2026-03-01",
    endDate: "2026-06-01",
    status: "active",
  },

  setProfile: (data) => set({ profile: data }),
  setMembership: (data) => set({ membership: data }),
}));
