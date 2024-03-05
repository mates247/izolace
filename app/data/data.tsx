import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiCodereview } from "react-icons/si";

import React from "react";
export const navLinks = [
  {
    title: "Ceník",
    url: "/pricing",
  },
  {
    title: "Proč my",
    url: "/about",
  },
  {
    title: "Kontakt",
    url: "/contact",
  },
];

export const icons = [
  {
    title: "Facebook",
    url: "facebook.com",
    Icon: <FaFacebook size={30} />,
  },
  {
    title: "Instagram",
    url: "instagram.com",
    Icon: <FaInstagram size={30} />,
  },
  {
    title: "Twitter",
    url: "twitter.com",
    Icon: <FaTwitter size={30} />,
  },
  {
    title: "Recenze",
    url: "twitter.com",
    Icon: <SiCodereview size={30} />,
  },
];
