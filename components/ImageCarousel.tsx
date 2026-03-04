import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PrismicNextImage } from "@prismicio/next";
import { ImageFieldImage } from "@prismicio/client";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  images: ImageFieldImage[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, images } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <PrismicNextImage
                  field={images[index]}
                  className="w-full h-full rounded"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
