declare module "@tryghost/content-api" {
  export interface GhostConfig {
    url: string;
    key: string;
    version: string;
  }

  export interface Post {
    id: string;
    uuid?: string;
    title: string;
    slug: string;
    html?: string;
    excerpt?: string;
    custom_excerpt?: string;
    feature_image?: string;
    feature_image_alt?: string;
    tags?: any[];
    authors?: any[];
    published_at?: string;
    [key: string]: any;
  }

  export class GhostContentAPI {
    constructor(config: GhostConfig);

    posts: {
      browse(options?: {
        limit?: number | string;
        filter?: string;
        include?: string;
        page?: number;
        fields?: string;
        order?: string;
      }): Promise<Post[]>;

      read(options: {
        slug: string;
        include?: string;
        fields?: string;
      }): Promise<Post>;
    };

    tags: {
      browse(options?: {
        limit?: number | string;
        include?: string;
        filter?: string;
      }): Promise<any[]>;
    };
  }

  export default GhostContentAPI;
}
