import { create } from "zustand";
import { generateFakePosts, initialPosts } from "../mockData";

type Post = {
  id: number;
  user: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  isLiked: boolean;
};

type FeedStore = {
  posts: Post[];
  loadMore: () => void;
};

export const useFeedStore = create<FeedStore>((set) => ({
  posts: initialPosts,

  loadMore: () =>
    set((state) => ({
      posts: [
        ...state.posts,
        ...generateFakePosts(), 
      ],
    })),
}));