"use client";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <div className=" fixed w-full z-20 top-0  flex items-center justify-between p-5 bg-gradient-to-r from-purple-700 via-yellow-700 to-yellow-300">
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
        transition={{
          duration: 1,
        }}
      >
        <Link href="#menu">
          <div className="text-white">Samuel Lee </div>
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex space-x-2"
      >
        <ThemeToggler />
      </motion.div>
    </div>
  );
}

export default Header;
