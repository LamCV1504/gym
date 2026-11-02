"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-semibold">🎉 Payment Successful</h1>
      <p className="text-gray-500">Your plan is now active</p>

      <Button onClick={() => router.push("/membership")}>
        Back to Membership
      </Button>
    </div>
  );
}
