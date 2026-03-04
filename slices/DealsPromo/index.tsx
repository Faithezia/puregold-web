import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { FadeIn } from "@/components/FadeIn";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

/**
 * Props for `DealsPromo`.
 */
export type DealsPromoProps = SliceComponentProps<Content.DealsPromoSlice>;

/**
 * Component for "DealsPromo" Slices.
 */
const DealsPromo: FC<DealsPromoProps> = ({ slice }) => {
  gsap.registerPlugin(useGSAP);
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#FBF9F1] relative bg-texture"
    >
      <FadeIn>
        <h2
          id="features"
          className="font-bold-slanted mb-8 px-2 scroll-pt-6 text-6xl uppercase md:text-8xl bg-gradient-to-r from-[#347928] text-transparent bg-clip-text to-[#059212]"
        >
          <PrismicText field={slice.primary.heading} />
        </h2>
      </FadeIn>

      <FadeIn targetChildren className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {slice.primary.card.map((item) => (
          <DealsPromoItem key={item.link.text} item={item} />
        ))}
      </FadeIn>
      <FadeIn start="bottom 100%">
        <div className="w-full flex justify-end items-end p-3">
          <PrismicNextLink
            field={slice.primary.button}
            className="bg-green-500 text-[#fff] font-semibold py-2 px-4 rounded
          shadow-[0_6px_0_rgb(0,0,0)]
          hover:shadow-[0_2px_0_rgb(0,0,0)]
          hover:translate-y-1
          transition-all duration-150 ease-in-out"
          />
        </div>
      </FadeIn>
    </Bounded>
  );
};

export default DealsPromo;

type DealsPromoItemProps = {
  item: Content.DealsPromoSliceDefaultPrimaryCardItem;
};

function DealsPromoItem({ item }: DealsPromoItemProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl md:col-span-2 drop-shadow-2xl shadow-xl"
      )}
    >
      <PrismicNextImage
        field={item.image}
        className="h-full w-full object-cover"
        quality={96}
        width={700}
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"></div>

      <div className="absolute bottom-0 left-0 max-w-xl p-6 text-xl text-balance text-white">
        <PrismicNextLink field={item.link} />
      </div>
    </div>
  );
}
