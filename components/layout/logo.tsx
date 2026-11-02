"use client";

import { useSidebar } from "@/context/sidebar-context";
import { motion } from "framer-motion";

export function LogoLiquid() {
  const { collapsed } = useSidebar();

  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      initial={false}
      animate="animate"
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="falizGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffaa00" />
          <stop offset="100%" stopColor="#ff6a00" />
        </linearGradient>
      </defs>

      <motion.rect
        x="20"
        y="10"
        width="14"
        height="80"
        rx="10"
        fill="url(#falizGradient)"
        animate={{
          scaleY: collapsed ? 0.9 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
        }}
      />

      <motion.rect
        y="10"
        height="14"
        fill="url(#falizGradient)"
        animate={{
          x: collapsed ? 34 : 48,
          width: collapsed ? 42 : 50,
          rx: collapsed ? 10 : 18,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
      />

      <motion.rect
        y="46"
        height="14"
        fill="url(#falizGradient)"
        animate={{
          x: collapsed ? 34 : 42,
          width: collapsed ? 30 : 38,
          rx: collapsed ? 10 : 18,
        }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 20,
          delay: 0.05,
        }}
      />
    </motion.svg>
  );
}
