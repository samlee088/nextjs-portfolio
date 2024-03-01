"use client";
import React from "react";
import PixelDisplay from "./PixelDisplay";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
    <div>
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#F&AB0A" />
        </h1>
      </div>
      <PixelDisplay displayText="Software Engineer" />
    </div>
  );
}

export default Menu;
