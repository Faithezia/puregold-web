"use client";

import { KeyTextField } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";

type VideoProps = {
  youTubeID: KeyTextField;
};

export function YoutubePlayer({ youTubeID }: VideoProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "1500px" }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  });

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      {isInView && (
        // <iframe
        //   src={`https://www.youtube.com/embed/${youTubeID}?autoplay=1&mute=1&loop=1&playlist=${youTubeID}`}
        //   src="/media_video.mp4"
        //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //   className="pointer-events-none h-full w-full border-0"
        // />
        <video controls muted autoPlay loop className="h-full">
          <source src="/media_video.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
