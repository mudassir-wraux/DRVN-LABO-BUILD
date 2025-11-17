import FeaturedHero from "./[slug]/components/featured-hero";
import TagFilter from "./[slug]/components/tag-filter";
import { ghost } from "./utils/ghost";

export default async function CulturePage({ searchParams }) {
  const activeTag = searchParams?.tag;

  // Fetch all tags
  const tags = await ghost.tags.browse({ limit: "all" });

  // Filter
  const filter = activeTag ? `tag:${activeTag}` : "";

  // Fetch posts
  const posts = await ghost.posts.browse({
    limit: 50,
    filter,
    include: "tags,authors",
  });

  // Pick first featured post
  const featuredPost = posts.find((p) => p.featured);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">

      {/* HERO SECTION */}
      {featuredPost && <FeaturedHero post={featuredPost} />}

      <h1 className="text-3xl font-bold mt-12 mb-4">DRVN Culture</h1>

      {/* Tag Navigation */}
      <TagFilter tags={tags} />

      {/* Featured Articles (below hero) */}
      <h2 className="text-xl font-semibold mt-10 mb-4">More Featured Articles</h2>

      <div className="mb-10">
        {posts
          .filter((p) => p.featured && p.id !== featuredPost?.id)
          .map((post: any) => (
            <div key={post.id} className="mb-10">
              <a href={`/culture/${post.slug}`}>
                <img
                  src={post.feature_image}
                  className="rounded-xl w-full"
                />
              </a>
              <p className="text-sm mt-2 text-gray-400">{post.title}</p>
            </div>
          ))}
      </div>

      {/* All Articles */}
      <h2 className="text-xl font-semibold mb-4">All Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {posts.map((post: any) => (
          <a
            key={post.id}
            href={`/culture/${post.slug}`}
            className="block"
          >
            <img
              src={post.feature_image}
              className="rounded-xl w-full aspect-video object-cover"
            />
            <h3 className="mt-2 font-medium">{post.title}</h3>
          </a>
        ))}
      </div>

    </div>
  );
}

// /app/culture/page.tsx

// import { fetchCulturePosts, fetchFeaturedPosts } from "./utils/ghost";
// import FeaturedSlider from "./components/featured-slider";
// // import CategoryTabs from "./components/category-tabs";
// import ArticleGrid from "./components/article-grid";
// import CategoryTabs from "./components/comment-section";

// export default async function CulturePage({ searchParams }) {
//   const page = Number(searchParams?.page || 1);
//   const tag = searchParams?.tag || null;

//   const [featuredPosts, allPosts] = await Promise.all([
//     fetchFeaturedPosts(),
//     fetchCulturePosts({ page, tag, limit: 12 }),
//   ]);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-8">
//       {/* Featured Slider */}
//       {featuredPosts?.length > 0 && (
//         <FeaturedSlider posts={featuredPosts} />
//       )}

//       <h1 className="text-3xl font-bold mt-10 mb-6">DRVN Culture</h1>

//       {/* Category Tabs */}
//       <CategoryTabs activeTag={tag} />

//       {/* All Articles */}
//       <ArticleGrid posts={allPosts} page={page} tag={tag} />
//     </div>
//   );
// }
