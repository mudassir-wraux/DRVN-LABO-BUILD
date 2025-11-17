"use client";

import { useEffect, useState } from "react";

interface Props {
  postId: string;
}

export default function LikeButton({ postId }: Props) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(`liked-${postId}`);
    setLiked(stored === "true");

    fetch(`/api/likes?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => setLikes(data.likes || 0))
      .catch(console.error);
  }, [postId]);

  const toggleLike = async () => {
    const method = liked ? "DELETE" : "POST";
    try {
      const res = await fetch("/api/likes", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      });
      const data = await res.json();
      setLikes(data.likes);
      setLiked(!liked);
      localStorage.setItem(`liked-${postId}`, (!liked).toString());
    } catch (err) {
      console.error("Failed to update like:", err);
    }
  };

  return (
    <button
      onClick={toggleLike}
      className={`px-4 py-2 rounded ${
        liked ? "bg-blue-500 text-white" : "bg-gray-200"
      }`}
    >
      {liked ? "❤️" : "🤍"} {likes}
    </button>
  );
}
