"use client";

import { useRef, useState } from "react";
import { stories } from "../mockData";
import { Button } from "@/components/ui/button";

export function StoryRow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* STORY LIST */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-hidden"
      >
        {/* CREATE STORY */}
        <div className="min-w-[90px] h-[150px] bg-gray-200 rounded-xl flex flex-col justify-end items-center p-2 relative">
          <img
            src="/avatars/avatar1.jpg"
            className="absolute top-0 left-0 w-full h-[70%] object-cover rounded-t-xl"
          />

          <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center z-10">
            +
          </div>

          <p className="text-xs mt-1 z-10">Create Story</p>
        </div>

        {/* STORIES */}
        {stories.map((story) => (
          <div
            key={story.id}
            className="min-w-[90px] h-[150px] rounded-xl overflow-hidden relative"
          >
            <img
              src={story.avatar}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <img
              src={story.avatar}
              className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-blue-500"
            />

            <div className="absolute bottom-2 left-2 text-white text-xs">
              {story.name}
            </div>
          </div>
        ))}
      </div>

      {/* LEFT BUTTON */}
      {hover && (
        <Button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/50 text-black backdrop-blur shadow rounded-full w-8 h-8 flex items-center justify-center"
        >
            {"<"}
        </Button>
      )}

      {/* RIGHT BUTTON */}
      {hover && (
        <Button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/50 text-black backdrop-blur shadow rounded-full w-8 h-8 flex items-center justify-center"
        >
          {">"}
        </Button>
      )}

      {/* GRADIENT LEFT */}
    
    </div>
  );
}