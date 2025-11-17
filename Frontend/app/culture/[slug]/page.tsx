import { ghost } from "../utils/ghost";
import FeaturedHero from "./components/featured-hero";
import FeaturedSlider from "./components/featured-slider";
import LikeButton from "./components/like-button";
import Comments from "./components/comments";
import ShareModal from "./components/share-model";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ tag?: string }>;
}

export default async function ArticlePage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const { slug } = resolvedParams;
  const activeTag = resolvedSearchParams?.tag;

  const posts = await ghost.posts.browse({
    filter: `slug:${slug}`,
    include: "tags,authors",
    limit: 1,
  });

  const post = posts[0];

  if (!post) {
    return <div className="max-w-5xl mx-auto px-6 py-8">Post not found</div>;
  }

  const allPosts = await ghost.posts.browse({
    limit: 50,
    filter: activeTag ? `tag:${activeTag}` : "",
    include: "tags,authors",
  });

  const featuredPosts = allPosts.filter((p) => p.featured && p.id !== post.id);

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <FeaturedHero post={post} />

      <div className="mt-6 mb-4 flex flex-wrap gap-2">
        {post.tags?.map((tag: unknown) => (
          <span
            key={tag.id}
            className="bg-[#d0d0d0] text-sm px-3 py-1 rounded-full"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <div
        className="prose prose-invert max-w-none mt-6"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <div className="flex items-center gap-4 mt-6">
        <LikeButton postId={post.id} />
        <ShareModal postId={post.id} link={`https://yourdomain.com/culture/${post.slug}`} />
      </div>
      <Comments postId={post.id} />
      {featuredPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-4">More Featured Articles</h2>
          <FeaturedSlider posts={featuredPosts} />
        </div>
      )}
    </div>
  );
}
