import React from 'react'
import { 
  Typography,
  List, 
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
 } from "@material-tailwind/react";
function Section01() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const qaitems=[
    {id:1,q:"課程真的全程免費嗎?",a:"是的。整套課程設計若換算成外部補習班收費標準，絕對超過萬元以上。唯有條件是入選學員將簽屬相關切結書規定並繳交1,000元的保證押金，必須實際至影視基地上滿至少15/19堂現場課程後，將其押金無息退還，並才能領取結業證書。"},
    {id:2,q:"請問只要填完Google報名表單，就算完成報名嗎?",a:"是的，徵選過程並沒有再第二次徵選或面試的安排，但填完Google報名表單仍需經過專業評審委員會進行評審，於2024.03.08(五) 以電子信件各別通知。"},
    {id:3,q:"我不太清楚「入門班」和「進階班」的差別?",a:"入門班: 將著重從零開始學習，從攝影機的數位知識、實際拍攝、後製操作、劇本創作等，不限拍攝影片的類型。<br/>進階班: 對已具有基本故事和影視拍攝和後製能力的人，課程強調在於如何讓作品更進一步被完善再到被看見、如何提案和行銷作品本身、及運用學習新興科技如VR和國際合製等。簡言之，曾經有基礎拍攝及剪輯能力之民眾，且具有想完成的故事或作品，進階班較為適合。"},
    {id:4,q:"入門班，真的完全沒有基礎也可以報名嗎?",a:"可以的，我們正是歡迎只要對影視具有熱情的民眾報名。"},
    {id:5,q:"報名徵選有限制嗎，怎樣才可以脫穎而出?",a:"只要符合報名條件，皆可以報名。因此不論您是學生、社群小編、行銷企劃、影像工作者、演員、或是經營文創店家想透過影像增加曝光，或是活到老學到老的年長者等等等，各行各業都可以依程度選擇來報名。<br/>本計畫徵選只有透過報名表單的問題，進行審查，因此您的回答將決定評審判斷是否具有影視熱情的唯一依據，同時建議加分項題目盡可能填寫。"},
    {id:6,q:"我可以一次報名兩班嗎?",a:"可以。本單位保留不足額錄取及增額錄取之權利。"},
    {id:7,q:"課程的影視類型，有特別限制嗎?",a:"每次課程安排，不限劇情片、紀錄片、微電影、影音短片、MV等。課程業師也來自多元的領域，採有系統性的課程安排及常態導師輔導，即便與您現今拍攝的影片類型不同，相信也能在課程中獲得收穫。"},
    {id:8,q:"我擔心課程跟不上，怎麼辦?",a:"嘉義市影視基地，會將每堂課程全程錄影，歡迎學員可以蒞臨基地複習觀看。此外，每位學員都將搭配常態導師陪伴，並也有課程外的業師諮詢輔導的資源。"},
    {id:9,q:"課程的教學形式為何?",a:"課程將採活潑輕鬆的形式，影視人才培育計畫並沒有要考試或升學等壓力，並搭配實作，期待業師與學員能雙向互動，一起創作出更多精彩故事。"},
    {id:10,q:"課程結束後，我能得到什麼?",a:"入門班學員，學習到影視相關的知識及業界真正需要的能力，並期許在課程結案階段能有獨自完成影片的成果。進階班的學員可以在作品上加深美學基礎，除了影像外，延伸接觸到行銷、募資等面向。"},
  ]
  return (
    <div className='bg-gradient-to-r from-[#152853] to-[#030409] py-10'>
      <div className='w-6/12 mx-auto'>
        <Typography variant="h1"  color="white" className='text-center my-14'>影視人才培育計畫</Typography>
        <Typography variant="h3"  color="white" className='mt-16'>計畫主旨</Typography>
        <Typography variant="lead" color='white' className='my-10'>
          影視人才培育是影視產業傳承與永續活絡的基石
          將導入小班教學制，分成「入門班」和「進階班」，依程度進行教學
          網羅全台各地具有實務經驗的業師蒞臨本市進行實體線下教學
          課程完全「不需費用」，並優先享有豐厚影視相關資源
          不論您是各行各業，只要對影視具有興趣，都非常歡迎您踴躍報名
          藉由嘉義市影視基地培育更多具有潛力的影視工作者，綻放更多嘉義市的故事
        </Typography>

        <Typography variant="h3"  color="white" className='mt-16'>報名資格</Typography>
        <Typography variant="lead" color='white' className='my-5'>1. 應以個人名義報名，不限性別、年齡、居住地等限制</Typography>
        <Typography variant="lead" color='white' className='my-5'>2. 具備國中學歷以上</Typography>
        <Typography variant="lead" color='white' className='my-5'>3. 基本的電腦操作能力</Typography>

        <Typography variant="h3" color="white" className='mt-16'>報名方式</Typography>
        <Typography variant="lead" color='white' className='my-10'>一律採取網路報名【GOOGLE表單連結】</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>報名時間</Typography>
        <Typography variant="lead" color='white' className='my-10'>即日起至2024.02.25(日) 下午17:00截止</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>課程時間與師資</Typography>
        <Typography variant="lead" color='white' className='my-10'>2024.03.23 至 2024.08.24，每周一堂，每堂課２小時 <br /> 詳見【課表日期】及【常態導師】</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>學員福利</Typography>
        <ul class="list-disc text-white text-lg ml-5">
          <li className='my-5'>結業評選獎金與結業證書</li>
          <li className='my-5'>優先享有業師諮詢的資源</li>
          <li className='my-5'>優先免費借用攝影設備與後製軟體</li>
          <li className='my-5'>優先享有免費進駐影視基地辦公空間</li>
        </ul>

        <Typography variant="h3"  color="white" className='mt-16'>招生名額</Typography>
        <Typography variant="lead" color='white' className='my-10'>暫定兩班各招收 10名學員，但本單位保留不足額錄取及增額錄取之權利。</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>徵選方式</Typography>
        <Typography variant="lead" color='white' className='my-10'>評審委員由主辦單位聘請國內影視產業相關從業人士及學者進行評審，暫定各錄取10名正取，10名備取 <br/> 2024.03.08(五) 以電子信件各別通知</Typography>

        <Typography variant="h3"  color="white" className='mt-16'>課程地點</Typography>
        <Typography variant="lead" color='white' className='my-10'>嘉義市影視音基地 地址:嘉義市北興街460號 (舊菸葉廠)</Typography>
        <div className='border-[#42cafe] border-8'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.211886541369!2d120.43275259999999!3d23.488876400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e9680873d3e6d%3A0xfa8a075a0d9b27b6!2zNjAw5ZiJ576p5biC6KW_5Y2A5YyX6IiI6KGXNDYw6Jmf!5e0!3m2!1szh-TW!2stw!4v1702391831500!5m2!1szh-TW!2stw" width="100%" height="450"  allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


        <Typography variant="h3"  color="white" className='mt-16'>常見Q&A</Typography>
        <div className='mt-10'>
          {
            qaitems.map((item,index)=>{
              return(
                <Accordion open={open === item.id}>
                  <AccordionHeader onClick={() => handleOpen(item.id)}  className={  ` hover:text-white/90 text-xl ${open === item.id ? "text-[#ffa7b5]" : "text-white "}`}>{item.q}</AccordionHeader>
                  <AccordionBody className="text-white/80 text-lg font-semibold">
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