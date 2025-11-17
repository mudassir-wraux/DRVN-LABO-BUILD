import Link from "next/link";

export default function FeaturedCard({ post }) {
  return (
    <Link href={`/drvn-culture/${post.slug}`}>
      <div className="bg-neutral-900 rounded-lg overflow-hidden">
        <img src={post.feature_image} className="w-full" />
        <div className="p-3">
          <h2 className="text-lg font-semibold">{post.title}</h2>
        </div>
      </div>
    </Link>
  );
}
