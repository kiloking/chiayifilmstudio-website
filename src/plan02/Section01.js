import React from 'react'
import { 
  Typography,
 } from "@material-tailwind/react";
import { FaFile,FaShareFromSquare } from "react-icons/fa6";
import Section02 from './Section02';
function Section01() {

 


  return (
    <div className='bg-gradient-to-r from-[#152853] to-[#030409] py-10'>
      <div className='w-10/12 md:w-7/12 mx-auto'>
        <Typography variant="h1"  className='text-center my-14 text-[#dfe103] ' id="p1">
          <img src={process.env.PUBLIC_URL+'/images/plan2.gif'} alt="" />
        </Typography>
        <Typography variant="h3"  color="white" className='mt-16'>計畫主旨</Typography>
        <Typography variant="lead" color='white' className='my-10'>
          推廣與促進嘉義市行銷與發展城市魅力，以嘉義市為主要故事場景或故事內容，發掘更多在地的紀錄故事或產製微電影、劇情短片等，只需透過<span className='text-[#ffbe99] font-bold'>【1000字內】</span>的<span className='text-[#ffbe99] font-bold'>【文字故事】</span>內容進行投稿，故事內容必須至少含有30%嘉義市的元素，影片類型不限，舉凡:紀錄片、劇情片、動畫片、舞台藝術片、音樂歌舞片、VR短片等均可，但文字故事內容需要有實際轉製成為影片的可行性!  
        </Typography>

        <Typography variant="h3"  color="white" className='mt-16'>報名資格</Typography>
        <Typography variant="lead" color='white' className='my-5'>不限任何條件，凡對「嘉義市影視故事」主題有興趣者，皆可報名。</Typography>

        <Typography variant="h3" color="white" className='mt-16'>報名方式</Typography>
        <Typography variant="lead" color='white' className='my-5  '>1.一律採網路報名，請詳閱<a href={process.env.PUBLIC_URL+'images/投件須知-文字故事徵件活動.pdf'} rel='noreferrer'  target="_blank" className='text-amber-400 hover:text-amber-200  '>【投件須知】 </a> 並線上報名 <a target="_blank"  href='https://docs.google.com/forms/d/e/1FAIpQLSdvJIt5kMBlps6BHCl6B0A1rBg7h5IUU6BcXSLGuq1vQ_airg/viewform' className='text-amber-400 hover:text-amber-200 '> 【文字故事徵件】</a>。</Typography>
        <Typography variant="lead" color='white' className='my-5'>2.僅限以個人名義報名，為鼓勵更多創作故事，同一人可以重複投件不同內容(不得一稿多投)，但僅可獲獎乙次，取最高名次獲獎。不得以公司行號或機構團體名義報名。</Typography>
        <Typography variant="lead" color='white' className='my-5'>3.故事內容不拘，唯不可有違反善良風俗之內容。</Typography>
        <Typography variant="lead" color='white' className='my-5'>4.皆需以繁體中文填寫相關內容。</Typography>
        <Typography variant="lead" color='white' className='my-5'>5.填寫故事內容以1000字內為限，並未有最少字數限制。</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>徵件期間</Typography>
        <Typography variant="lead" color='white' className='my-10'>即日起至2024.03.31(日) 下午17:00截止</Typography>

        <Typography variant="h3" color="white" className='mt-16'>評分標準</Typography>
        <Typography variant="lead" color='white' className='my-5'>1.評分標準：故事性 50%、創意性 30%、可行性 15%、加分5%</Typography>
        <Typography variant="lead" color='white' className='my-5'>2.故事內容需含有30%以上的嘉義「市」元素，例如:角色、場景、在地故事等，並依專業評審團共同判定。</Typography>
        <Typography variant="lead" color='white' className='my-5'>3.評審方式：邀請影視廣宣專家組成評審團隊，針對參賽作品進行評選。</Typography>
        <Typography variant="lead" color='white' className='my-5'>4.預計2024.4月底，於網站公開及電子信件各別通知獲獎者。</Typography>

        <Typography variant="h3" color="white" className='mt-16'>獎勵辦法 </Typography>
        <Typography variant="lead" color='white' className='my-5'>1.特優:10,000 獎勵金，共計3名。 </Typography>
        <Typography variant="lead" color='white' className='my-5'>2.優選:  5,000 獎勵金，共計3名。</Typography>
        <Typography variant="lead" color='white' className='my-5'>3.凡投稿者，皆可以參與抽獎資格，以投稿件數為單位，獲獎者可以獲得超商100元禮卷，共計10名(獲獎者不得重複)。</Typography>

        <Section02 />

      </div>
      

    </div>
  )
}

export default Section01