export default function ArticleBody({ html }) {
  return (
    <div
      className="prose prose-invert mt-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
