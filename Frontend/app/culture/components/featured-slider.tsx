"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import FeaturedCard from "./featured-card";

export default function FeaturedSlider({ posts }) {
  const [emblaRef] = useEmblaCarousel(
    { align: "start", dragFree: true },
    [Autoplay({ delay: 4000 })]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {posts.map((post) => (
          <div key={post.id} className="min-w-[80%] sm:min-w-[60%]">
            <FeaturedCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}