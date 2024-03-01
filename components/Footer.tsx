"use client";

import React from "react";
export default function Footer() {
  return (
    <footer className="text-center w-screen mt-10 bottom-0">
      <div className="container pt-4 flex flex-row items-center justify-center">
        <section className="mb-4 flex flex-row ">
          {/* <!-- Google --> */}
          <a
            className="btn text-white btn-floating m-10"
            style={{ backgroundColor: "#dd4b39" }}
            href="mailto:leesamuel42@gmail.com"
            role="button"
          >
            <img
              src="data:image/png;base64,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"
              className="w-10"
            />
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn text-white btn-floating m-10"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/samuel-lee-891a70242/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            {/* <FaLinkedin /> */}
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
              className="w-10"
            />
          </a>

          {/* <!-- Github --> */}
          <a
            className="btn text-white btn-floating m-10"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/samlee088"
            role="button"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1656643448118689794/Muhd9bb9_400x400.jpg"
              className="w-10"
            />
          </a>
        </section>
      </div>
    </footer>
  );
}
