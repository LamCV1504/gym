import { getThumbnail } from "@/lib/utils";
import Image from "next/image";
import type { Exercise } from "../type";

type ExerciseCardProps = {
  item: Exercise;
  onClick: (item: Exercise) => void;
};

export function ExerciseCard({ item, onClick }: ExerciseCardProps) {
  const getSpan = () => {
    switch (item.layout) {
      case "vertical":
        return "row-span-3 col-span-1"; // 📱 reels
      case "horizontal":
        return "row-span-2 col-span-2"; // 🎬 video ngang
      default:
        return "row-span-2 col-span-1"; // 🟦 square
    }
  };

  return (
    <div
      onClick={() => onClick(item)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${getSpan()}`}
    >
      {/* Thumbnail */}
      <Image
        src={getThumbnail(item.youtubeId)}
        alt={item.name}
        fill
        unoptimized
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition" />

      {/* Info */}
      <div className="absolute bottom-2 left-2 text-white">
        <p className="text-sm font-semibold">{item.name}</p>
      </div>
    </div>
  );
}
