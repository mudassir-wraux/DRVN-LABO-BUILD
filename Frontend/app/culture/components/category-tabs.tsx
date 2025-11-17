"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryTabs({ categories }) {
  const router = useRouter();
  const params = useSearchParams();
  const active = params.get("category");

  return (
    <div className="flex gap-3 mt-5 overflow-x-auto no-scrollbar">
      <button
        onClick={() => router.push("/culture")}
        className={`px-3 py-1 rounded-full text-sm ${
          !active ? "bg-purple-600 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c.slug}
          onClick={() => router.push(`/culture?category=${c.slug}`)}
          className={`px-3 py-1 rounded-full text-sm ${
            active === c.slug ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}