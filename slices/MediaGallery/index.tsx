import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import clsx from "clsx";
import { YoutubePlayer } from "@/components/YoutubePlayer";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";
/**
 * Props for `MediaGallery`.
 */
export type MediaGalleryProps = SliceComponentProps<Content.MediaGallerySlice>;

/**
 * Component for "MediaGallery" Slices.
 */
const MediaGallery: FC<MediaGalleryProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-[#A3DC9A]"
    >
      <FadeIn start="top 70%">
        <div
          id="features"
          className="font-bold-slanted mb-8 px-2 scroll-pt-6 text-6xl uppercase md:text-8xl bg-gradient-to-r from-[#347928] text-transparent bg-clip-text to-[#059212]"
        >
          <PrismicRichText field={slice.primary.heading} />
        </div>
      </FadeIn>
      <div className="relative aspect-video">
        {/* Masks */}
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
          )}
        />
        {/* Video */}
        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          {isFilled.keyText(slice.primary.youtube_video_id) ? (
            <YoutubePlayer youTubeID={slice.primary.youtube_video_id} />
          ) : null}
          {/* Texture overlay */}
          <Image
            src="/image-texture.png"
            alt=""
            fill
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default MediaGallery;
