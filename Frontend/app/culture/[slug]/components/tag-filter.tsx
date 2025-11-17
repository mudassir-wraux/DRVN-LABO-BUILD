"use client";

export default function TagFilter({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag: unknown) => (
        <a
          key={tag.id}
          href={`?tag=${tag.slug}`}
          className="text-sm bg-[#d0d0d0] px-3 py-1 rounded hover:bg-gray-700 text-[#000] hover:text-[#fff]"
        >
          {tag.name}
        </a>
      ))}
    </div>
  );
}
