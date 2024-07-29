"use client";

import { ArrowTopRightIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      id="features"
      className="flex flex-col justify-center items-center h-full py-[10vh] gap-5"
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white text-[40px] font-[900]">
          Core <span className="text-cyan-600">Features</span>
        </h2>
        <p className="w-[90%] md:w-[45%] lg:w-[500px] text-[15px] text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias
          hic dolor cum voluptates..
        </p>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index + 20}
            className="rounded-lg w-[90%] sm:w-[70%] h-fit md:w-[350px] md:h-[250px] mx-auto bg-[#4547521d] cursor-pointer transition-all duration-300 hover:bg-[#20254434] flex flex-col gap-5 justify-end p-5 items-center relative hover:shadow-xl hover:shadow-cyan-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="rounded-xl w-[120px] h-[100px] bg-gradient-to-r from-blue-700 to-cyan-500 hidden md:flex justify-center items-center absolute top-[-20%] shadow-md shadow-blue-300">
              <PaperPlaneIcon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-[20px] font-[800] text-white">
              Low Fees, Scalability
            </h3>
            <p className="w-full text-[14px] text-gray-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              molestias hic dolor cum voluptates, dicta ex velit ea consectetur
              repellendus eum doloremque iusto.
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="#"
          className="text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[12px] w-fit h-fit px-10 py-4 font-[400] hover:bg-gradient-to-r hover:from-blue-800 hover:to-cyan-700 transition-all duration-500 flex gap-3 items-center"
        >
          Read More <ArrowTopRightIcon className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Features;
