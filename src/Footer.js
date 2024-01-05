import React from 'react'
import { Typography } from "@material-tailwind/react";
import { FaEnvelope,FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <footer id="footer" className=" bg-white  flex  gap-7 flex-row flex-wrap md:items-center md:justify-center border-t border-blue-gray-50/50 py-5  text-center w-10/12 md:w-full mx-auto ">


      <Typography color="" className="font-normal flex items-center gap-2 ">
         <div className=' whitespace-nowrap'>指導單位 |</div> <div className='w-full'><img src={process.env.PUBLIC_URL+'/images/logo001.webp'} alt="" className='w-44' /></div>
      </Typography>
      <Typography color="" className="font-normal flex items-center gap-2 ">
         <div className=' whitespace-nowrap'>主辦單位 |</div> <div className='w-full'><img src={process.env.PUBLIC_URL+'/images/logo002.svg'} alt="" className='w-44' /></div>
      </Typography>
      <Typography color="" className="font-normal">
         執行單位 | 原來影像製作有限公司
      </Typography>


    </footer>

  )
}

export default Footer