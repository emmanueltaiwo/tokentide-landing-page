"use client";

import { RocketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full pt-[10vh] lg:pt-0 lg:h-[90vh]">
      <motion.div
        className="w-full h-full flex justify-center items-center flex-col gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h4
          className="text-cyan-500 font-[500] text-[13px] md:text-[15px] lg:text-[20px] tracking-[5px]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          🛠️ BUILD ON TOKENTIDE LAYER 2
        </motion.h4>

        <motion.h1
          className="text-[30px] md:text-[50px] lg:text-[75px] text-center mx-auto lg:w-[950px] font-[700] text-white lg:leading-[90px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          TokenTide is a better way <br /> to{" "}
          <span className="text-blue-600">
            <Typewriter
              words={[
                "build products",
                "launch products",
                "scale businesses",
                "innovate solutions",
                "drive growth",
                "empower teams",
                "transform industries",
                "create impact",
                "design experiences",
                "deliver excellence",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        <motion.p
          className="w-[90%] md:w-[45%] lg:w-[700px] text-[17px] text-gray-400 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias
          hic dolor cum voluptates, dicta ex velit ea consectetur repellendus
          eum doloremque iusto, consequatur aliquid quos quam perspiciatis,
          nulla atque praesentium nesciunt! Obcaecati explicabo necessitatibus.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link
            href="#"
            className="text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[12px] w-fit h-fit px-10 py-4 font-[400] hover:bg-gradient-to-r hover:from-blue-800 hover:to-cyan-700 transition-all duration-500 flex items-center gap-3"
          >
            Launch the app <RocketIcon className="w-5 h-5 text-white" />
          </Link>
        </motion.div>

        {/* <div className="scroll-container">
          <div className="scroll-content flex items-center gap-20">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Image
                  key={index + 20}
                  src="/assets/images/visa.png"
                  width={200}
                  height={200}
                  alt="visa logo"
                />
              ))}
          </div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
