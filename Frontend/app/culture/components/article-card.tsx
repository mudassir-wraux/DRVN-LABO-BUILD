import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ post }) {
  return (
    <Link
      href={`/culture/${post.slug}`}
      className="block rounded-lg shadow bg-white"
    >
      <Image
        src={post.feature_image}
        alt={post.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />

      <div className="px-3 py-2">
        <p className="text-xs text-purple-600">
          {post.primary_tag?.name || "General"}
        </p>
        <h3 className="font-semibold text-sm line-clamp-2">{post.title}</h3>
      </div>
    </Link>
  );
}
