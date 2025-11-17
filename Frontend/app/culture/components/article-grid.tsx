import Link from "next/link";
import Pagination from "./pagination";

export default function ArticleGrid({ posts, page, tag }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link key={post.id} href={`/culture/${post.slug}`}>
            <div className="rounded-xl overflow-hidden">
              <img
                src={post.feature_image}
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
          </Link>
        ))}
      </div>

      <Pagination currentPage={page} tag={tag} />
    </div>
  );
}
