import { X } from "lucide-react";

export default function AiPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed bottom-20 right-6 w-80 h-125 bg-white border rounded-xl shadow-xl flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b">
        <span className="font-semibold">AI Coach</span>

        <button onClick={onClose}>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-3 overflow-auto text-sm">
        <p>👋 Hi! Want a workout suggestion?</p>

        <div className="mt-3 space-y-2">
          <div className="bg-gray-100 p-2 rounded-lg">
            Suggest workout today
          </div>

          <div className="bg-gray-100 p-2 rounded-lg">
            Build muscle plan
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t">
        <input
          placeholder="Ask AI..."
          className="w-full border rounded-lg px-3 py-2 text-sm outline-none"
        />
      </div>

    </div>
  )
}