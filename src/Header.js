import React from 'react'
import ReactPlayer from 'react-player'
import { Button } from "@material-tailwind/react";
function Header() {
  return (
    <div className=' relative  '>
      <div className=' w-full fixed top-0  left-0  z-10 bg-gradient-to-r from-[#ffa7b5] to-[#42cafe] px-10 py-2 flex items-center justify-between'>
        <div className=' text-lg tracking-wide font-semibold text-[#132249] '>2024 嘉義市影視基地</div>
        <div className='flex gap-4'>
          <Button size="md" variant="gradient">影視人才培育計畫</Button>
          <Button size="md" variant="gradient">故事徵件計畫</Button>
        </div>
      </div>
      <div className='relative pt-[56%] -z-0 brightness-'>
        <ReactPlayer
          className=' absolute top-0 left-0'
          url='https://www.youtube.com/watch?v=JwjxSnf38sM'
          width='100%'
          height='100%'
          loop
          muted
          playing

        />
      </div>
    </div>


  )
}

export default Header