export function CreatePost() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex gap-2">
        <img src="/avatar1.jpg" className="w-10 h-10 rounded-full" />
        <input
          className="flex-1 bg-gray-100 rounded-full px-4"
          placeholder="Bạn đang nghĩ gì?"
        />
      </div>

      <div className="flex justify-between mt-3">
        <button>📷 Image</button>
        <button>🎥 Video</button>
        <button>😊 Feeling</button>
      </div>
    </div>
  );
}