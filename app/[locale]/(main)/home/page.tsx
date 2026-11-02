"use client";

import { MemberHome } from "@/modules/member/home/page";
import { useAuthStore } from "@/stores/auth-store";

export default function HomePage() {
  const user = useAuthStore((s) => s.user);

  if (!user) return null;

  switch (user.role) {
    case "admin":
      return <div />;
    case "trainer":
      return <div />;
    case "member":
      return <MemberHome />;
  }
}
