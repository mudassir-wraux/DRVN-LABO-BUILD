export default function ArticleGrid({ posts }) {
  return (
    <section className="grid md:grid-cols-2 gap-4">
      {posts.map(post => (
        <article key={post.id} className="bg-gray-50 rounded-xl p-3 shadow-sm">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.excerpt}</p>
        </article>
      ))}
    </section>
  );
}
