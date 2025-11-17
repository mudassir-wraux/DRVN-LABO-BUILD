"use client";

import React from "react";

export default function FeaturedSlider({ posts }) {
  return (
    <div className="overflow-x-auto flex gap-5 pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar">
      {posts.map((post: any) => (
        <a
          key={post.id}
          href={`/culture/${post.slug}`}
          className="snap-start min-w-[85%] sm:min-w-[40%] rounded-xl block"
        >
          <img
            src={post.feature_image}
            className="w-full rounded-xl aspect-video object-cover"
          />
          <h3 className="mt-2 font-medium">{post.title}</h3>
        </a>
      ))}
    </div>
  );
}
