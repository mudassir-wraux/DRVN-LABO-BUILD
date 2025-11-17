import { ReactNode } from "react";

export interface Author {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface PostProps {
  excerpt: ReactNode;
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image?: string;
  authors: Author[];
  tags: Tag[];
  primary_tag?: Tag;
  featured?: boolean;
}
