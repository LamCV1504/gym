export function FeedHeader() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex gap-3 items-center">
        <img
          src="/avatar.jpg"
          className="w-10 h-10 rounded-full"
        />

        <button className="flex-1 text-left bg-gray-100 px-4 py-2 rounded-full text-gray-500">
          What's on your mind?
        </button>
      </div>

      <div className="flex justify-between mt-3 text-sm">
        <button className="flex-1">📹 Live</button>
        <button className="flex-1">🖼 Photo</button>
        <button className="flex-1">😊 Feeling</button>
      </div>
    </div>
  );
}