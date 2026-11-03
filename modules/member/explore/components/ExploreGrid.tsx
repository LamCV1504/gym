import type { Exercise } from "../type";
import { ExerciseCard } from "./ExcersiceCard";

type ExploreGridProps = {
  data: Exercise[];
  onSelect: (item: Exercise) => void;
};

export function ExploreGrid({ data, onSelect }: ExploreGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-30 gap-4">
      {data.map((item) => (
        <ExerciseCard key={item.id} item={item} onClick={onSelect} />
      ))}
    </div>
  );
}
