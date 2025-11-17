"use client";

import React, { useRef } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface FeaturedSliderProps {
  posts: unknown[];
}

export default function FeaturedSlider({ posts }: FeaturedSliderProps) {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  if (!posts || posts.length === 0) return null;

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/culture/${post.slug}`}
            className="min-w-full sm:min-w-[300px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={post.feature_image}
              alt={post.title}
              className="w-full h-60 sm:h-72 object-cover"
            />
            <div className="p-4 bg-black">
              <h2 className="text-white font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
