import React from 'react'
import ReactPlayer from 'react-player';

import { 
  Typography,
  List, 
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
 } from "@material-tailwind/react";
 import { FaFile,FaShareFromSquare } from "react-icons/fa6";
function Section01() {
  const [open, setOpen] = React.useState(1);
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const qaitems=[
    {id:1,q:"課程真的全程免費嗎?",a:"是的，全程免費。課程若需要一個收費標準，價值將超過萬元!!因此誠摯邀請您把握可貴的機會!!"},
    {id:2,q:"請問只要填完Google報名表單，就算完成報名嗎?",a:"是的。報名過程並沒有再第二次徵選或面試的安排，但填完 <a href='https://docs.google.com/forms/d/e/1FAIpQLSeIdckF7cLWD9b_eYKr610llxEREG97wTVUs5TNg4vxWrIuBw/viewform' target='_blank' class='text-amber-400 hover:text-amber-200 '> 網路報名 </a> 表單仍需經過專業評審委員會進行評審，預計於2024.03.08(五) 以電子信件各別通知正式學員。"},
    {id:3,q:"「入門班」和「進階班」的差別?",a:"入門班: 將著重從「0」開始學習，從攝影的鏡頭語言、數位知識、田野調查、劇本創作、實務拍攝、後製操作等，循序漸進地誕生屬於自己的第一個作品。<br/><br/>進階班: 針對已具有基本故事內容與前、後期製作能力，課程強調在於如何讓作品更進一步被完善再到被看見、如何提案和行銷作品本身、及運用學習新興科技如VR(虛擬實境)或國際合製等。簡言之，只要您過去已經嘗試過拍攝並想更進一步完善作品，進階班較為合適。"},
    {id:4,q:"入門班，真的完全沒有基礎也可以報名嗎?",a:"是的。我們熱烈歡迎只要對影視具有熱情的民眾報名。透過系列課程將帶領您從入門一步步學習到實作，基礎的理論知識必然存在，但課程設計將更著重於實務。<br/><br/>人才培育計畫並不是一個培養會考試的補習班，而是一個期許能孵化出更多動人影視故事的場域。不用很厲害才可以開始，而是開始了才會變厲害!"},
    {id:5,q:"報名徵選有限制嗎，怎樣才能夠脫穎而出?",a:"只要符合報名資格即可。因此不論您是學生、社群小編、行銷企劃、影像工作者、演員、經營各行各業的店家想透過影像的方式增加曝光，或是活到老學到老的年長者等，只要對用影視說故事有熱情及想法，都歡迎報名!!<br/><br/>本計畫徵選透過 <a href='https://docs.google.com/forms/d/e/1FAIpQLSeIdckF7cLWD9b_eYKr610llxEREG97wTVUs5TNg4vxWrIuBw/viewform' target='_blank' class='text-amber-400 hover:text-amber-200 '> 報名表單 </a>的各項問題進行審查，因此您的回答將是評審判斷的唯一依據，因此建議填寫完整，並盡可能完善加分項題目。"},
    {id:6,q:"可以一次報名兩班嗎?",a:"可以。本單位保留不足額錄取及增額錄取之權利。"},
    {id:7,q:"課程的影視類型，有特別限制在哪一塊領域嗎?",a:"課程的設計，不限劇情片、紀錄片、微電影、影音短片、MV等。講師也來自多元的領域，即便與您現今拍攝的影片類型不盡相同，反倒相信也能在多元的課程中獲得意想不到的收穫。"},
    {id:8,q:"擔心課程跟不上，怎麼辦?",a:"嘉義市影視音基地，會將每堂課程全程錄影，歡迎學員可以蒞臨基地複習觀看。此外，每位學員都將搭配常態導師陪伴，並也有課程外的業師諮詢輔導的資源，再者，本基地亦提供基本攝影設備與剪輯軟體供學員免費優先使用。"},
    {id:9,q:"課程的教學形式為何?",a:"課程將採活潑輕鬆的形式，影視人才培育計畫並沒有考試的壓力，期待講師與學員能雙向互動，共創出更多精彩故事。"},
    {id:10,q:"課程結束後，有什麼收穫?",a:"入門班學員，培養影視相關的知識及業界真正需要的能力，透過系統性的學習可以實際運用到學員當初報名時的目標。<br/><br/>進階班學員，將在作品上加深美學基礎，除了影像技巧提升外，延伸接觸到行銷、募資等面向。<br/><br/>如果你有夢想，你就能做到，別忘了迪士尼的一切，都是由一個夢想和一隻老鼠所開始的。"},
  ]
  return (
    <div className='bg-gradient-to-r from-[#152853] to-[#030409] '>

      <div className='relative pt-[56%] -z-0 brightness-'>
        <ReactPlayer
          className=' absolute top-0 left-0'
          url='https://www.youtube.com/watch?v=D-fCQbXBdC4'
          width='100%'
          height='100%'
          loop
          muted
          playing
          config={{
            youtube: {
              playerVars: { modestbranding: 1 }
            }
          }}

        />
      </div>
      <div className='w-10/12 md:w-6/12 mx-auto'>
        <div className='flex items-center text-white justify-between my-10'>
          <div onClick={() => scrollToElement('p1')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>影視人才培育</div>
          <div onClick={() => scrollToElement('p2')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>文字故事徵件</div>
          <div onClick={() => scrollToElement('p3')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>地點與交通</div>
          <div onClick={() => scrollToElement('p4')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>聯絡方式</div>
        </div>
        <Typography variant="h1"  className='text-center my-14 text-[#dfe103] ' id="p1">影視人才培育計畫</Typography>
        <Typography variant="h3"  color="white" className='mt-16'>計畫主旨</Typography>
        <Typography variant="lead" color='white' className='my-10'>
        【影視人才培育計畫】描述在影視世界尋找無盡可能的旅程! <br /> <br />
          透過導入影視音小班教學制，課程分成「入門班」和「進階班」，兼具系統性與實務
          性的課程設計，並藉由網羅全台各地具有實務經驗的業師蒞臨本市進行實體教學，力
          求每位學員都能與業師產生交集，並聯集琢磨新點子。 <br /> <br />
          課程完全「免費」外，學員還將享有豐厚的影視相關資源，因此不論您在各行各業，
          對於想要透過影像說故事有興趣者，都非常歡迎您報名，一同釀造蠢蠢欲動的影視作品。
        </Typography>

        <Typography variant="h3"  color="white" className='mt-16'>報名資格</Typography>
        <Typography variant="lead" color='white' className='my-5'>1. 以個人名義報名，不限性別、年齡、居住地等限制</Typography>
        <Typography variant="lead" color='white' className='my-5'>2. 具備國中學歷以上</Typography>
        <Typography variant="lead" color='white' className='my-5'>3. 基本的電腦操作能力</Typography>

        <Typography variant="h3" color="white" className='mt-16'>報名方式</Typography>
        <Typography variant="lead" color='white' className='my-10 flex items-center gap-1'>一律採<a href="https://docs.google.com/forms/d/e/1FAIpQLSeIdckF7cLWD9b_eYKr610llxEREG97wTVUs5TNg4vxWrIuBw/viewform"  target="_blank" className='text-amber-400 hover:text-amber-200 flex items-center gap-1'>網路報名 <FaShareFromSquare /></a></Typography>

        <Typography variant="h3"  color="white" className='mt-16'>報名時間</Typography>
        <Typography variant="lead" color='white' className='my-10'>即日起至2024.02.25(日) 下午17:00截止</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>課程表與師資</Typography>
        <Typography variant="lead" color='white' className='my-10 flex items-center gap-1'>詳見 <a target="_blank"  href={process.env.PUBLIC_URL+'/images/課表日期與內容師資.pdf'} className='text-amber-400 hover:text-amber-200 flex items-center'> 【課表日期與內容師資】<FaFile /></a></Typography>

        <Typography variant="h3"  color="white" className='mt-16'>學員福利</Typography>
        <ul class="list-disc text-white text-lg ml-5">
          <li className='my-5'>結業評選獎金與結業證書</li>
          <li className='my-5'>優先享有業師諮詢的資源</li>
          <li className='my-5'>優先免費借用攝影設備與後製軟體</li>
          <li className='my-5'>優先享有免費進駐影視基地辦公空間</li>
        </ul>

        <Typography variant="h3"  color="white" className='mt-16'>招生名額</Typography>
        <Typography variant="lead" color='white' className='my-10'>兩班各招收 10 名學員，5名備取，本單位保留不足額錄取及增額錄取之權利。</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>徵選方式</Typography>
        <Typography variant="lead" color='white' className='my-10'>評審委員由主辦單位聘請國內影視產業相關從業人士或學者進行評審。 <br/> 2024.03.08(五) 將於網站公開及電子信件各別通知入選者。</Typography>




        <Typography variant="h3"  color="white" className='mt-16'>常見Q&A</Typography>
        <div className='mt-10 py-10'>
          {
            qaitems.map((item,index)=>{
              return(
                <Accordion key={'s01_'+index} open={open === item.id} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                  <AccordionHeader onClick={() => handleOpen(item.id)}  className={  ` hover:text-[#ffa7b5] text-xl ${open === item.id ? "text-[#ffa7b5]" : "text-white "}`}>{item.q}</AccordionHeader>
                  <AccordionBody className="text-white/80 text-lg font-semibold ">
                    <div dangerouslySetInnerHTML={ {__html: item.a} }></div>
                  </AccordionBody>
                </Accordion>
              )
            })
          }
        </div>

      </div>


    </div>
  )
}

export default Section01