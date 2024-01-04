import React from 'react'
import { FaFilm,FaBook } from "react-icons/fa6";
function BottomLinkGroup() {
  return (
    <div className='w-full flex items-center '>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSeIdckF7cLWD9b_eYKr610llxEREG97wTVUs5TNg4vxWrIuBw/viewform"  target="_blank" rel="noreferrer"
        className='w-full py-10 bg-[#152853]  flex flex-col items-center gap-2 relative group text-white z-0'>
       
        
        <div className='bg-[#1d426f] rounded-full p-5 relative z-0 overflow-hidden'>
          <div className=' absolute top-0 left-0 w-full bg-[#fff] h-full scale-0  group-hover:scale-100 -z-10 transition-all duration-150 rounded-full '></div>
          <FaFilm size={35} className=' group-hover:text-[#1d426f]' />
        </div>
        <div className='text-sm'>影視人才培育</div>
        <div className=' absolute top-0 w-full bg-[#1d426f] h-1 group-hover:h-full -z-10 transition-all duration-150 '></div>
      </a>
      {/* <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSdvJIt5kMBlps6BHCl6B0A1rBg7h5IUU6BcXSLGuq1vQ_airg/viewform"  target="_blank" rel="noreferrer"
        className='w-1/2 py-10 bg-[#152853]  flex flex-col items-center gap-2 relative group text-white z-0'>
       
        
        <div className='bg-[#1d426f] rounded-full p-5 relative z-0 overflow-hidden'>
          <div className=' absolute top-0 left-0 w-full bg-[#fff] h-full scale-0  group-hover:scale-100 -z-10 transition-all duration-150 rounded-full '></div>
          <FaBook size={35} className=' group-hover:text-[#1d426f]' />
        </div>
        <div className='text-sm'>文字故事徵件</div>
        <div className=' absolute top-0 w-full bg-[#1d426f] h-1 group-hover:h-full -z-10 transition-all duration-150 '></div>
      </a> */}
    </div>
  )
}

export default BottomLinkGroup