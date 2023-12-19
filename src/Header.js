import React from 'react'
import { Link,useLocation} from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
function Header() {
  let location = useLocation();
  console.log(location.pathname)
  return (
    <div className=' relative  '>
      <div className=' w-full md:fixed top-0  left-0  z-10 bg-gradient-to-r from-[#ffa7b5] to-[#42cafe] px-10 py-2 flex md:items-center justify-between flex-col md:flex-row '>
        <div className='text-2xl my-4 md:my-0  md:text-lg tracking-wide font-semibold text-[#132249] '>嘉義市影視音基地</div>
        <div className='flex gap-4 '>
          <Link to="/" >
            <Button to="/" size="md" className={`text-base  text-white flex  items-center gap-1 ${location.pathname === '/' ? ' bg-deep-purple-900' : 'bg-deep-purple-400 '}`}>影視人才培育計畫 <FaAngleRight /></Button>
          </Link>
          <Link to="/plan2" >
            <Button to="/plan2" size="md" className={`text-base  text-white flex  items-center gap-1 ${location.pathname === '/plan2' ? ' bg-deep-purple-900' : 'bg-deep-purple-400 '}`}>文字故事徵件 <FaAngleRight /></Button>
          </Link>
          
        </div>
      </div>

    </div>


  )
}

export default Header