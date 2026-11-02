import { FeedHeader } from "@/modules/member/feeds/components/FeedHeader";
import { FeedList } from "@/modules/member/feeds/components/FeedList";
import { StoryRow } from "@/modules/member/feeds/components/StoryList";

export default function FeedPage() {
  return (
    <div className="max-w-xl mx-auto space-y-4">
      <FeedHeader />
      <StoryRow />
      <FeedList />
    </div>
  );
}
