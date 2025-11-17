import Link from "next/link";

export default function FeaturedHero({ post }) {
  if (!post) return null;

  return (
    <Link href={`/culture/${post.slug}`}
      className="block relative w-full h-[420px] sm:h-[500px] rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.feature_image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <div className="text-sm uppercase opacity-80">Featured Article</div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">{post.title}</h1>
      </div>
    </Link>
  );
}