"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import PortfolioImage from "./SamuelLeePicture.jpg";
import Image from "next/image";
import Link from "next/link";
import PixelDisplay from "./PixelDisplay";
type Props = {};

function Menu({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, My name is Samuel Lee, nice to meet you!",
      "Mathematician, Software Developer, Golf Novice, Cat Parent, and Nerd",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* <BackgroundCircles /> */}
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={PortfolioImage}
        alt="portfolio page image"
      />
      <div className="z-20">
        <h1 className="gradient-text-micro-5-regular gradient-underline text-4xl pb-2 tracking-[15px] uppercase">
          Software Engineer
        </h1>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 z-30">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
          <Link href="#introduction">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
      <PixelDisplay displayText="Please Scroll Down" />
      <PixelDisplay displayText="&#8659;" />
    </div>
  );
}

export default Menu;
