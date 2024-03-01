"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ResumeSkills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.0 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>

      
      <div className=" flex flex-col justify-center items-center text-center mr-[20vw]">
        <h3 className=" text-center uppercase tracking-[20px] text-2xl">
          Front End
        </h3>
        <ul className="justify-content-center flex-wrap grid grid-cols-3 gap-20">
          <li className=" flex flex-col justify-content-center text-center ">
            <p>HTML5</p>
            <i
              className="devicon-html5-plain-wordmark colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>CSS3</p>
            <i
              className="devicon-css3-plain-wordmark colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Javascript</p>
            <i
              className="devicon-javascript-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>JQuery</p>
            <i
              className="devicon-jquery-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Bootstrap</p>
            <i
              className="devicon-bootstrap-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Handelbars</p>
            <i
              className="devicon-handlebars-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>npm</p>
            <i
              className="devicon-npm-original-wordmark colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Babel</p>
            <i className="devicon-babel-plain" style={{ fontSize: "75px" }}></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>ReactJS</p>
            <i
              className="devicon-react-original colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col justify-center items-center text-center ">
        <h3 className=" text-center uppercase tracking-[20px] text-2xl">
          Back End
        </h3>
        <ul className="justify-content-center flex-wrap grid grid-cols-3 gap-20">
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Node.js</p>
            <i
              className="devicon-nodejs-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>MySQL</p>
            <i
              className="devicon-mysql-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Sequelize</p>
            <i
              className="devicon-sequelize-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>MongoDB</p>
            <i
              className="devicon-mongodb-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Heroku</p>
            <i
              className="devicon-heroku-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Graphql</p>
            <i
              className="devicon-graphql-plain"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Express</p>
            <i
              className="devicon-express-original colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Jest</p>
            <i
              className="devicon-jest-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
          <li className=" flex flex-col justify-content-center text-center ">
            <p>Git</p>
            <i
              className="devicon-git-plain colored"
              style={{ fontSize: "75px" }}
            ></i>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
