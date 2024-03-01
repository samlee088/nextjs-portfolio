"use client";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className=" fixed w-full z-20 top-0  p-5 bg-gradient-to-r from-purple-700 via-yellow-700 to-yellow-300">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="  flex items-center justify-between "
      >
        <div className="text-white">Samuel Lee</div>

        <div className="flex space-x-2">
          <ThemeToggler />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
