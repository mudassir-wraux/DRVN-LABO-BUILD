export default function VideoEmbed({ url }) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full"
        allow="fullscreen"
      />
    </div>
  );
}
