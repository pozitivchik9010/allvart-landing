import { useRef, useState } from "react";
import FlexContainer from "./FlexContainer";

export default function SliderImage() {
  let [current, setCurrent] = useState(0);
  let [isScrolling, setIsScrolling] = useState(false);
  let [disabledBtn, setDisabledBtn] = useState("left");
  const images = [
    { src: "https://picsum.photos/id/1/490/628", text: "Робочі місця" },
    { src: "https://picsum.photos/id/2/490/628", text: "Переговорні кімнати" },
    { src: "https://picsum.photos/id/3/490/628", text: "Дитяча кімната" },
    {
      src: "https://picsum.photos/id/14/490/628",
      text: "Місця для відпочинку",
    },
    { src: "https://picsum.photos/id/5/490/628", text: "Місця для відпочинку" },
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
    <FlexContainer
      id="gallery"
      className="gap-[30px] md:gap-[46px] max-xl:overflow-hidden"
    >
      <div className="flex justify-between ">
        <h2 className="text-[40px]/[50px] font-semibold text-[#020817] inline-block ">
          Галерея
        </h2>
        <div className="md:flex gap-[21px] items-center hidden ">
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

          <div className="flex h-3 gap-[14px] items-center">
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
              key={index}
              className="flex flex-col md:min-w-[489px] w-[240px] items-start"
            >
              <img src={item.src} alt="Photo gallery" />
              <p className="mt-4 text-[#020817] text-base/[20px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-[21px] items-center md:hidden m-5">
          <div className="flex h-3 gap-[14px] items-center">
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
          <div className="flex gap-3 bg-transparent">
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
      </div>
    </FlexContainer>
  );
}
