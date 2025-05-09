"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}

          // Change the Size of the Image in the website
          //className="w-[400px] h-[400px] xl:w-[650px] xl:h-[650px] absolute right-0 bottom-1"
          className="w-[315px] h-[315px] xl:w-[600px] xl:h-[600px] absolute right-1 bottom-0.25"
          
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
            
          />
        </motion.div>
        
        {/* circle */}
        <motion.svg
          
          className="w-[315px] xl:w-[506px] h-[315px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/*
          <motion.circle
            cx="253"
            cy="253"
            r="265"
            stroke="#1877F2"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          */}
        </motion.svg>
        
      </motion.div>
    </div>
  );
};

export default Photo;
