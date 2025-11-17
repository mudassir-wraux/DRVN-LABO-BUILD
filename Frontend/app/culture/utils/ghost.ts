import GhostContentAPI from "@tryghost/content-api";

export const ghost = new GhostContentAPI({
  url: process.env.GHOST_API_URL!,
  key: process.env.GHOST_API_KEY!,
  version: "v5.0",
});
