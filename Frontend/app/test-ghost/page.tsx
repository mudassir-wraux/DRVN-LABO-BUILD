import { getPosts } from '@/lib/ghost';

export default async function TestGhostPage() {
  const posts = await getPosts();
console.log(process.env.GHOST_API_URL, process.env.GHOST_API_KEY);

  return (
    <div>
      <h1>Ghost Posts</h1>
      {posts?.length ? (
        posts.map((p:any) => <div key={p.id}>{p.title}</div>)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
