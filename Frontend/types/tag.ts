export interface TagProps {
  id: string;
  name: string;
}

export interface PostProps {
  id: string;
  slug: string;
  title: string;
  html: string;
  tags?: TagProps[];
  featured?: boolean;
}