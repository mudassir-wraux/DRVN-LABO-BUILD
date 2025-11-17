import Image from "next/image";
import Link from "next/link";

export default function FeaturedCard({ post }) {
  return (
    <Link
      href={`/culture/${post.slug}`}
      className="block rounded-xl overflow-hidden shadow-lg bg-white"
    >
      <Image
        src={post.feature_image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-purple-600 font-semibold">
          {post.primary_tag?.name || "General"}
        </p>
        <h2 className="text-lg font-bold line-clamp-2">{post.title}</h2>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
