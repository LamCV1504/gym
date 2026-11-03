'use client'

import { ExerciseModal } from "@/modules/member/explore/components/ExerciseModal";
import { ExploreGrid } from "@/modules/member/explore/components/ExploreGrid";
import { SearchBar } from "@/modules/member/explore/components/SearchBar";
import { exercises } from "@/modules/member/explore/data/mockData";
import { Exercise } from "@/modules/member/explore/type";
import { useState } from "react";

export default function ExplorePage() {
  const [selected, setSelected] = useState<Exercise | null>(null);
  const [keyword, setKeyword] = useState("");

  const filtered: Exercise[] = exercises.filter((e) =>
    e.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="p-4">
      <SearchBar onSearch={setKeyword} />

      <ExploreGrid data={filtered} onSelect={setSelected} />

      <ExerciseModal
        item={selected}
        onClose={() => setSelected(null)}
        onSelect={setSelected}
      />
    </div>
  );
}
