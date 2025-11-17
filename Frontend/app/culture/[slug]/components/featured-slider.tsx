// "use client";

// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import FeaturedCard from "./FeaturedCard";

// export default function FeaturedSlider({ posts }) {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, dragFree: true, align: "start" },
//     [Autoplay({ delay: 5000 })]
//   );

//   return (
//     <div className="overflow-hidden" ref={emblaRef}>
//       <div className="flex gap-4 px-4">
//         {posts.map(post => (
//           <div
//             key={post.id}
//             className="min-w-[80%] sm:min-w-[60%] md:min-w-[40%]"
//           >
//             <FeaturedCard post={post} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// components/drvn-culture/FeaturedSlider.tsx
import React from 'react';
import Slider from 'react-slick';
// import FeaturedCard from './FeaturedCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from './featured-card';

const settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

export default function FeaturedSlider({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;
  return (
    <div className="mb-6">
      <Slider {...settings}>
        {posts.map((p) => (
          <div key={p.id} className="px-2">
            <FeaturedCard post={p} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
