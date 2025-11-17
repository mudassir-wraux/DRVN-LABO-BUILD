import { ghost } from "../utils/ghost";
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = params;

  const [post] = await ghost.posts.browse({
    filter: `slug:${slug}`,
    include: "tags,authors",
    limit: 1,
  });

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The article you are looking for does not exist.",
    };
  }

  const title = post.title;
  const description = post.excerpt || post.meta_description || "";
  const image = post.feature_image || "";
  const publishedTime = post.published_at;
  const authorName = post.authors?.[0]?.name || "DRVN";

  const isVideoPost = post.tags?.some((t) => t.slug === "video");

  const ogImage = image;

  return {
    title,
    description,
    authors: [{ name: authorName }],
    openGraph: {
      title,
      description,
      type: isVideoPost ? "video.other" : "article",
      url: `https://yourdomain.com/culture/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
