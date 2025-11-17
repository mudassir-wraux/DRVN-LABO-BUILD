import Link from "next/link";

export default function FeaturedHero({ post }) {
  if (!post) return null;

  return (
    <Link
      href={`/culture/${post.slug}`}
      className="block relative w-full h-[420px] sm:h-[500px] rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.feature_image})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <div className="text-sm uppercase opacity-80">Featured Article</div>

        <h1 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="hidden sm:block text-gray-200 mt-3 w-2/3">
            {post.excerpt}
          </p>
        )}

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag: any) => (
              <span
                key={tag.id}
                className="bg-white/20 text-xs px-3 py-1 rounded-full backdrop-blur"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
