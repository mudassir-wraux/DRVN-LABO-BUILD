"use client";
import { useState, useEffect } from "react";

interface Comment {
  id: string;
  name: string;
  text: string;
  createdAt: string;
}

interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/comments?postId=${postId}`);
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data = await res.json();
        setComments(data.comments);
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, [postId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, name, text }),
      });
      if (!res.ok) throw new Error("Failed to post comment");
      const data = await res.json();
      setComments(prev => [data.comment, ...prev]);
      setName("");
      setText("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Your comment"
          value={text}
          onChange={e => setText(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Post Comment
        </button>
      </form>

      <div className="flex flex-col gap-3">
        {comments.map(comment => (
          <div key={comment.id} className="border-b pb-2">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.text}</p>
            <small className="text-gray-500">{new Date(comment.createdAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
