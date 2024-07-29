"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const LINKS = [
  {
    id: 1,
    title: "About",
    route: "/#about",
  },
  {
    id: 3,
    title: "Features",
    route: "/#features",
  },
  {
    id: 4,
    title: "Achievement",
    route: "/#achievements",
  },
  {
    id: 5,
    title: "Roadmap",
    route: "/#roadmap",
  },
];

const Header = () => {
  return (
    <motion.header
      className="sticky top-0 bg-[#02091d] z-50 w-full lg:h-28 h-fit p-5 lg:p-0 flex flex-col lg:flex-row gap-5 items-center justify-around"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link href="/" className="text-white text-[24px] font-[900]">
          Token<span className="text-blue-700">Tide</span>
        </Link>
      </motion.div>

      <motion.nav
        className="flex items-center gap-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.route}
            className="text-gray-400 font-[400] transition-all duration-500 hover:text-white text-[15px]"
          >
            {link.title}
          </Link>
        ))}
      </motion.nav>

      <motion.div
        className="flex flex-wrap items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Link
          href="#"
          className="text-white bg-transparent border-[1px] border-blue-300/50 rounded-[12px] w-fit h-fit px-5 lg:px-10 py-4 font-[400] hover:border-white transition-all duration-500"
        >
          Explore (Test)
        </Link>
        <Link
          href="#"
          className="text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[12px] w-fit h-fit px-5 lg:px-10 py-4 font-[400] hover:bg-gradient-to-r hover:from-blue-800 hover:to-cyan-700 transition-all duration-500"
        >
          Start Building
        </Link>
      </motion.div>
    </motion.header>
  );
};

export default Header;
