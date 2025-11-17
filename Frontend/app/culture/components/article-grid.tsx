import ArticleCard from "./article-card";

export default function ArticleGrid({ posts }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {posts.map((post) => (
        <ArticleCard key={post.id} post={post} />
      ))}
    </div>
  );
}