import React from 'react'
import { 
  Typography,
 } from "@material-tailwind/react";
import { FaFile,FaShareFromSquare } from "react-icons/fa6";
function Section01() {

 


  return (
    <div className='bg-gradient-to-r from-[#152853] to-[#030409] py-10'>
      <div className='w-10/12 md:w-6/12 mx-auto'>
        <Typography variant="h1"  color="white" className='text-center my-14'>文字故事徵件計畫</Typography>
        <Typography variant="h3"  color="white" className='mt-16'>計畫主旨</Typography>
        <Typography variant="lead" color='white' className='my-10'>
          推廣與促進嘉義市行銷與發展城市魅力，以嘉義市為主要故事場景或故事內容，發掘更多在地的紀錄故事或產製微電影、劇情短片等，只需透過【1000字內】(放大或改字顏色-主色調)的【文字故事】(放大或改字顏色-主色調)內容進行投稿，故事內容必須至少含有30%嘉義市的元素，影片類型不限，舉凡:紀錄片、劇情片、動畫片、舞台藝術片、音樂歌舞片、VR短片等均可，但文字故事內容需要有實際轉製成為影片的可行性!  
        </Typography>

        <Typography variant="h3"  color="white" className='mt-16'>報名資格</Typography>
        <Typography variant="lead" color='white' className='my-5'>不限國籍、年齡、居住地，凡對「嘉義市影視故事」主題有興趣者，皆可報名。</Typography>

        <Typography variant="h3" color="white" className='mt-16'>報名方式</Typography>
        <Typography variant="lead" color='white' className='my-5  '>1.一律採網路報名，請至<a href='google.com'  target="_blank" className='text-amber-400 hover:text-amber-200  '>【文字故事徵件】 </a> 填寫內容並詳閱 <a href={process.env.PUBLIC_URL+'/images/課表日期與內容師資.pdf'} className='text-amber-400 hover:text-amber-200 '> 【注意事項】</a>。</Typography>
        <Typography variant="lead" color='white' className='my-5'>2.僅限以個人名義報名，為鼓勵更多創作故事，同一人可以重複投件不同內容(不得一稿多投)，但僅可獲獎乙次，取最高名次獲獎。不得以公司行號或機構團體名義報名。</Typography>
        <Typography variant="lead" color='white' className='my-5'>3.故事內容不拘，唯不可有違反善良風俗之內容。</Typography>
        <Typography variant="lead" color='white' className='my-5'>4.皆需以繁體中文填寫相關內容。</Typography>
        <Typography variant="lead" color='white' className='my-5'>5.填寫故事內容以1000字內為限，並未有最少字數限制。</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>徵件期間</Typography>
        <Typography variant="lead" color='white' className='my-10'>即日起至2024.03.03(日) 下午17:00截止</Typography>

        <Typography variant="h3" color="white" className='mt-16'>評分標準</Typography>
        <Typography variant="lead" color='white' className='my-5'>1.評分標準：故事性 50%、創意性 30%、可行性 15%、加分5%</Typography>
        <Typography variant="lead" color='white' className='my-5'>2.故事內容需含有30%以上的嘉義「市」元素，例如:角色、場景、在地故事等，並依專業評審團共同判定。</Typography>
        <Typography variant="lead" color='white' className='my-5'>3.評審方式：邀請影視廣宣專家組成評審團隊，針對參賽作品進行評選。</Typography>
        <Typography variant="lead" color='white' className='my-5'>4.預計2024.04月份，於網站公開及電子信件各別通知獲獎者。</Typography>
        <Typography variant="lead" color='white' className='my-5'>5.獲選名單與頒獎地點，詳細時間與地點另行公告。</Typography>

        <Typography variant="h3" color="white" className='mt-16'>獎勵辦法 </Typography>
        <Typography variant="lead" color='white' className='my-5'>1.特優可得到10,000的獎勵金，共計3名。 </Typography>
        <Typography variant="lead" color='white' className='my-5'>2.優選可得到5,000的獎勵金，共計3名。</Typography>
        <Typography variant="lead" color='white' className='my-5'>3.凡投稿者，皆可以參與抽獎資格，以投稿件數為單位，獲獎者可以獲得統一超商100元禮卷，共計10名(獲獎者不得重複)。</Typography>

      </div>
      

    </div>
  )
}

export default Section01