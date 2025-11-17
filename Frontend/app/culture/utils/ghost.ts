import GhostContentAPI from "@tryghost/content-api";

export const ghost = new GhostContentAPI({
  url: process.env.GHOST_API_URL!,
  key: process.env.GHOST_CONTENT_API_KEY!,
  version: "v5",
});

export async function fetchPosts({ page = 1, limit = 12, tag }: unknown = {}) {
  const filter = [];

  if (tag) filter.push(`tag:${tag}`);

  return ghost.posts.browse({
    include: "tags,authors",
    page,
    limit,
    filter: filter.length ? filter.join("+") : undefined,
    order: "published_at DESC",
  });
}

export async function fetchFeatured() {
  return ghost.posts.browse({
    filter: "featured:true",
    include: "tags,authors",
  });
}

export async function fetchAnnouncements() {
  return ghost.posts.browse({
    filter: "tag:announcement",
    limit: 3,
    include: "tags",
  });
}

export async function fetchVideoPosts() {
  return ghost.posts.browse({
    filter: "tag:video",
    include: "tags,authors",
    limit: "all",
  });
}

export async function fetchArticle(slug: string) {
  return ghost.posts.read(
    { slug },
    { include: "tags,authors" }
  );
}
