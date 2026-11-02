import { Button } from "@/components/ui/button";

export function CurrentPlanCard() {
  return (
    <div className="p-3">
      <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md">
        <div className="text-sm text-white/70">Current Plan</div>
        <div className="font-semibold">Premium</div>

        <Button className="mt-3 w-full gradient-primary glow text-black py-2 rounded-lg text-sm">
          Upgrade
        </Button>
      </div>
    </div>
  );
}
