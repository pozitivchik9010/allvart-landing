import { useEffect, useRef, useState } from "react";
import FlexContainer from "./FlexContainer";
import ModalWindow from "./ModalWindow";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useSwiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

export default function SliderImage() {
  const handleSlider = (side) => {
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 300);
    const itemWidth = 250;

    if (side === "left" && current > 0) {
      setCurrent((prev) => {
        containerRef.current.scrollBy({
          left: -itemWidth,
          top: 0,
          behavior: "smooth",
        });
        let newCurrent = prev - 1;
        if (newCurrent <= 0) {
          setDisabledBtn("left");
        } else setDisabledBtn(false);
        return newCurrent;
      });
    }
    if (side === "right" && current < lengthImages) {
      setCurrent((prev) => {
        containerRef.current.scrollBy({
          left: itemWidth,
          top: 0,
          behavior: "smooth",
        });
        let newCurrent = prev + 1;
        if (newCurrent >= lengthImages) {
          setDisabledBtn("right");
        } else setDisabledBtn(false);
        return newCurrent;
      });
    }
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // одразу визначити
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const thumbRefs = useRef([]);
  const [current, setCurrent] = useState(0);
  const images = [
    { src: "https://picsum.photos/id/1/490", text: "Робочі місця" },
    { src: "https://picsum.photos/id/2/490", text: "Переговорні кімнати" },
    { src: "https://picsum.photos/id/3/490/1090", text: "Дитяча кімната" },
    {
      src: "https://picsum.photos/id/14/490",
      text: "Місця для відпочинку",
    },
    { src: "/img/img-4.png", text: "Місця для відпочинку" },
    { src: "https://picsum.photos/id/1/490", text: "Робочі місця" },
    { src: "https://picsum.photos/id/2/490", text: "Переговорні кімнати" },
    { src: "https://picsum.photos/id/3/490/1090", text: "Дитяча кімната" },
  ];
  const lengthImages = Number(images.length) - 1;
  const containerRef = useRef(null);
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    if (thumbRefs.current[current]) {
      thumbRefs.current[current].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [current]);

  return (
    <FlexContainer id="gallery" className="gap-[30px] md:gap-[46px] ">
      <div className="flex justify-between ">
        <h2 className="text-[40px]/[50px] font-semibold text-[#020817] inline-block ">
          Галерея
        </h2>{" "}
        {!isMobile && (
          <div className="flex items-center gap-4">
            <div className="md:flex gap-[20px] items-center hidden flex-shrink-0">
              <button
                className={`${
                  isBeginning
                    ? "cursor-no-drop"
                    : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer"
                }`}
                onClick={() => desktopSwiperRef.current?.slidePrev()}
              >
                <img
                  className="rotate-180"
                  src={
                    isBeginning
                      ? "/svg/icon-slider-arrow-disabled.svg"
                      : "/svg/icon-slider-arrow.svg"
                  }
                  alt="Гортати вліво"
                />
              </button>
              <button
                className={` ${
                  isEnd
                    ? "cursor-no-drop"
                    : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer"
                }`}
                onClick={() => desktopSwiperRef.current?.slideNext()}
              >
                <img
                  src={
                    isEnd
                      ? "/svg/icon-slider-arrow-disabled.svg"
                      : "/svg/icon-slider-arrow.svg"
                  }
                  alt="Гортати вправо"
                />
              </button>
            </div>
            <div className="hidden  md:flex swiper-pagination-desktop gap-2 ml-4" />
          </div>
        )}
      </div>
      {!isMobile && (
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1.4, spaceBetween: 10 },
            768: { slidesPerView: 2.2, spaceBetween: 35 },
            1100: { slidesPerView: 3.2, spaceBetween: 35 },
          }}
          followFinger={true}
          modules={[Pagination]}
          className="max-w-full md:block hidden"
          onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex),
              setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          pagination={{
            el: ".swiper-pagination-desktop",
            clickable: true,
            bulletClass: "dot",
            bulletActiveClass: "dot-active",
            renderBullet: function (index, className) {
              return `<span class="${className}"></span>`;
            },
            dynamicBullets: false,
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={item.text}>
              <div className="cursor-pointer overflow-hidden flex flex-col items-start">
                <div className="h-[290px] md:h-[593px] w-full overflow-hidden">
                  <img
                    onClick={() => {
                      setIsOpen(true);
                      setCurrent(index);
                    }}
                    src={item.src}
                    alt="Photo gallery"
                    className="h-full w-full object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>
                <p className="mt-4 text-[#020817] text-base/[20px]">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {isMobile && (
        <>
          <Swiper
            breakpoints={{
              340: { slidesPerView: 1.4, spaceBetween: 10 },
              768: { slidesPerView: 3.2, spaceBetween: 35 },
            }}
            followFinger={true}
            modules={[Pagination]}
            className="max-w-full block md:hidden"
            onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex),
                setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            pagination={{
              el: ".swiper-pagination-mobile",
              clickable: true,
              bulletClass: "dot",
              bulletActiveClass: "dot-active",
              renderBullet: function (index, className) {
                return `<span class="${className}"></span>`;
              },
              dynamicBullets: false,
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={item.text}>
                <div className="cursor-pointer overflow-hidden flex flex-col items-start">
                  <div className="h-[290px] md:h-[593px] w-full overflow-hidden">
                    <img
                      onClick={() => {
                        setIsOpen(true);
                        setCurrent(index);
                      }}
                      src={item.src}
                      alt="Photo gallery"
                      className="h-full w-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <p className="mt-4 text-[#020817] text-base/[20px]">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="md:hidden flex flex-col items-center justify-center ">
            <div className="flex flex-col gap-[20px] items-center md:hidden ">
              <div className="flex md:hidden swiper-pagination-mobile  gap-2 ml-4" />

              <div className="flex gap-[20px] w-full justify-between items-center md:hidden flex-shrink-0">
                <button
                  className={`${
                    isBeginning
                      ? "cursor-no-drop"
                      : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer"
                  }`}
                  onClick={() => mobileSwiperRef.current?.slidePrev()}
                >
                  <img
                    className="rotate-180"
                    src={
                      isBeginning
                        ? "/svg/icon-slider-arrow-disabled.svg"
                        : "/svg/icon-slider-arrow.svg"
                    }
                    alt="Гортати вліво"
                  />
                </button>
                <button
                  className={` ${
                    isEnd
                      ? "cursor-no-drop"
                      : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer"
                  }`}
                  onClick={() => mobileSwiperRef.current?.slideNext()}
                >
                  <img
                    src={
                      isEnd
                        ? "/svg/icon-slider-arrow-disabled.svg"
                        : "/svg/icon-slider-arrow.svg"
                    }
                    alt="Гортати вправо"
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      )}{" "}
      <Button
        href="#invitation-2"
        className="w-10 h-10 mt-9 mb-10 md:mt-[38px] md:mb-[60px] mx-auto"
      >
        <span className="border-[#2445CE] flex border rounded-full w-[10px] h-[19px] justify-center items-end">
          <span className=" mb-[4px] mt-[-30px] inline-block w-[2px] h-[2px] bg-[#2445CE] rounded-full"></span>
        </span>
      </Button>
      {isOpen && (
        <ModalWindow
          state={isOpen}
          onClose={() => setIsOpen(false)}
          className={
            " max-md:h-full max-w-[1175px] max-h-[1125px] w-full h-[90%] md:px-22 md:py-10"
          }
        >
          <FlexContainer className=" flex flex-col max-md:gap-4  items-center h-full justify-between ">
            <div className="flex flex-col w-full h-full max-md:justify-between">
              <div className="flex w-full items-center h-full md:h-auto  md:max-h-[55vh]">
                <img
                  src={images[current].src}
                  alt="Photo gallery"
                  className="h-auto w-full object-contain max-h-[50vh] md:max-h-[55vh]"
                />
              </div>
              <div className="flex  bg-white w-full h-[75px] md:h-[150px] scroll-smooth overflow-x-auto justify-start select-none overflow-hidden scrollbar-hide">
                {images.map((img, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[75px] md:w-[150px] h-full shrink-0"
                      ref={(el) => (thumbRefs.current[index] = el)}
                    >
                      <img
                        onClick={() => setCurrent(index)}
                        src={img.src}
                        className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ease-in-out ${
                          index === current ? "opacity-100" : "opacity-40"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex max-md:flex-col justify-between items-center align-items  w-full">
              <p className="text-[#020817] text-base/[20px]">
                {images[current].text}
              </p>
              <div className="flex bottom-0 w-full max-w-[200px] p-[12px] justify-center rounded-t-[30px] align-items-center text-xl font-medium gap-[24px] ">
                <button
                  onClick={() => setCurrent(current - 1)}
                  type="button"
                  disabled={current < 1}
                  className="cursor-pointer rotate-180 disabled:opacity-30 disabled:cursor-no-drop"
                >
                  <img src="/svg/next-arrow.svg" />
                </button>
                <p className="text-[#798395] w-50px">
                  <span className="text-[#142A4C]">{current + 1}</span>
                  <span className="text-[#CDD5E2] mx-1">/</span>
                  {images.length}
                </p>
                <button
                  type="button"
                  disabled={current + 1 === images.length}
                  onClick={() => setCurrent(current + 1)}
                  className="cursor-pointer disabled:opacity-30 disabled:cursor-no-drop"
                >
                  <img src="/svg/next-arrow.svg" />
                </button>
              </div>
            </div>
          </FlexContainer>
        </ModalWindow>
      )}
    </FlexContainer>
  );
}
// const Slider = ({ images }) => {
//   const swiperRef = useRef(null);

//   return (

//   );
// };
// const SlideNextButton = () => {
//   const swiper = useSwiper();
//   return (
//     <div className="md:flex gap-[20px] items-center hidden ">
//       <button
//         className="transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer"
//         onClick={() => swiper.slidePrev()}
//       >
//         <img
//           className="rotate-180"
//           src={"/svg/icon-slider-arrow.svg"}
//           alt="Гортати вліво"
//         />
//       </button>
//       <button
//         className={`   transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer  `}
//         onClick={() => swiper.slideNext()}
//       >
//         <img src={"/svg/icon-slider-arrow.svg"} alt="Гортати вправо" />
//       </button>
//     </div>
//   );
// };

// import { useEffect, useRef, useState } from "react";
// import FlexContainer from "./FlexContainer";
// import ModalWindow from "./ModalWindow";
// import Button from "./Button";

// export default function SliderImage() {
//   const [isOpen, setIsOpen] = useState(false);
//   const thumbRefs = useRef([]);
//   const [current, setCurrent] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [disabledBtn, setDisabledBtn] = useState("left");
//   const images = [
//     { src: "https://picsum.photos/id/1/490", text: "Робочі місця" },
//     { src: "https://picsum.photos/id/2/490", text: "Переговорні кімнати" },
//     { src: "https://picsum.photos/id/3/490/1090", text: "Дитяча кімната" },
//     {
//       src: "https://picsum.photos/id/14/490",
//       text: "Місця для відпочинку",
//     },
//     { src: "/img/img-4.png", text: "Місця для відпочинку" },
//     { src: "https://picsum.photos/id/1/490", text: "Робочі місця" },
//     { src: "https://picsum.photos/id/2/490", text: "Переговорні кімнати" },
//     { src: "https://picsum.photos/id/3/490/1090", text: "Дитяча кімната" },
//   ];
//   const lengthImages = Number(images.length) - 1;
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (thumbRefs.current[current]) {
//       thumbRefs.current[current].scrollIntoView({
//         behavior: "smooth",
//         inline: "center",
//         block: "nearest",
//       });
//     }
//   }, [current]);

//   const handleSlider = (side) => {
//     if (isScrolling) return;

//     setIsScrolling(true);
//     setTimeout(() => setIsScrolling(false), 300);
//     const itemWidth = 250;

//     if (side === "left" && current > 0) {
//       setCurrent((prev) => {
//         containerRef.current.scrollBy({
//           left: -itemWidth,
//           top: 0,
//           behavior: "smooth",
//         });
//         let newCurrent = prev - 1;
//         if (newCurrent <= 0) {
//           setDisabledBtn("left");
//         } else setDisabledBtn(false);
//         return newCurrent;
//       });
//     }
//     if (side === "right" && current < lengthImages) {
//       setCurrent((prev) => {
//         containerRef.current.scrollBy({
//           left: itemWidth,
//           top: 0,
//           behavior: "smooth",
//         });
//         let newCurrent = prev + 1;
//         if (newCurrent >= lengthImages) {
//           setDisabledBtn("right");
//         } else setDisabledBtn(false);
//         return newCurrent;
//       });
//     }
//   };
//   return (
//     <FlexContainer id="gallery" className="gap-[30px] md:gap-[46px] ">
//       <div className="flex justify-between ">
//         <h2 className="text-[40px]/[50px] font-semibold text-[#020817] inline-block ">
//           Галерея
//         </h2>
//         <div className="md:flex gap-[20px] items-center hidden ">
//           <button
//             className={`${
//               disabledBtn === "left"
//                 ? "cursor-no-drop"
//                 : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer "
//             }`}
//             disabled={disabledBtn === "left"}
//             onClick={() => handleSlider("left")}
//           >
//             <img
//               className="rotate-180"
//               src={`${
//                 disabledBtn === "left"
//                   ? "/svg/icon-slider-arrow-disabled.svg"
//                   : "/svg/icon-slider-arrow.svg"
//               }`}
//               alt="Гортати вліво"
//             />
//           </button>
//           <button
//             className={`${
//               disabledBtn === "right"
//                 ? "cursor-no-drop"
//                 : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer "
//             }`}
//             disabled={disabledBtn === "right"}
//             onClick={() => handleSlider("right")}
//           >
//             <img
//               className=""
//               src={`${
//                 disabledBtn === "right"
//                   ? "/svg/icon-slider-arrow-disabled.svg"
//                   : "/svg/icon-slider-arrow.svg"
//               }`}
//               alt="Гортати вправо"
//             />
//           </button>

//           <div className="flex h-3 gap-[14px] items-center ">
//             {images.map((img, index) => (
//               <span
//                 key={img.src}
//                 className={`rounded-full ${
//                   current === index
//                     ? "bg-[#2445CE] h-2 w-2"
//                     : "bg-[#CFDADF] h-1 w-1"
//                 }`}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div
//         ref={containerRef}
//         className="relative overflow-x-auto scrollbar-hide mx-[-192px]"
//       >
//         <div className="flex mx-[192px] gap-[10px] md:gap-[35px] w-max">
//           {images.map((item, index) => (
//             <div
//               onClick={() => {
//                 setIsOpen(true);
//                 setCurrent(index);
//               }}
//               key={index}
//               className="cursor-pointer overflow-hidden flex flex-col lg:min-w-[489px] w-[240px] items-start"
//             >
//               <div className=" w-full h-[325px] lg:h-[593px] overflow-hidden">
//                 <img
//                   src={item.src}
//                   alt="Photo gallery"
//                   className="h-full w-full object-cover transform hover:scale-105 transition duration-300"
//                 />
//               </div>
//               <p className="mt-4 text-[#020817] text-base/[20px]">
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center ">
//         <div className="flex flex-col gap-[20px] items-center md:hidden ">
//           <div className="flex h-3 gap-[14px] items-center px-[47px]">
//             {images.map((img, index) => (
//               <span
//                 key={img.src}
//                 className={`rounded-full ${
//                   current === index
//                     ? "bg-[#2445CE] h-2 w-2"
//                     : "bg-[#CFDADF] h-1 w-1"
//                 }`}
//               ></span>
//             ))}
//           </div>
//           <div className="flex gap-3 bg-transparent justify-between w-full">
//             <button
//               className={` select-none${
//                 disabledBtn === "left"
//                   ? "cursor-no-drop"
//                   : "transform hover:scale-110 active:scale-130 transition-transform duration-300 cursor-pointer "
//               }`}
//               disabled={disabledBtn === "left"}
//               onClick={() => handleSlider("left")}
//             >
//               <img
//                 className="rotate-180"
//                 src={`${
//                   disabledBtn === "left"
//                     ? "/svg/icon-slider-arrow-disabled.svg"
//                     : "/svg/icon-slider-arrow.svg"
//                 }`}
//                 alt="Гортати вліво"
//               />
//             </button>
//             <button
//               className={`${
//                 disabledBtn === "right"
//                   ? "cursor-no-drop"
//                   : "transform hover:scale-110 active:scale-130 transition-transform duration-300 cursor-pointer "
//               } bg-white`}
//               disabled={disabledBtn === "right"}
//               onClick={() => handleSlider("right")}
//             >
//               <img
//                 className=""
//                 src={`${
//                   disabledBtn === "right"
//                     ? "/svg/icon-slider-arrow-disabled.svg"
//                     : "/svg/icon-slider-arrow.svg"
//                 }`}
//                 alt="Гортати вправо"
//               />
//             </button>
//           </div>
//         </div>

//         <Button
//           href="#invitation-2"
//           className="w-10 h-10 mt-9 mb-10 md:mt-[38px] md:mb-[60px]"
//         >
//           <span className="border-[#2445CE] flex border rounded-full w-[10px] h-[19px] justify-center items-end">
//             <span className=" mb-[4px] mt-[-30px] inline-block w-[2px] h-[2px] bg-[#2445CE] rounded-full"></span>
//           </span>
//         </Button>
//       </div>

//       {isOpen && (
//         <ModalWindow
//           state={isOpen}
//           onClose={() => setIsOpen(false)}
//           className={
//             " max-md:h-full max-w-[1175px] max-h-[1125px] w-full h-[90%] md:px-22 md:py-10"
//           }
//         >
//           <FlexContainer className=" flex flex-col max-md:gap-4  items-center h-full justify-between ">
//             <div className="flex flex-col w-full h-full max-md:justify-between">
//               <div className="flex w-full items-center h-full md:h-auto  md:max-h-[55vh]">
//                 <img
//                   src={images[current].src}
//                   alt="Photo gallery"
//                   className="h-auto w-full object-contain max-h-[50vh] md:max-h-[55vh]"
//                 />
//               </div>
//               <div className="flex  bg-white w-full h-[75px] md:h-[150px] scroll-smooth overflow-x-auto justify-start select-none overflow-hidden scrollbar-hide">
//                 {images.map((img, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="w-[75px] md:w-[150px] h-full shrink-0"
//                       ref={(el) => (thumbRefs.current[index] = el)}
//                     >
//                       <img
//                         onClick={() => setCurrent(index)}
//                         src={img.src}
//                         className={`w-full h-full object-cover cursor-pointer transition-opacity duration-500 ease-in-out ${
//                           index === current ? "opacity-100" : "opacity-40"
//                         }`}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="flex max-md:flex-col justify-between items-center align-items  w-full">
//               <p className="text-[#020817] text-base/[20px]">
//                 {images[current].text}
//               </p>
//               <div className="flex bottom-0 w-full max-w-[200px] p-[12px] justify-center rounded-t-[30px] align-items-center text-xl font-medium gap-[24px] ">
//                 <button
//                   type="button"
//                   disabled={current < 1}
//                   className="cursor-pointer rotate-180 disabled:opacity-30 disabled:cursor-no-drop"
//                 >
//                   <img
//                     onClick={() => handleSlider("left")}
//                     src="/svg/next-arrow.svg"
//                   />
//                 </button>
//                 <p className="text-[#798395] w-50px">
//                   <span className="text-[#142A4C]">{current + 1}</span>
//                   <span className="text-[#CDD5E2] mx-1">/</span>
//                   {images.length}
//                 </p>
//                 <button
//                   type="button"
//                   disabled={current + 1 === images.length}
//                   onClick={() => handleSlider("right")}
//                   className="cursor-pointer disabled:opacity-30 disabled:cursor-no-drop"
//                 >
//                   <img src="/svg/next-arrow.svg" />
//                 </button>
//               </div>
//             </div>
//           </FlexContainer>
//         </ModalWindow>
//       )}
//     </FlexContainer>
//   );
// }
