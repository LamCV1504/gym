import { Exercise } from "../type";
import { ExerciseCard } from "./ExcersiceCard";

export function ExploreGrid({ data, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[120px] gap-4">
      {data.map((item) => (
        <ExerciseCard key={item.id} item={item} onClick={onSelect} />
      ))}
    </div>
  );
}