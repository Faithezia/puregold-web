import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const LinksList = [
  {
    id: 1,
    path: "/dealspromo",
    title: "DEALS & PROMOS",
  },
  {
    id: 2,
    path: "/panalo",
    title: "PANALO RECIPES",
  },
  {
    id: 3,
    path: "/membership",
    title: "MEMBERSHIP",
    sub: [
      {
        id: 1,
        path: "/membership/tnap",
        title: "TNAP",
        sub: [
          {
            id: 1,
            path: "/membership/tnap/registration",
            title: "TNAP REGISTRATION",
          },
          {
            id: 2,
            path: "/membership/tnap/faqs",
            title: "FAQs",
          },
        ],
      },
      {
        id: 2,
        path: "/membership/about_tnap",
        title: "ALL ABOUT TNAP",
      },
      {
        id: 3,
        path: "/membership/perks",
        title: "PERKS",
      },
      {
        id: 4,
        path: "/membership/member_form",
        title: "Puregold Card Membership Update Form",
      },
    ],
  },
  {
    id: 4,
    path: "/egift",
    title: "eGIFT",
  },
];

export const SocialMediaList = [
  {
    name: "facebook",
    icons: FaFacebook,
    bgColor: "bg-[#3b5998]",
  },
  {
    name: "instagram",
    icons: FaInstagram,
    bgColor: "bg-gradient-to-r from-red-500 to-yellow-500",
  },
  {
    name: "twitter",
    icons: FaTwitter,
    bgColor: "bg-[#1DA1F2]",
  },
];
