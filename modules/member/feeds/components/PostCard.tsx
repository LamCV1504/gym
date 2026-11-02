import { PostActions } from "./PostActions";

interface Post {
    post: any
}

export function PostCard({ post }: Post) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      {/* header */}
      <div className="flex items-center gap-2">
        <img src={post.avatar} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{post.user}</p>
          <span className="text-xs text-gray-500">2h</span>
        </div>
      </div>

      {/* content */}
      <p className="mt-3">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          className="mt-3 rounded-lg w-full"
        />
      )}

      {/* actions */}
     <PostActions post={post} onLike={() => {}} />
    </div>
  );
}