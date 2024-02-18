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
      <div className="overflow-hidden lg:-mt-40 relative cursor-pointer">
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
                <div key={project.title} className="flex-full min-w-0 relative">
                 
                    <Image
                      key={project.title}
                      src={project.picture}
                      alt=""
                      width={1920}
                      height={1080}
                    />
                  

                  <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white ">
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
    </>
  );
}

export default CarouselBanner;
