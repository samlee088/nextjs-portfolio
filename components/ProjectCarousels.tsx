"use client";

import * as React from "react";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
Autoplay.globalOptions = { delay: 8000 };
import { motion } from "framer-motion";

import bigBadBrainBusterImg from "./images/projectImages/big-bad-brain-blender-buster-screenshot.png";
import newsAggregator from "./images/projectImages/newsAggregator.png";
import socialMediaApiScreenshot from "./images/projectImages/socialMediaApiScreenshot.png";
import bookSearchEngine from "./images/projectImages/book-search-engine-screenshot.png";
import textEditor from "./images/projectImages/textEditor.png";
import fitNuts from "./images/projectImages/fitnuts-screenshot.png";

let picturesArray = [
  {
    picture: fitNuts,
    title: "FitNuts",
    description: "Application that enables a user to track their workouts",
    languages: ["MERN", "Graphql", "JWT", "PWA"],
    link: "https://fit-nuts.herokuapp.com/",
  },
  {
    picture: bookSearchEngine,
    title: "Book Search Engine",
    description:
      "Search engine that enables a user to search for book information and save for future reference",
    languages: ["MERN", "Graphql", "JWT"],
    link: "https://github.com/samlee088/book-search-engine",
  },
  {
    picture: bigBadBrainBusterImg,
    title: "Big Bad Brain Blender Buster",
    description: "Quiz application for online entertainment",
    languages: ["Axios", "Sequelize", "BCrypt", "Express Session"],
    link: "https://github.com/samlee088/Big-Bad-Brain-Blender-Buster",
  },
  {
    picture: newsAggregator,
    title: "News Aggregator",
    description: "News reader with random fact generator",
    languages: ["Javascript", "JQuery"],
    link: "https://samlee088.github.io/news-aggregator/",
  },
  {
    picture: socialMediaApiScreenshot,
    title: "Social Media API",
    description:
      "Back-end application for an API for a potential social media website",
    languages: ["MongoDB", "Express"],
    link: "https://github.com/samlee088/social-network-api",
  },
  {
    picture: textEditor,
    title: "Text Editor",
    description: "Online Text Editor that can also be ran offline",
    languages: ["PWQ / Service Workers", "Client-Server Model", "Heroku"],
    link: "https://jate-pnw-edition.herokuapp.com",
  },
];

function CarouselBanner() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" h-screen flex flex-col overflow-hidden  relative cursor-pointer text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
          Projects
        </h3>

        <div className="relative w-full z-20">
          <Carousel
            plugins={[plugin.current]}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {picturesArray.map((project, index) => (
                <CarouselItem key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      key={project.title}
                      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen text-center"
                    >
                      <Image
                        key={project.title}
                        src={project.picture}
                        alt=""
                        width={1080}
                        height={1080}
                      />

                      <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                        <h2 className="text-5xl font-bold max-w-xl z-50">
                          {project.title}
                        </h2>
                        <p className="max-w-xl line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </>
  );
}

export default CarouselBanner;
