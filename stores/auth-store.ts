import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Role = "member" | "trainer" | "admin";

type User = {
  id: string;
  phone: string;
  name: string;
  role: Role;
  avatar: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);
