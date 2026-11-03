import { useEffect, useMemo } from "react";
import { exploreService } from "../services/explore.service";
import { useExploreStore } from "@/stores/explore-store";

export function useExplore() {
  const {
    exercises,
    keyword,
    setExercises,
    selected,
    setSelected,
    setKeyword,
  } = useExploreStore();

  useEffect(() => {
    exploreService.getExercises().then(setExercises);
  }, [setExercises]);

  const filtered = useMemo(() => {
    return exercises.filter((e) =>
      e.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [exercises, keyword]);

  return {
    exercises: filtered,
    selected,
    setSelected,
    setKeyword,
  };
}
