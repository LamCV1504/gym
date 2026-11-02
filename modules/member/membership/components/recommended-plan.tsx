"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  price: string;
  features: string[];
  discount?: string;
};

export function RecommendedPlans({ plans }: { plans: Plan[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recommended for you</h3>

      <div className="grid md:grid-cols-2 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-2xl border p-5 space-y-3 hover:shadow-md transition flex flex-col"
          >
            <div className="flex justify-between items-center h-1/4">
              <h4 className="font-semibold">{plan.name}</h4>
              {plan.discount && (
                <Badge className="bg-red-500 text-white">{plan.discount}</Badge>
              )}
            </div>

            <p className="text-xl font-bold h-1/4">{plan.price}</p>

            <ul className="text-sm text-gray-600 space-y-1 flex flex-col items-start flex-1 h-full">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <div>
              <Button className="w-full">Choose Plan</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
