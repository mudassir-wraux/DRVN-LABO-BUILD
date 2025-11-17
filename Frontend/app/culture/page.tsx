import FeaturedHero from "./[slug]/components/featured-hero";
import TagFilter from "./[slug]/components/tag-filter";
import FeaturedSlider from "./components/featured-slider";
import Pagination from "./components/pagination";
import { ghost } from "./utils/ghost";
import { POSTS_PER_PAGE } from "./utils/constants";
import Image from "next/image";

export default async function CulturePage({ searchParams }) {
  return <PageContent page={1} searchParams={searchParams} />;
}

export async function PageContent({ page, searchParams }) {
  const activeTag = searchParams?.tag;

  const tags = await ghost.tags.browse({ limit: "all" });

  const baseFilter = "tag:-announcement";
  const tagFilter = activeTag ? `+tag:${activeTag}` : "";

  const featuredPosts = await ghost.posts.browse({
    filter: `featured:true+${baseFilter}${tagFilter}`,
    include: "tags,authors",
    limit: "all",
  });

  const featuredHeroPost = featuredPosts[0];
  const featuredSliderPosts = featuredPosts.slice(1);

  const paginatedPosts = await ghost.posts.browse({
    filter: `featured:false+${baseFilter}${tagFilter}`,
    include: "tags,authors",
    limit: POSTS_PER_PAGE,
    page,
    order: "published_at DESC",
  });

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {featuredHeroPost && <FeaturedHero post={featuredHeroPost} />}

      <h1 className="text-3xl font-bold mt-12 mb-4">DRVN Culture</h1>

      <TagFilter tags={tags} activeTag={activeTag} />

      {featuredSliderPosts.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mt-10 mb-4">
            More Featured Articles
          </h2>
          <FeaturedSlider posts={featuredSliderPosts} />
        </>
      )}

      <h2 className="text-xl font-semibold mb-4 mt-10">All Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {paginatedPosts.map((post) => (
          <a
            key={post.id}
            href={`/culture/${post.slug}`}
            className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={post.feature_image}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-t-xl"
              loading="lazy"
            />
            <div className="p-3">
              <h3 className="mt-2 font-medium text-lg line-clamp-2">{post.title}</h3>
              {post.excerpt && (
                <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={paginatedPosts.meta.pagination.pages}
        activeTag={activeTag}
      />
    </div>
  );
}