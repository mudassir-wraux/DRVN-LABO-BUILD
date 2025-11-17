export default function VideoEmbed({ post }) {
  // Replace this with AmpleProtocol embed once they give final docs
  return (
    <iframe
      src={post.og_description}
      className="w-full aspect-video rounded"
      allowFullScreen
    />
  );
}
