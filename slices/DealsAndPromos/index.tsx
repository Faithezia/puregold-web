"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { FadeIn } from "@/components/FadeIn";
import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
} from "react-icons/fa";
import { SocialMediaList } from "@/constants/constants";
/**
 * Props for `DealsAndPromos`.
 */
export type DealsAndPromosProps =
  SliceComponentProps<Content.DealsAndPromosSlice>;

/**
 * Component for "DealsAndPromos" Slices.
 */
const DealsAndPromos: FC<DealsAndPromosProps> = ({ slice }) => {
  // gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
  // useGSAP(() => {
  //   let tl = gsap.timeline({
  //     // yes, we can add it to an entire timeline!
  //     scrollTrigger: {
  //       trigger: "#smooth-wrapper",
  //       pin: true, // pin the trigger element while active
  //       start: "top top", // when the top of the trigger hits the top of the viewport
  //       end: "+=500", // end after scrolling 500px beyond the start
  //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //       snap: {
  //         snapTo: "labels", // snap to the closest label in the timeline
  //         duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //         ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //       },
  //     },
  //   });

  //   // add animations and labels to the timeline
  //   tl.addLabel("start")
  //     .from(".images p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
  //     .addLabel("color")
  //     .from(".images", { backgroundColor: "#28a92b" })
  //     .addLabel("spin")
  //     .to(".images", { rotation: 360 })
  //     .addLabel("end");
  // });
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-cover relative bg-texture"
    >
      <div className="flex animate__animated animate__fadeInUp animate__delay-1s p-3">
        <PrismicNextLink
          field={slice.primary.backbutton}
          className="bg-green-500 text-[#fff] font-semibold py-2 px-4 rounded
        shadow-[0_6px_0_rgb(0,0,0)]
        hover:shadow-[0_2px_0_rgb(0,0,0)]
        hover:translate-y-1
        transition-all duration-150 ease-in-out"
        />
      </div>
      <FadeIn>
        <div className="font-bold-slanted px-2 scroll-pt-6 text-6xl uppercase md:text-8xl bg-gradient-to-r from-[#347928] text-transparent bg-clip-text to-[#059212]">
          <PrismicRichText field={slice.primary.heading} />
        </div>
      </FadeIn>
      <FadeIn targetChildren className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {slice.primary.promocard.map((item, i) => (
          <DealsPromoItem key={i} item={item} />
        ))}
      </FadeIn>
    </Bounded>
  );
};

export default DealsAndPromos;

type DealsPromoItemProps = {
  item: Content.DealsAndPromosSliceDefaultPrimaryPromocardItem;
};

function DealsPromoItem({ item }: DealsPromoItemProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl md:col-span-2 drop-shadow-2xl shadow-xl"
      )}
    >
      <PrismicNextImage
        field={item.promoimage}
        className="h-full w-full object-cover"
        quality={96}
        width={700}
        alt=""
      />
      <div className="absolute flex flex-row justify-end align-end inset-x-0 top-0 mx-5 my-2 cursor-pointer">
        {SocialMediaList.map((socmed) => (
          <div
            className={clsx(
              `flex items-center ${socmed.bgColor}`,
              "rounded-2xl p-2 cursor-pointer hover-button mx-1"
            )}
            key={socmed.name}
          >
            <socmed.icons size={30} color="#fff" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute bottom-0 left-0 max-w-xl p-6 text-xl text-balance text-white">
        <PrismicNextLink field={item.link} />
      </div>
    </div>
  );
}
