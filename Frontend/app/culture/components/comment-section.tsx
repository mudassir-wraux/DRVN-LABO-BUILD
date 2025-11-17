import Link from "next/link";
import { ghost } from "../utils/ghost";

export default async function CategoryTabs({ activeTag }) {
  const tags = await ghost.tags.browse({ limit: "all" });

  return (
    <div className="flex gap-3 flex-wrap mb-10">
      <Link
        href="/culture"
        className={`px-4 py-2 rounded-full border ${
          !activeTag ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        All
      </Link>

      {tags.map((tag) => (
        <Link
          key={tag.slug}
          href={`/culture?tag=${tag.slug}`}
          className={`px-4 py-2 rounded-full border ${
            activeTag === tag.slug
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
