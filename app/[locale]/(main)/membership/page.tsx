"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CurrentMembershipCard from "@/modules/member/membership/components/membership-card";
import { PersonalPromotionCard } from "@/modules/member/membership/components/promotion-card";
import { RecommendedPlans } from "@/modules/member/membership/components/recommended-plan";
import {
  TransactionHistory,
  UsageHistory,
} from "@/modules/member/membership/components/transaction-history";
import {
  mockPlans,
  mockPromo,
} from "@/modules/member/membership/data/mockData";

const mockMembership = {
  name: "Premium Plan",
  status: "active",
  startDate: "01/04/2026",
  endDate: "01/05/2026",
  totalSessions: 30,
  usedSessions: 12,
  benefits: [
    "Gym access",
    "Unlimited classes",
    "1 PT session/week",
    "Priority booking",
  ],
};

const mockTransactions = [
  {
    id: "1",
    plan: "Premium Plan",
    amount: "$49",
    date: "01/04/2026",
    status: "paid",
  },
  {
    id: "2",
    plan: "Pro Plan",
    amount: "$29",
    date: "01/03/2026",
    status: "paid",
  },
];

const mockUsage = [
  {
    id: "1",
    type: "class",
    name: "Yoga Class",
    date: "10/04/2026",
  },
  {
    id: "2",
    type: "gym",
    name: "Gym Check-in",
    date: "09/04/2026",
  },
];

export default function MembershipPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="membership">
        {/* TAB HEADER */}
        <TabsList>
          <TabsTrigger value="membership">Membership</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        {/* TAB 1 */}
        <TabsContent value="membership" className="space-y-6">
          <CurrentMembershipCard data={mockMembership} />
          <PersonalPromotionCard promo={mockPromo} />
          <RecommendedPlans plans={mockPlans} />
        </TabsContent>

        {/* TAB 2 */}
        <TabsContent value="history">
          <TransactionHistory data={mockTransactions} />
          {/* <UsageHistory data={mockUsage} /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
