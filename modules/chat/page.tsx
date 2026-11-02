"use client";

type ChatItem = {
  id: string;
  name: string;
  type: "class" | "direct";
  unread?: number;
  online?: boolean;
};

const chats: ChatItem[] = [
  { id: "1", name: "Yoga Class", type: "class", unread: 2 },
  { id: "2", name: "HIIT Team", type: "class" },
  { id: "3", name: "John Doe", type: "direct", online: true },
  { id: "4", name: "Jane Smith", type: "direct" },
  { id: "3", name: "John Doe", type: "direct", online: true },
  { id: "4", name: "Jane Smith", type: "direct" },
  { id: "3", name: "John Doe", type: "direct", online: true },
  { id: "4", name: "Jane Smith", type: "direct" },
  { id: "3", name: "John Doe", type: "direct", online: true },
  { id: "4", name: "Jane Smith", type: "direct" },
];

export function ChatSidebar() {
  const classChats = chats.filter((c) => c.type === "class");
  const directChats = chats.filter((c) => c.type === "direct");

  return (
    <div className="w-full h-full border-t-2 p-4 flex flex-col">
      {/* Header */}
      <h3 className="font-semibold mb-4">Chats</h3>

      {/* Class chats */}
      <Section title="Classes">
        {classChats.map((chat) => (
          <ChatItemRow key={chat.id} chat={chat} />
        ))}
      </Section>

      {/* Direct */}
      <Section title="GymBro">
        {directChats.map((chat) => (
          <ChatItemRow key={chat.id} chat={chat} />
        ))}
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <p className="text-xs text-gray-500 mb-2">{title}</p>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function ChatItemRow({ chat }: { chat: ChatItem }) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />

          {chat.online && (
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full" />
          )}
        </div>

        <span className="text-sm">{chat.name}</span>
      </div>

      {chat.unread && (
        <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
          {chat.unread}
        </span>
      )}
    </div>
  );
}
