import { PageContent } from "../../page";

export default function CulturePagePaginated({ params, searchParams }) {
  const page = Number(params.page) || 1;
  return <PageContent page={page} searchParams={searchParams} />;
}
