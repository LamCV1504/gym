

export const stories = [
  { id: 1, name: "Lam Cow", avatar: "./avatar1.jpg" },
  { id: 2, name: "Faliz", avatar: "./avatar2.jpg" },
    { id: 1, name: "Lam Cow", avatar: "./avatar1.jpg" },
  { id: 2, name: "Faliz", avatar: "./avatar2.jpg" },  { id: 1, name: "Lam Cow", avatar: "./avatar1.jpg" },
  { id: 2, name: "Faliz", avatar: "./avatar2.jpg" },
];

export const posts = [
  {
    id: 1,
    user: "Lam Cow",
    avatar: "./avatar1.jpg",
    content: "Hôm nay leg day nè 🔥",
    image: "./gym1.jpg",
    likes: 12,
    isLiked: false,
  },
];

export const initialPosts = [
  {
    id: 1,
    user: "Chôn",
    avatar: "./avatar1.jpg",
    content: "Hôm nay tập ngực 💪",
    likes: 10,
    isLiked: false,
  },
  {
    id: 2,
    user: "Trường Duy",
    avatar: "./avatar2.jpg",
    content: "Leg dayyyyyyyyyyyyyyyyy🔥",
    image: "./gym1.jpg",
    likes: 5,
    isLiked: true,
  },
];

// fake thêm post để simulate infinite scroll
export const generateFakePosts = () => {
  return Array.from({ length: 3 }).map((_, i) => ({
    id: Date.now() + i,
    user: "User " + i,
    avatar: "/avatar1.jpg",
    content: "Bài viết mới " + i,
    image: "/gym1.jpg",
    likes: Math.floor(Math.random() * 100),
    isLiked: false,
  }));
};