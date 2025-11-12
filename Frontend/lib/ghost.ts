export async function getPosts() {
  const mockData = await import('@/mock/posts.json');
  return mockData.default;
}
