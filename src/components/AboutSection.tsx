"use client";
import {
  ChartBarIncreasing,
  HandMetal,
  StretchVerticalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="w-full pt-[20vh] lg:pt-0 lg:h-[90vh] flex flex-col lg:flex-row items-center lg:justify-around"
      ref={ref}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/assets/images/about.png"
          width={500}
          height={500}
          alt="about"
          className="rounded-full w-full xl:w-[500px] hidden lg:inline lg:w-[300px] shadow-2xl shadow-blue-600"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-5 items-center lg:items-start"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <h4 className="text-cyan-500 font-[500] text-[13px] md:text-[15px] lg:text-[20px] tracking-[5px]">
          ABOUT TOKENTIDE
        </h4>

        <h1 className="text-[30px] md:text-[60px] lg:text-[50px] text-center lg:text-left font-[700] text-white lg:leading-[60px]">
          Empowering your
          <br /> <span className="text-blue-500">portfolio with TokenTide</span>
        </h1>

        <p className="w-[90%] md:w-[45%] lg:w-[500px] text-[15px] text-gray-400 text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestias
          hic dolor cum voluptates, dicta ex velit ea consectetur repellendus
          eum doloremque iusto.
        </p>

        <ul className="flex flex-col gap-5">
          <motion.li
            className="text-white cursor-pointer text-[16px] flex gap-3 items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <ChartBarIncreasing className="w-6 h-6 text-cyan-500" />
            Opportunities for Growth
          </motion.li>
          <motion.li
            className="text-white cursor-pointer text-[16px] flex gap-3 items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            <StretchVerticalIcon className="w-6 h-6 text-cyan-500" />
            Flexibility and Accessibility
          </motion.li>
          <motion.li
            className="text-white cursor-pointer text-[16px] flex gap-3 items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            <HandMetal className="w-6 h-6 text-cyan-500" />
            Empowerment, Control and Reliability
          </motion.li>
        </ul>

        <motion.div
          className="flex items-center flex-wrap gap-3 mt-5"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
        >
          <Link
            href="#"
            className="text-white bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[12px] w-fit h-fit px-5 md:px-10 py-4 font-[400] hover:bg-gradient-to-r hover:from-blue-800 hover:to-cyan-700 transition-all duration-500"
          >
            Start Building
          </Link>
          <Link
            href="#"
            className="text-white bg-[#1012231a] border-[1px] border-blue-300/50 rounded-[12px] w-fit h-fit px-5 md:px-10 py-4 font-[400] hover:border-white transition-all duration-500"
          >
            Explore (Test)
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
