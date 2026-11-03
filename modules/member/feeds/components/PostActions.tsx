import { Heart, MessageCircle, Send } from "lucide-react";

type PostActionsProps = {
  post: {
    id: number;
    likes: number;
    isLiked: boolean;
  };
  onLike: (postId: number) => void;
};

export function PostActions({ post, onLike }: PostActionsProps) {
  return (
    <div className="flex justify-between items-center mt-3 pt-2 border-t">
      
      {/* LEFT */}
      <div className="flex gap-6">
        
        {/* LIKE */}
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-2 text-black hover:text-gray-500 transition-transform active:scale-125"
        >
          <Heart
            className={`w-5 h-5 ${
              post.isLiked ? "fill-black" : ""
            }`}
          />
          <span className="text-sm">{post.likes}</span>
        </button>

        {/* COMMENT */}
        <button className="flex items-center gap-2 text-black hover:text-gray-500 transition">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Comment</span>
        </button>
      </div>

      {/* SHARE */}
      <button className="flex items-center gap-2 text-black hover:text-gray-500 transition">
        <Send className="w-5 h-5" />
        <span className="text-sm">Share</span>
      </button>

    </div>
  );
}
