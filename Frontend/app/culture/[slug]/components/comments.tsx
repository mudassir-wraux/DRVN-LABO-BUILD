"use client";

import useSWR from "swr";
import { useState } from "react";

export default function Comments({ postId }) {
  const [text, setText] = useState("");

  const { data: comments, mutate } = useSWR(`/api/comments?postId=${postId}`, (url) =>
    fetch(url).then(res => res.json())
  );

  async function sendComment() {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postId, text }),
    });

    setText("");
    mutate();
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl mb-3">Comments</h3>

      <textarea
        className="w-full p-2 rounded bg-white border border-neutral-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={sendComment} className="mt-2 bg-blue-600 rounded px-3 py-2">Send</button>

      <div className="mt-6 space-y-3">
        {comments?.map(c => (
          <div key={c._id} className="p-3 rounded bg-neutral-900">
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
}
