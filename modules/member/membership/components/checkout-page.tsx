"use client";

import { Button } from "@/components/ui/button";
import { usePlanStore } from "@/stores/usePlan-store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { selectedPlan } = usePlanStore();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState("");

  if (!selectedPlan) {
    return (
      <div className="p-6 text-center">
        <p>No plan selected</p>
        <Button onClick={() => router.push("/membership")}>
          Back to plans
        </Button>
      </div>
    );
  }

  // fake price parse (demo)
  const basePrice = Number(selectedPlan.price.replace(/\D/g, "")) || 0;

  // fake discount logic
  const discount = selectedPlan.discount ? 0.2 : 0;
  const couponDiscount = coupon === "SAVE10" ? 0.1 : 0;

  const finalPrice = basePrice * (1 - discount - couponDiscount);

  const handleCheckout = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/membership/success");
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold">Checkout</h1>

      {/* PLAN SUMMARY */}
      <div className="border rounded-2xl p-5 space-y-3">
        <h2 className="text-lg font-medium">{selectedPlan.name}</h2>
        <p className="text-gray-500">{selectedPlan.price}</p>

        <ul className="text-sm text-gray-600 space-y-1">
          {selectedPlan.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
      </div>

      {/* PROMOTION */}
      <div className="border rounded-2xl p-5 space-y-3">
        <h3 className="font-medium">Promotion</h3>

        {selectedPlan.discount && (
          <p className="text-green-600 text-sm">🎉 Plan discount applied</p>
        )}

        <input
          type="text"
          placeholder="Enter coupon (SAVE10)"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />

        {coupon === "SAVE10" && (
          <p className="text-green-600 text-sm">Coupon applied (-10%)</p>
        )}
      </div>

      {/* PRICE SUMMARY */}
      <div className="border rounded-2xl p-5 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Base price</span>
          <span>${basePrice}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Discount</span>
          <span>-{Math.round((discount + couponDiscount) * 100)}%</span>
        </div>

        <div className="flex justify-between font-semibold text-lg pt-2 border-t">
          <span>Total</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* PAYMENT METHOD */}
      <div className="border rounded-2xl p-5 space-y-3">
        <h3 className="font-medium">Payment Method</h3>

        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked />
            Credit Card
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Momo
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            ZaloPay
          </label>
        </div>
      </div>

      {/* ACTION */}
      <Button className="w-full" onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Confirm Payment"}
      </Button>
    </div>
  );
}
