// @ts-expect-error: Ghost API type mismatch
import GhostContentAPI from '@tryghost/content-api';
import { PostProps } from "@/types/ghost";

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL!,
  key: process.env.GHOST_API_KEY!,
  version: 'v5.0',
});

export const getPosts = async (): Promise<PostProps[]> => {
  try {
    const posts: PostProps[] = await api.posts.browse({ limit: 5, include: 'tags,authors' });
    console.log('Ghost posts:', posts);
    return posts;
  } catch (err) {
    console.error('Ghost API error:', err);
    return [];
  }
};

export const getFeaturedPosts = async (): Promise<PostProps[]> => {
  try {
    const posts: PostProps[] = await api.posts.browse({
      filter: 'featured:true',
      include: 'tags,authors',
    });
    return posts;
  } catch (err) {
    console.error('Ghost API error:', err);
    return [];
  }
};

export const getAllPosts = async (page = 1, limit = 12): Promise<PostProps[]> => {
  try {
    const posts: PostProps[] = await api.posts.browse({
      limit,
      page,
      filter: 'featured:false',
      include: 'tags,authors',
    });
    return posts;
  } catch (err) {
    console.error('Ghost API error:', err);
    return [];
  }
};

export const getPostBySlug = async (slug: string): Promise<PostProps | null> => {
  try {
    const post: PostProps = await api.posts.read({ slug }, { include: 'tags,authors' });
    return post;
  } catch (err) {
    console.error('Ghost API error:', err);
    return null;
  }
};