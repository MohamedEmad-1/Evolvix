"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface HeroContentProps {}

const HeroContent: React.FC<HeroContentProps> = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-brown-10 opacity-[0.9]"
        >
          <SparklesIcon className="text-white-20 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Supporting Your Business Growth
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
                <span>
              {"Don't Just Go Online"}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown-10 to-red-50">
            {" "}
            {"\"Dominate\""}
          </span>
        </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          We are your dedicated technology partner. We deliver expert web
          development and strategic consulting to help
          your business thrive.
        </motion.p>
        <button className="border-magic-button w-fit">
           <span className="border-magic-button-content">
             View Our Services
          </span>
        </button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;