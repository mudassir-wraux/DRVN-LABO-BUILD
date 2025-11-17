import { ghost } from "../utils/ghost";

export async function generateMetadata({ params }) {
  const post = await ghost.posts.read({
    slug: params.slug,
    include: "tags,authors",
  });

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: [post.feature_image],
      type: "article",
    },
  };
}
