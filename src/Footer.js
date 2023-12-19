import React from 'react'
import { Typography } from "@material-tailwind/react";
import { FaEnvelope,FaPhone } from "react-icons/fa6";
function Footer() {
  return (
    <footer className=" bg-white  flex w-full gap-4 flex-row flex-wrap items-center justify-center border-t border-blue-gray-50/50 py-5  text-center ">
      <Typography color="" className="font-normal flex items-center ">
         <div className=' whitespace-nowrap'>主辦單位 |</div> <div className='w-full'><img src={process.env.PUBLIC_URL+'/images/chiayi_logo.png'} alt="" className='w-44' /></div>
      </Typography>
      <Typography color="" className="font-normal">
         執行單位 | 嘉義市影視音基地 
      </Typography>
      <Typography color="" className="font-normal flex  items-center  gap-2">
        <FaEnvelope /> chiayifilmstudio@gmail.com
      </Typography>
      <Typography color="" className="font-normal flex  items-center  gap-2">
        <FaPhone /> 0988-129-938 文小姐
      </Typography>

    </footer>

  )
}

export default Footer