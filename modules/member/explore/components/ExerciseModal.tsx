import { getEmbedUrl } from "@/lib/utils";
import { SuggestedList } from "./SuggestedList";
import { Button } from "@/components/ui/button";

export function ExerciseModal({ item, onClose, onSelect }: any) {
  if (!item) return null;

  const getAspect = () => {
  switch (item.layout) {
    case "vertical":
      return "aspect-[9/16]";
    case "horizontal":
      return "aspect-video"; // 16:9
    default:
      return "aspect-square";
  }
};

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] h-[80%] rounded-2xl flex overflow-hidden">
        {/* LEFT */}
        <div className="flex-1 p-4 overflow-y-auto">
<div
  className={`
    ${getAspect()}
    mx-auto
    ${item.layout === "vertical" ? "w-[300px]" : "w-full max-w-[800px]"}
  `}
>
  <iframe
    src={`https://www.youtube.com/embed/${item.youtubeId}`}
    className="w-full h-full rounded-xl"
    allowFullScreen
  />
</div>

          <h2 className="text-xl font-bold mt-3">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-sm mt-2">
            Muscles: {item.muscles.join(", ")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-[300px] border-l p-4 overflow-y-auto">
          <SuggestedList current={item} onSelect={onSelect} />
        </div>
      </div>

<Button
        onClick={onClose}
      
        className="absolute top-4 right-4 bg-white-500 px-3 py-1 rounded"
      >
        X
      </Button>
    </div>
  );
}

