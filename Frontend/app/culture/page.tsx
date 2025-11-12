import { getPosts } from '@/lib/ghost';
import FeaturedSection from './components/FeaturedSection';
import ArticleGrid from './components/ArticleGrid';

export const revalidate = 60;

export default async function CulturePage() {
  const posts = await getPosts();

  const featured = posts.filter(p => p.tags?.includes('featured'));
  const regular = posts.filter(p => !p.tags?.includes('featured'));

  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold mb-4">DRVN Culture</h1>
      <FeaturedSection posts={featured} />
      <ArticleGrid posts={regular} />
    </main>
  );
}
