import Link from "next/link";

export default function FeaturedCard({ post }) {
  return (
    <Link href={`/culture/${post.slug}`}>
      <div className="rounded-xl overflow-hidden shadow-lg bg-black">
        <img
          src={post.feature_image}
          className="w-full h-48 object-cover"
          alt={post.feature_image_alt || post.title}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-white">{post.title}</h2>
          <p className="text-gray-400 text-sm">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}