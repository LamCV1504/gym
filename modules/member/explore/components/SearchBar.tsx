export function SearchBar({ onSearch }: { onSearch: (v: string) => void }) {
  return (
    <input
      placeholder="Search exercises..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-3 mb-4 rounded-xl border"
    />
  );
}
