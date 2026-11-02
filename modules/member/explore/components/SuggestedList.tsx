import { exercises } from "../data/mockData";

export function SuggestedList({ current, onSelect }: any) {
  const suggested = exercises.filter(
    (e) =>
      e.id !== current.id &&
      e.muscles.some((m) => current.muscles.includes(m))
  );

  return (
    <div>
      <h3 className="font-semibold mb-2">Suggested</h3>
      {suggested.map((e) => (
        <div
          key={e.id}
          className="mb-3 cursor-pointer"
          onClick={() => onSelect(e)}
        >
          <img src={e.thumbnail} className="w-full rounded-lg" />
          <p className="text-sm font-medium mt-1">{e.name}</p>
        </div>
      ))}
    </div>
  );
}