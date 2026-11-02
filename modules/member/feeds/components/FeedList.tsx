"use client";

import { useEffect } from "react";
import { useFeedStore } from "../hooks/useFeedStore";
import { PostCard } from "./PostCard";

export function FeedList() {
  const { posts, loadMore } = useFeedStore();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}