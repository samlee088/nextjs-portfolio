import React from "react";

export default function ResumeSkills() {
  return (
    <div>
      <div className="animate-rotate-x">
        <div className="d-flex text-center justify-content-center">
          <p style={{ fontSize: "50px", marginTop: "50px" }}>Front End</p>
        </div>
        <ul className="list-unstyled flex flex-row pr-3  justify-content-center justify-evenly flex-wrap">
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

        <div className="d-flex  text-center justify-content-center ">
          <p style={{ fontSize: "50px", marginTop: "75px" }}>Back End</p>
        </div>
        <ul className="list-unstyled  flex flex-row pr-3 justify-evenly flex-wrap">
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
    </div>
  );
}