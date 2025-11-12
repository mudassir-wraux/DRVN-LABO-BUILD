export default function FeaturedSection({ posts }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Featured Articles</h2>
      <div className="flex gap-4 overflow-x-auto">
        {posts.map(post => (
          <div key={post.id} className="min-w-[250px] bg-gray-100 rounded-xl p-3">
            <img src={post.feature_image} alt={post.title} className="rounded-lg" />
            <h3 className="mt-2 font-medium">{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
