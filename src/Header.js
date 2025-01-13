import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAnglesRight, FaShareFromSquare } from "react-icons/fa6";
import { Button, Chip } from "@material-tailwind/react";
function Header() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <div className=" relative  ">
      <div className=" w-full md:fixed top-0  left-0  z-10 bg-gradient-to-r from-[#1a2f66] to-[#57617c] px-10 py-2 flex md:items-center justify-between  md:flex-row ">
        <div className="text-lg my-4 md:my-0  md:text-lg tracking-wide font-semibold text-white ">
          嘉義市影視人才培育學院
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex h-1/2 ">
            <div className=" items-center text-white text-xs bg-gradient-to-r from-[#51c3f1] to-[#f77f58]  rounded-lg py-1 px-2 gap-1 bounce hidden md:flex ">
              儘速報名 <FaAnglesRight />
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnCsnqsf6W0QS_opIohfVka7A_Wzcgf1eKDQOZ6yMVy9CXVA/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              to="/"
              size="md"
              className={`text-base  text-black flex  items-center gap-1 bg-amber-400 hover:text-black-700 `}
            >
              影視人才培育 <FaShareFromSquare />
            </Button>
          </a>
          {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvJIt5kMBlps6BHCl6B0A1rBg7h5IUU6BcXSLGuq1vQ_airg/viewform"  target="_blank" rel="noreferrer" >
            <Button to="/plan2" size="md" className={`text-base  text-white flex  items-center gap-1  bg-[#0e1935] hover:text-yellow-100`}>文字故事徵件 <FaShareFromSquare /></Button>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
