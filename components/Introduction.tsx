"use client";
import React from "react";
import fullSeattle from "./images/Seattle_skyline_from_Kerry_Park,_Sept._2015_(21418893286).jpg";
import Image from "next/image";
import PixelDisplay from "./PixelDisplay";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <div className="absolute top-20 w-screen">
        <Image src={fullSeattle} alt="landscape picture of Seattle" />
      </div>
      <h3 className="text-2xl z-20 absolute bottom-[20vh]">
        Hello from the Pacific Northwest. I am a software developer and look
        forward to the opportunity to create a project for you
      </h3>
    </motion.div>
  );
}

export default Introduction;
