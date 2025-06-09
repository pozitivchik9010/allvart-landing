import ReactDOM from "react-dom";
import { useEffect } from "react";
import FlexContainer from "./FlexContainer";

export default function ModalWindow({
  state,
  onClose,
  children,
  className = "",
}) {
  useEffect(() => {
    const root = document.getElementById("root");
    if (state) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (root) root.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (root) root.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (root) root.style.overflow = "";
    };
  }, [state]);
  if (!state) return null;

  return ReactDOM.createPortal(
    <div
      className={`fixed flex bg-[#1A1F26]/70 backdrop-blur  shadow-sm h-full w-full inset-0 items-center justify-center  z-[21]  `}
    >
      <FlexContainer
        className={`animate-scale-fade-in bg-white rounded-[20px] max-w-[400px] md:max-w-[1175px] max-h-[760px] py-10 px-3 md:px-22 relative gap-4.5 text-start transition duration-300 ${className}`}
      >
        <button
          className="absolute right-0 -top-0 mt-5  mr-5 transform hover:scale-110 active:scale-130 transition-transform duration-300 cursor-pointer "
          onClick={onClose}
        >
          <img src="/svg/icon-close.svg" alt="Close" />
        </button>
        {children}
      </FlexContainer>
    </div>,
    document.body
  );
}
