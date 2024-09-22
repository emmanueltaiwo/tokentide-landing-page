"use client";

import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      className="flex flex-col gap-5 py-[10vh] bg-[#02091d]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row justify-around gap-[10vh] p-5 xl:p-0 items-start">
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="text-white text-[24px] font-[900]">
            Token<span className="text-blue-700">Tide</span>
          </Link>
          <p className="w-[300px] text-[15px] text-gray-500 text-left">
            At TokenTide, we&apos;re redefining how teams collaborate in the
            digital age.
          </p>
          <h5 className="text-[18px] text-white font-[800]">
            Join the community
          </h5>
          <div className="flex items-center gap-5">
            <DiscordLogoIcon className="cursor-pointer w-10 h-10 text-gray-500" />
            <TwitterLogoIcon className="cursor-pointer w-10 h-10 text-gray-500" />
            <InstagramLogoIcon className="cursor-pointer w-10 h-10 text-gray-500" />
            <LinkedInLogoIcon className="cursor-pointer w-10 h-10 text-gray-500" />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-[10vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex flex-col gap-5">
            <p className="text-[18px] font-[800] text-white">Ecosystem</p>
            <Link
              href="#"
              className="mt-5 text-gray-400 text-[14px] font-[300]"
            >
              Developers
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Games
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Nodes
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Marketplace
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Token
            </Link>
          </ul>

          <ul className="flex flex-col gap-5">
            <p className="text-[18px] font-[800] text-white">Build with us</p>
            <Link
              href="#"
              className="mt-5 text-gray-400 text-[14px] font-[300]"
            >
              Get Started
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Our Infrastructure
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Developer Grant Program
            </Link>
          </ul>

          <ul className="flex flex-col gap-5">
            <p className="text-[18px] font-[800] text-white">Menu</p>
            <Link
              href="#"
              className="mt-5 text-gray-400 text-[14px] font-[300]"
            >
              About Us
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Whitepaper
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Careers
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              News
            </Link>
            <Link href="#" className="text-gray-400 text-[14px] font-[300]">
              Contact Us
            </Link>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
