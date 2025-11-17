"use client";

import { useState } from "react";

export default function LikeButton({ postId }) {
  const [count, setCount] = useState(0);

  async function handleLike() {
    const res = await fetch("/api/likes", {
      method: "POST",
      body: JSON.stringify({ postId }),
    });

    const data = await res.json();
    setCount(data.count);
  }

  return (
    <button onClick={handleLike} className="mt-6 bg-purple-600 rounded px-3 py-2">
      ❤️ {count}
    </button>
  );
}
