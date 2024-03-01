import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" absolute border border-[#32006e] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#85754d] h-[300px] w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#85754d] h-[500px] w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#c5b4e3] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#85754d] h-[800px] w-[800px] absolute mt-52" />
    </div>
  );
}

export default BackgroundCircles;
