import React from "react";
import fullSeattle from "./images/Seattle_skyline_from_Kerry_Park,_Sept._2015_(21418893286).jpg";
import Image from "next/image";
import IntroductionText from "./IntroductionText";

function Introduction() {
  return (
    <div>
      <Image src={fullSeattle} alt="landscape picture of Seattle" />

      <IntroductionText />
    </div>
  );
}

export default Introduction;