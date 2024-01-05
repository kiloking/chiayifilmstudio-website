import React from 'react'
import { 
  Typography,Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
 } from "@material-tailwind/react";
 import { FaTrainSubway } from "react-icons/fa6";
function Section02() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div className='taffic pb-12' id="p3">
      <Typography variant="h3"  color="white" className='mt-16'>地點與交通</Typography>
      <Typography variant="lead" color='white' className='my-10'>嘉義市影視音基地 <br /> 地址:嘉義市西區北安路74-80號 (舊菸葉廠)</Typography>
      <Button onClick={handleOpen} variant="gradient" color='blue'  className='my-5 flex items-center gap-2 cursor-pointer text-base '> <FaTrainSubway /> 交通方式說明</Button> 
      <div className='flex gap-2'>
        <div className='border-[#42cafe]  w-1/2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14636.811042970876!2d120.4321935!3d23.4892052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e97e447e8790d%3A0xeefdd10b33b77622!2z5ZiJ576p5biC5b2x6KaW6Z-z5Z-65Zyw!5e0!3m2!1szh-TW!2stw!4v1702987975351!5m2!1szh-TW!2stw" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='w-1/2 '>
          <img src={process.env.PUBLIC_URL+'/images/S__42647560.jpg'} alt="" className='w-full object-cover h-full'/>
        </div>
      </div>
      

      <Dialog open={open} handler={handleOpen} className='bg-gradient-to-r from-[#152853] to-[#030409]' size="md">
        <DialogHeader className='text-white flex gap-2 items-center'> <FaTrainSubway /> 交通方式說明</DialogHeader>
        <DialogBody>
          <Typography variant="h5" color='white' className='my-5'>高鐵 |</Typography>
          <Typography variant="lead" color='white' className='my-5'>搭乘高鐵免費接駁車，至【自由友愛站】下車，並步行約5分鐘至嘉義市影視音基地</Typography>
          <Typography variant="h5" color='white' className='my-5'>火車 |</Typography>
          <Typography variant="lead" color='white' className='my-5'>嘉義市火車站-前站或嘉義火車站後站(嘉義市轉運中心)下車， <br />搭乘公車綠色【中山幹線】至中興友愛路口下車，並步行約10分鐘至影視音基地</Typography>
          <Typography variant="h5" color='white' className='my-5'>公車 |</Typography>
          <Typography variant="lead" color='white' className='my-5'>綠線【中山幹線】至中興友愛路口站下車，並步行約15分鐘至嘉義市影視音基地</Typography>
          <Typography variant="lead" color='white' className='my-5'>菊線【光林我嘉線】至自由友忠路口站下車，並步行約20分鐘至嘉義市影視音基地</Typography>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 text-lg"
          >
            <span>關閉</span>
          </Button>
        </DialogFooter>
      </Dialog>

    </div>
  )
}

export default Section02