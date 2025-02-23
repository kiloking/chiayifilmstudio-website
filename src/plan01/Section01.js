import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  FaFile,
  FaShareFromSquare,
  FaTrainSubway,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import ImageModal from "../Components/ImageModal";
function Section01() {
  const [open, setOpen] = React.useState(1);
  const [openD, setOpenD] = React.useState(false);
  const handleOpenD = () => setOpenD(!openD);
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const imgs = [
    { image: "p01.jpg" },
    { image: "p02.jpg" },
    { image: "p03.jpg" },
    { image: "p04.jpg" },
    { image: "p05.jpg" },
    { image: "p06.jpg" },
  ];
  const v2imgs = [
    { image: "v2_01.jpg" },
    { image: "v2_02.jpg" },
    { image: "v3_03.jpg" },
  ];

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalOpen(false);
  };
  const qaitems = [
    {
      id: 1,
      q: "課程真的全程免費嗎?",
      a: "是的，全程免費。課程若需要一個收費標準，價值將超過萬元!!因此誠摯邀請您把握可貴的機會!! <br/><br/> <div>此外，入選者直接享有資金補助，以完善影視作品。</div>",
    },
    {
      id: 2,
      q: "請問只要填完Google報名表單，就算完成報名嗎?",
      a: "是的。只需填寫五題就完成囉!<br/><br/> <div>報名過程並沒有再第二次徵選或面試的安排，但填完 <a href='https://docs.google.com/forms/d/e/1FAIpQLSfnCsnqsf6W0QS_opIohfVka7A_Wzcgf1eKDQOZ6yMVy9CXVA/viewform?usp=header' rel='noreferrer' target='_blank' class='text-amber-400 hover:text-amber-200 '> 網路報名 </a> 表單仍需經過專業評審委員會進行評審，預計於 2025.02.22(六) 以電子信件各別通知正式學員。</div>",
    },
    {
      id: 3,
      q: "「入門班」和「進階班」的差別?",
      a: "入門班: 將著重從「0」開始學習，從攝影的鏡頭語言、數位知識、田野調查、劇本創作、實務拍攝、後製操作等，循序漸進地誕生屬於自己的第一個作品。<br/><br/> <div>進階班: 針對已具有基本故事內容與前、後期製作能力，課程強調在於如何讓作品更進一步被完善再到被看見、如何提案和行銷作品本身、了解國內外競賽及政府資源或國際合製等。簡言之，只要您過去已經嘗試過拍攝並想更進一步完善作品，進階班較為合適。</div>",
    },
    {
      id: 4,
      q: "入門班，真的完全沒有基礎也可以報名嗎?",
      a: "是的。我們熱烈歡迎只要對影視具有熱情的民眾報名。透過系列課程將帶領您從入門一步步學習到實作，基礎的理論知識必然存在，但課程設計將更著重於實務。<br/><br/> <div>人才培育計畫並不是一個培養會考試的補習班，而是一個期許能孵化出更多動人影視故事的場域。不用很厲害才可以開始，而是開始了才會變厲害!</div>",
    },
    {
      id: 5,
      q: "報名徵選有限制嗎，怎樣才能夠脫穎而出?",
      a: "只要符合報名資格即可。因此不論您是學生、社群小編、行銷企劃、影像工作者、演員、經營各行各業的店家想透過影像的方式增加曝光，或是活到老學到老的年長者等，只要對用影視說故事有熱情及想法，都歡迎報名!!<br/><br/><div>本計畫徵選透過 <a href='https://docs.google.com/forms/d/e/1FAIpQLSfnCsnqsf6W0QS_opIohfVka7A_Wzcgf1eKDQOZ6yMVy9CXVA/viewform?usp=header' rel='noreferrer' target='_blank' class='text-amber-400 hover:text-amber-200 '> 報名表單 </a>的各項問題進行審查，因此建議填寫完整，若以嘉義市故事為主的題材具有大幅度加分，並盡可能完善加分項題目。</div>",
    },
    {
      id: 6,
      q: "可以一次報名兩班嗎?",
      a: "可以。<br/><br/><div>本單位保留不足額錄取及增額錄取之權利。</div>",
    },
    {
      id: 7,
      q: "課程的影視類型，有特別限制在哪一塊領域嗎?",
      a: "課程的設計，不限劇情片、紀錄片、微電影、影音短片、MV等。講師也來自多元的領域，即便與您現今拍攝的影片類型不盡相同，反倒相信也能在多元的課程中獲得意想不到的收穫。",
    },
    {
      id: 8,
      q: "擔心課程跟不上，怎麼辦?",
      a: "嘉義市影視人才培育學院，會將每堂課程全程錄影，歡迎學員可以蒞臨基地複習觀看。<br/><br/><div>此外，每位學員都將搭配常態導師陪伴，並也有課程外的業師諮詢輔導的資源，再者，本基地亦提供基本攝影設備與剪輯軟體供學員免費優先使用。</div>",
    },
    {
      id: 9,
      q: "課程的教學形式為何?",
      a: "課程將採活潑輕鬆的形式，影視人才培育計畫並沒有考試的壓力，期待講師與學員能雙向互動，共創出更多精彩故事。",
    },
    {
      id: 10,
      q: "課程結束後，有什麼收穫?",
      a: "入門班學員，培養影視相關的知識及業界真正需要的能力，透過系統性的學習可以實際運用到學員當初報名時的目標。<br/><br/><div>進階班學員，將在作品上加深美學基礎，除了影像技巧提升外，延伸接觸到行銷、募資等面向。</div><br/><div>如果你有夢想，你就能做到，別忘了迪士尼的一切，都是由一個夢想和一隻老鼠所開始的。</div>",
    },
  ];
  const [currentSection, setCurrentSection] = useState(null);
  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); // 获取所有的 section 元素

    // 遍历每个 section 元素并检查是否到达顶部
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      console.log(rect.top <= 350);
      console.log(rect.top < window.innerHeight);
      console.log(rect.top);
      console.log(window.innerHeight);
      if (rect.top <= 350 && rect.top < window.innerHeight) {
        setCurrentSection(section.id); // 当前 section 到达顶部，更新状态
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#152853] to-[#030409] ">
      <ImageModal
        isOpen={modalOpen}
        imageUrl={selectedImage}
        onClose={closeModal}
      />
      <div className="relative pt-[56%] -z-0 brightness-">
        <ReactPlayer
          className=" absolute top-0 left-0 "
          url="https://www.youtube.com/watch?v=m8xTmKw9rLo"
          width="100%"
          height="100%"
          loop
          muted={true}
          playing
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
        />
      </div>
      <div className="w-10/12 md:w-7/12 mx-auto">
        {/* <div className='flex items-center text-white justify-between my-10'>
          <div onClick={() => scrollToElement('p1')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>影視人才培育</div>
          <div onClick={() => scrollToElement('p2')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>文字故事徵件</div>
          <div onClick={() => scrollToElement('p3')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>地點與交通</div>
          <div onClick={() => scrollToElement('p4')} className='border border-white px-2 py-2 rounded-md cursor-pointer'>聯絡方式</div>
        </div> */}
        <Typography variant="h1" className="text-center my-16 text-[#dfe103] ">
          <img src={process.env.PUBLIC_URL + "/images/title-1.png"} alt="" />
        </Typography>
        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p10"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p10"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            錄取名單
          </div>
          <div
            className={`${
              currentSection === "p10" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <div className="flex flex-col items-center   gap-5 my-[10%]">
          <div className="w-full">
            <img src={"https://web.forestdev.work/chiayi/0223_1.png"} alt="" />
          </div>
          <div className="w-full">
            <img src={"https://web.forestdev.work/chiayi/0223_2.png"} alt="" />
          </div>
        </div>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p1"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p1"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            計畫主旨
          </div>
          <div
            className={`${
              currentSection === "p1" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <Typography variant="lead" color="white" className="my-10">
          【影視人才培育計畫】一同打造繽紛璀璨的影視作品! <br /> <br />
          透過導入影視音小班教學制，課程分成「入門班」和「進階班」，兼具系統性與實務性的課程設計，並藉由網羅全台各地具有實務經驗的業師蒞臨嘉義市進行實體教學，力求每位學員都能與業師產生交集，並聯集琢磨新點子。{" "}
          <br /> <br />
          課程完全「免費」外，學員還將享有豐厚的影視相關資源，因此不論您在各行各業，對於想要透過影像說故事有興趣者，都非常歡迎您報名，一同釀造蠢蠢欲動的影視作品。
        </Typography>
        <Typography variant="lead" className="my-10 text-blue-200">
          #【免費】完整系列課程 <br />
          # 三金 (金馬、金鐘、金曲) 導演領軍 <br />
          # 選擇「入門」或「進階」小班教學
          <br /># 報名入選者，享有製作資金補助
        </Typography>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p2"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p2"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            報名資格
          </div>
          <div
            className={`${
              currentSection === "p2" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <Typography variant="lead" color="white" className="my-5">
          1. 以個人名義報名，不限性別、年齡、居住地等限制
        </Typography>
        <Typography variant="lead" color="white" className="my-5">
          2. 具備國中學歷以上
        </Typography>
        <Typography variant="lead" color="white" className="my-5">
          3. 基本電腦操作能力
        </Typography>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p3"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p3"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            報名方式與時間
          </div>
          <div
            className={`${
              currentSection === "p3" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <Typography
          variant="lead"
          color="white"
          className="my-10 flex items-center gap-1"
        >
          一律採
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfnCsnqsf6W0QS_opIohfVka7A_Wzcgf1eKDQOZ6yMVy9CXVA/viewform?usp=header"
            target="_blank"
            className="text-amber-400 hover:text-amber-200 flex items-center gap-1"
          >
            網路報名 <FaShareFromSquare />
          </a>
        </Typography>
        <Typography variant="lead" color="white" className="my-10">
          即日起至2025.02.15 (六) 下午 23:59 截止
        </Typography>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p4"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p4"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            課程表與師資
          </div>
          <div
            className={`${
              currentSection === "p4" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <Typography variant="lead" color="white" className="my-10 ">
          【入門班】 每周六 14:00-17:00 <br />
          【進階班】 每周日 14:00-17:00
        </Typography>

        <Typography
          variant="lead"
          color="white"
          className="my-10 flex items-center gap-1"
        >
          詳見{" "}
          <a
            target="_blank"
            href={"https://web.forestdev.work/chiayi/課程規劃Fianl0117.pdf"}
            className="text-amber-400 hover:text-amber-200 flex items-center"
          >
            {" "}
            【課表日期與內容師資】
            <FaFile />
          </a>
        </Typography>
        <div className="flex flex-col items-center   gap-5">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            className="w-full"
            style={{
              "--swiper-navigation-size": "25px",
            }}
          >
            {v2imgs.map((item, index) => {
              return (
                <SwiperSlide>
                  <img
                    src={"https://web.forestdev.work/chiayi/" + item.image}
                    alt=""
                    className="w-full"
                    onClick={() =>
                      openModal(
                        "https://web.forestdev.work/chiayi/" + item.image
                      )
                    }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="w-full h-full aspect-video">
            <ReactPlayer
              className="w-full h-full  "
              url="https://www.youtube.com/watch?v=Ws1J7Hblib0"
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { modestbranding: 1 },
                },
              }}
            />
          </div>
          <div className="w-full h-full aspect-video">
            <ReactPlayer
              className="w-full h-full  "
              url="https://www.youtube.com/watch?v=mTBuib_3dhM"
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: { modestbranding: 1 },
                },
              }}
            />
          </div>
        </div>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p5"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p5"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            學員福利
          </div>
          <div
            className={`${
              currentSection === "p5" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <ul className="list-disc text-white text-lg ml-5">
          <li className="my-5">七堂選修課增進實作技能</li>
          <li className="my-5">
            入選者享有資金補助，入門班2,000元整，進階班5,000元整
          </li>
          <li className="my-5">結業評選獎金與結業證書</li>
          <li className="my-5">優先享有業師諮詢的資源</li>
          <li className="my-5">優先免費借用攝影設備與剪接軟體</li>
        </ul>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p6"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p6"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            招生名額
          </div>
          <div
            className={`${
              currentSection === "p6" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <Typography variant="lead" color="white" className="my-10">
          兩班各招收 12-16
          名學員，備取6-8名，本單位保留不足額錄取及增額錄取之權利。
        </Typography>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p7"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p7"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            徵選方式
          </div>
          <div
            className={`${
              currentSection === "p7" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <Typography variant="lead" color="white" className="my-10">
          評審委員由主辦單位聘請國內影視產業相關從業人士或學者進行評審。
          <br /> 暫定 2025.02.22(六) 於本網站公開及電子信件各別通知入選者。
        </Typography>

        <section
          className="flex  items-center gap-5 mt-20 relative z-0"
          id="p8"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/ball.png"}
            alt=""
            className="w-12"
          />
          <div
            className={`${
              currentSection === "p8"
                ? "  from-yellow-200 to-white"
                : "from-white to-white"
            }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
          >
            常見Q&A
          </div>
          <div
            className={`${
              currentSection === "p8" ? " opacity-100" : " opacity-0 "
            } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
          >
            <img src={process.env.PUBLIC_URL + "/images/bg-light.png"} alt="" />
          </div>
        </section>
        <div className="mt-10 py-10">
          {qaitems.map((item, index) => {
            return (
              <Accordion
                key={"s01_" + index}
                open={open === item.id}
                className="mb-2 rounded-lg border border-blue-gray-100 px-4"
              >
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className={` hover:text-[#ffa7b5] text-xl ${
                    open === item.id ? "text-[#ffa7b5]" : "text-white "
                  }`}
                >
                  {item.q}
                </AccordionHeader>
                <AccordionBody className="text-white/80 text-lg font-semibold ">
                  <p dangerouslySetInnerHTML={{ __html: item.a }} />
                  {/* <div className=' whitespace-pre-wrap'>{item.a}</div> */}
                </AccordionBody>
              </Accordion>
            );
          })}
        </div>

        <div className="taffic pb-12">
          <section
            className="flex  items-center gap-5 mt-20 relative z-0"
            id="p9"
          >
            <img
              src={process.env.PUBLIC_URL + "/images/ball.png"}
              alt=""
              className="w-12"
            />
            <div
              className={`${
                currentSection === "p9"
                  ? "  from-yellow-200 to-white"
                  : "from-white to-white"
              }  bg-clip-text  bg-gradient-to-l text-transparent text-3xl font-semibold tracking-wider  transition-all duration-500  `}
            >
              地點與交通
            </div>
            <div
              className={`${
                currentSection === "p9" ? " opacity-100" : " opacity-0 "
              } absolute -top-5 left-10 w-[300px] -z-10 transition-opacity duration-500 delay-100  `}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/bg-light.png"}
                alt=""
              />
            </div>
          </section>
          <Typography variant="lead" color="white" className="my-10">
            <br /> 地址:嘉義市西區北安路74-80號
          </Typography>

          <Typography
            variant="lead"
            color="white"
            className="flex items-center gap-2"
          >
            {" "}
            <FaPhone /> 黃小姐 0966-880-270
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="flex items-center gap-2"
          >
            {" "}
            <FaEnvelope />{" "}
            <a href="mailto:chiayifilmstudio@gmail.com">
              chiayifilmstudio@gmail.com
            </a>{" "}
          </Typography>
          <Button
            onClick={handleOpenD}
            variant="gradient"
            color="blue"
            className="my-5 flex items-center gap-2 cursor-pointer text-base "
          >
            {" "}
            <FaTrainSubway /> 交通方式說明
          </Button>
          <div className="flex flex-col md:flex-row gap-2 h-full">
            <div className="border-[#42cafe]  w-full  md:w-1/2 " id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14636.811042970876!2d120.4321935!3d23.4892052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e97e447e8790d%3A0xeefdd10b33b77622!2z5ZiJ576p5biC5b2x6KaW6Z-z5Z-65Zyw!5e0!3m2!1szh-TW!2stw!4v1702987975351!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full aspect-[363/272] "
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 h-full ">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation
                modules={[Navigation, Pagination]}
                centeredSlides={true}
                className="w-full"
                style={{
                  "--swiper-navigation-size": "25px",
                }}
              >
                {imgs.map((item, index) => {
                  return (
                    <SwiperSlide>
                      <img
                        src={process.env.PUBLIC_URL + "/images/" + item.image}
                        alt=""
                        className="w-full"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          <Dialog
            open={openD}
            handler={handleOpenD}
            className="bg-gradient-to-r from-[#152853] to-[#030409]"
            size="md"
          >
            <DialogHeader className="text-white flex gap-2 items-center">
              {" "}
              <FaTrainSubway /> 交通方式說明
            </DialogHeader>
            <DialogBody>
              <Typography variant="h5" color="white" className="my-5">
                高鐵 |
              </Typography>
              <Typography variant="lead" color="white" className="my-5">
                搭乘高鐵免費接駁車，至【自由友愛站】下車，並步行約5分鐘至嘉義市影視音基地
              </Typography>
              <Typography variant="h5" color="white" className="my-5">
                火車 |
              </Typography>
              <Typography variant="lead" color="white" className="my-5">
                嘉義市火車站-前站或嘉義火車站後站(嘉義市轉運中心)下車， <br />
                搭乘公車綠色【中山幹線】至中興友愛路口下車，並步行約10分鐘至影視音基地
              </Typography>
              <Typography variant="h5" color="white" className="my-5">
                公車 |
              </Typography>
              <Typography variant="lead" color="white" className="my-5">
                綠線【中山幹線】至中興友愛路口站下車，並步行約15分鐘至嘉義市影視音基地
              </Typography>
              <Typography variant="lead" color="white" className="my-5">
                菊線【光林我嘉線】至自由友忠路口站下車，並步行約20分鐘至嘉義市影視音基地
              </Typography>
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
          <Dialog
            size="xl"
            open={modalOpen}
            handler={closeModal}
            className="bg-transparent shadow-none"
          >
            <DialogBody className="p-0">
              <img
                src={selectedImage}
                alt="enlarged"
                className="w-full object-contain max-h-[80vh]"
              />
            </DialogBody>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Section01;
