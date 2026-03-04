"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Footer`.
 */
export type FooterProps = SliceComponentProps<Content.FooterSlice>;

/**
 * Component for "Footer" Slices.
 */
const Footer: FC<FooterProps> = ({ slice }) => {
  return (
    <Bounded className="bg-texture bg-[#52575D]">
      <div className="flex justify-between">
        <div>
          <PrismicNextImage
            field={slice.primary.logo}
            className="h-30 w-30 flex items-center"
          />
        </div>
        {/* <div>
          <PuregoldMap />
        </div> */}
      </div>
    </Bounded>
  );
};

export default Footer;
