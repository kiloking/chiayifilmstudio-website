import React from 'react'
import { Link,useLocation} from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";
import { Button,Chip } from "@material-tailwind/react";
function Header() {
  let location = useLocation();
  console.log(location.pathname)
  return (
    <div className=' relative  '>
      <div className=' w-full md:fixed top-0  left-0  z-10 bg-gradient-to-r from-[#ffa7b5] to-[#42cafe] px-10 py-2 flex md:items-center justify-between flex-col md:flex-row '>
        <div className='text-2xl my-4 md:my-0  md:text-lg tracking-wide font-semibold text-[#132249] '>嘉義市影視音基地</div>
        <div className='flex gap-4 items-center '>
          <div className="flex h-1/2 ">
            <div className=' items-center text-white text-xs bg-red-400 rounded-lg py-1 px-2 gap-1 bounce hidden md:flex '>儘速報名 <FaAnglesRight /></div>
          </div>
          <a href="https://google.com"  target="_blank" >
            <Button to="/" size="md" className={`text-base  text-black flex  items-center gap-1 bg-[#dfe103] `}>影視人才培育 </Button>
          </a>
          <a href="https://google.com"  target="_blank" >
            <Button to="/plan2" size="md" className={`text-base  text-black flex  items-center gap-1  bg-[#ffbe99] `}>文字故事徵件 </Button>
          </a>
          
        </div>
      </div>

    </div>


  )
}

export default Header