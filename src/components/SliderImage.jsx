import { useRef, useState } from "react";
import FlexContainer from "./FlexContainer";
import ModalWindow from "./ModalWindow";
import FormModal from "./formModal";

export default function SliderImage() {
  const [isOpen, setIsOpen] = useState(false);

  let [current, setCurrent] = useState(0);
  let [isScrolling, setIsScrolling] = useState(false);
  let [disabledBtn, setDisabledBtn] = useState("left");
  const images = [
    { src: "https://picsum.photos/id/1/490", text: "Робочі місця" },
    { src: "https://picsum.photos/id/2/490", text: "Переговорні кімнати" },
    { src: "https://picsum.photos/id/3/490", text: "Дитяча кімната" },
    {
      src: "https://picsum.photos/id/14/490",
      text: "Місця для відпочинку",
    },
    { src: "https://picsum.photos/id/5/490", text: "Місця для відпочинку" },
  ];
  const lengthImages = Number(images.length) - 1;
  const containerRef = useRef(null);

  const handleSlider = (side) => {
    if (isScrolling) return;

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 300);
    const itemWidth = 300;

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
  return (
    <FlexContainer id="gallery" className="gap-[30px] md:gap-[46px] ">
      <div className="flex justify-between ">
        <h2 className="text-[40px]/[50px] font-semibold text-[#020817] inline-block ">
          Галерея
        </h2>
        <div className="md:flex gap-[20px] items-center hidden ">
          <button
            className={`${
              disabledBtn === "left"
                ? "cursor-no-drop"
                : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer "
            }`}
            disabled={disabledBtn === "left"}
            onClick={() => handleSlider("left")}
          >
            <img
              className="rotate-180"
              src={`${
                disabledBtn === "left"
                  ? "/svg/icon-slider-arrow-disabled.svg"
                  : "/svg/icon-slider-arrow.svg"
              }`}
              alt="Гортати вліво"
            />
          </button>
          <button
            className={`${
              disabledBtn === "right"
                ? "cursor-no-drop"
                : "transform hover:scale-105 active:scale-120 transition-transform duration-300 cursor-pointer "
            }`}
            disabled={disabledBtn === "right"}
            onClick={() => handleSlider("right")}
          >
            <img
              className=""
              src={`${
                disabledBtn === "right"
                  ? "/svg/icon-slider-arrow-disabled.svg"
                  : "/svg/icon-slider-arrow.svg"
              }`}
              alt="Гортати вправо"
            />
          </button>

          <div className="flex h-3 gap-[14px] items-center ">
            {images.map((img, index) => (
              <span
                key={img.src}
                className={`rounded-full ${
                  current === index
                    ? "bg-[#2445CE] h-2 w-2"
                    : "bg-[#CFDADF] h-1 w-1"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative overflow-x-auto scrollbar-hide mx-[-192px]"
      >
        <div className="flex mx-[192px] gap-[10px] md:gap-[35px] w-max">
          {images.map((item, index) => (
            <div
              onClick={() => {
                setIsOpen(true);
                setCurrent(index);
              }}
              key={index}
              className="cursor-pointer overflow-hidden flex flex-col md:min-w-[489px] w-[240px] items-start"
            >
              <div className=" w-full overflow-hidden">
                <img
                  src={item.src}
                  alt="Photo gallery"
                  className="h-full w-full object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
              <p className="mt-4 text-[#020817] text-base/[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[20px] items-center md:hidden ">
          <div className="flex h-3 gap-[14px] items-center px-[47px]">
            {images.map((img, index) => (
              <span
                key={img.src}
                className={`rounded-full ${
                  current === index
                    ? "bg-[#2445CE] h-2 w-2"
                    : "bg-[#CFDADF] h-1 w-1"
                }`}
              ></span>
            ))}
          </div>
          <div className="flex gap-3 bg-transparent justify-between w-full">
            <button
              className={`${
                disabledBtn === "left"
                  ? "cursor-no-drop"
                  : "transform hover:scale-110 active:scale-130 transition-transform duration-300 cursor-pointer "
              }`}
              disabled={disabledBtn === "left"}
              onClick={() => handleSlider("left")}
            >
              <img
                className="rotate-180"
                src={`${
                  disabledBtn === "left"
                    ? "/svg/icon-slider-arrow-disabled.svg"
                    : "/svg/icon-slider-arrow.svg"
                }`}
                alt="Гортати вліво"
              />
            </button>
            <button
              className={`${
                disabledBtn === "right"
                  ? "cursor-no-drop"
                  : "transform hover:scale-110 active:scale-130 transition-transform duration-300 cursor-pointer "
              } bg-white`}
              disabled={disabledBtn === "right"}
              onClick={() => handleSlider("right")}
            >
              <img
                className=""
                src={`${
                  disabledBtn === "right"
                    ? "/svg/icon-slider-arrow-disabled.svg"
                    : "/svg/icon-slider-arrow.svg"
                }`}
                alt="Гортати вправо"
              />
            </button>
          </div>
        </div>
        <span className="border-[#2445CE] flex border rounded-full w-[10px]  mt-9 mb-[40px] md:mt-[84px] md:mb-[60px] h-[20px] justify-center items-end">
          <span className=" mb-[4px] mt-[-30px] inline-block w-[2px] h-[2px] bg-[#2445CE] rounded-full"></span>
        </span>
      </div>

      {isOpen && (
        <ModalWindow
          state={isOpen}
          onClose={() => setIsOpen(false)}
          className={
            " max-md:w-[630px] max-md:h-full max-w-[1175px] max-h-[1125px] w-full h-[90%]"
          }
        >
          <FlexContainer className=" flex flex-col gap-4 md:items-start items-center h-full justify-between ">
            <div className=" w-full max-md:max-w-100 md:max-h-[70vh] mt-4">
              <img
                src={images[current].src}
                alt="Photo gallery"
                className="h-full w-full"
              />
            </div>
            <div className="flex max-md:flex-col justify-between items-center align-items  w-full">
              <p className="text-[#020817] text-base/[20px]">
                {images[current].text}
              </p>
              <div className="flex bottom-0 w-full max-w-[200px] p-[12px] justify-center rounded-t-[30px] align-items-center text-xl font-medium gap-[24px] ">
                <button
                  type="button"
                  disabled={current < 1}
                  className="cursor-pointer rotate-180 disabled:opacity-30 disabled:cursor-no-drop"
                >
                  <img
                    onClick={() => handleSlider("left")}
                    src="/svg/next-arrow.svg"
                  />
                </button>
                <p className="text-[#798395] w-50px">
                  <span className="text-[#142A4C]">{current + 1}</span>
                  <span className="text-[#CDD5E2] mx-1">/</span>
                  {images.length}
                </p>
                <button
                  type="button"
                  disabled={current + 1 === images.length}
                  onClick={() => handleSlider("right")}
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
