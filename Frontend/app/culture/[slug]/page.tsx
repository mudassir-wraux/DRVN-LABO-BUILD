import { fetchArticle } from "../utils/ghost";
import ArticleBody from "./components/article-body";
import Comments from "./components/comments";
import ShareModal from "./components/share-model";
import VideoEmbed from "./components/video-embed";
// import ArticleBody from "./article-body";
// import ShareModal from "./share-model";
// import Comments from "./comments";
// import VideoEmbed from "./video-embed";

export default async function ArticlePage({ params }) {
  const post = await fetchArticle(params.slug);

  const isVideo = post.tags?.some((t) => t.slug === "video");

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Video or Featured Image */}
      {isVideo ? (
        <VideoEmbed post={post} />
      ) : (
        <img
          src={post.feature_image}
          className="w-full rounded-2xl mb-6"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.custom_excerpt && (
        <p className="text-lg text-gray-300 mb-4">{post.custom_excerpt}</p>
      )}

      <ArticleBody html={post.html} />

      {/* Share + Likes */}
      <div className="flex items-center justify-between mt-10">
        <ShareModal post={post} />
      </div>

      {/* Comments */}
      <Comments postId={post.id} />
    </div>
  );
}
