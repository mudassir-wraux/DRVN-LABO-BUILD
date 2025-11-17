"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function TagFilter({ tags }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeTag = searchParams.get("tag");

  function setTag(tag) {
    const params = new URLSearchParams(searchParams.toString());

    if (tag === "all") {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
      {/* All button */}
      <button
        className={`px-4 py-2 rounded-lg border ${
          !activeTag ? "bg-white text-black" : "text-gray-300"
        }`}
        onClick={() => setTag("all")}
      >
        All
      </button>

      {/* Dynamically render tags */}
      {tags.map(tag => (
        <button
          key={tag.slug}
          className={`px-4 py-2 rounded-lg border capitalize ${
            activeTag === tag.slug
              ? "bg-white text-black"
              : "text-gray-300"
          }`}
          onClick={() => setTag(tag.slug)}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}
