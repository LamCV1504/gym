export type FitnessGoal = "lose_weight" | "gain_muscle" | "maintain";

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  email?: string;
  phone?: string;
  yearOfBirth?: number;
  gender?: string;
  weight?: number;
  height?: number;
  bodyFat?: number;
  chest?: number;
  waist?: number;
  hip?: number;
  arm?: number;
  thigh?: number;

  goal?: FitnessGoal;
  targetWeight?: number;
}

export interface Membership {
  id: string;
  planName: string;
  startDate: string;
  endDate: string;
  status: "active" | "expired";
}
