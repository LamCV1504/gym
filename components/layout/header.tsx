"use client";

import {
  ChatBubbleLeftIcon as MessageOutline,
  BellIcon as BellOutline,
  UserIcon as UserOutline,
} from "@heroicons/react/24/outline";

import {
  ChatBubbleLeftIcon as MessageSolid,
  BellIcon as BellSolid,
  UserIcon as UserSolid,
} from "@heroicons/react/24/solid";
import { IconButton } from "../ui/icon-button";
import { useState } from "react";

export function Header() {
  const [activeAction, setActiveAction] = useState<
    "message" | "notification" | "account" | null
  >(null);

  return (
    <div className="absolute top-4 right-10 z-30">
      <div className="flex items-center justify-end gap-4 w-1/3">
        <IconButton
          outline={MessageOutline}
          solid={MessageSolid}
          active={activeAction === "message"}
          ariaLabel="Messages"
          onClick={() => setActiveAction("message")}
        />

        <IconButton
          outline={BellOutline}
          solid={BellSolid}
          active={activeAction === "notification"}
          ariaLabel="Notifications"
          onClick={() => setActiveAction("notification")}
        />

        <IconButton
          outline={UserOutline}
          solid={UserSolid}
          active={activeAction === "account"}
          ariaLabel="Account"
          onClick={() => setActiveAction("account")}
        />
      </div>
    </div>
  );
}
