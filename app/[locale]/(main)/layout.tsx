"use client";

import { AiFloatingButton } from "@/components/common/ai-agent/AiFloatingButton";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { TopActions } from "@/components/layout/top-action";
import { SidebarProvider } from "@/context/sidebar-context";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <main className="flex-1 relative overflow-y-auto max-w-full mx-auto transition-all duration-300 px-8">
          <TopActions />
          <div className="py-4 ">{children}</div>
        </main>

        <AiFloatingButton />

        {/* <aside className="fixed top-16 right-0 w-80 h-[calc(100vh-4rem)] xl:block flex flex-col ">
        <div className="h-2/5 py-4 pr-1">
          <PromoCarousel />
        </div>
        <div className="min-h-0 h-full flex-1 w-full overflow-y-auto">
          <ChatSidebar />
        </div>
      </aside> */}
      </div>
    </SidebarProvider>
  );
}
