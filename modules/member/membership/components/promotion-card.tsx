"use client";

import { Button } from "@/components/ui/button";

type Promo = {
  title: string;
  description: string;
  discount: string;
  expiresIn: string;
};

export function PersonalPromotionCard({ promo }: { promo: Promo }) {
  return (
    <div className="rounded-2xl border border-orange-300 bg-orange-50 p-5 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-orange-700">🔥 {promo.title}</h3>
        <span className="text-sm text-orange-600">{promo.expiresIn}</span>
      </div>

      <p className="text-sm text-gray-700">{promo.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-orange-600">
          {promo.discount}
        </span>
        <Button>Use now</Button>
      </div>
    </div>
  );
}
