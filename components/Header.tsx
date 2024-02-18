import React from "react";
import { ThemeToggler } from "./ThemeToggler";

function Header() {
  return (
    <div className=" fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-r from-purple-700 via-yellow-700 to-yellow-300">
      <div className="text-white">Samuel Lee</div>

      <div className="flex space-x-2">
        <ThemeToggler />
      </div>
    </div>
  );
}

export default Header;
