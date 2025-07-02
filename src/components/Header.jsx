import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import { useState, useEffect } from "react";
import FormModal from "./formModal";
import ModalManager from "./ModalManager";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 max-w-[1920px] mx-auto ${
        isScrolled ? "bg-white  text-[#142A4C]" : "bg-transparent"
      }`}
    >
      <div
        className={`flex max-lg:bg-white flex-row items-center justify-between w-full max-w-[1538px] mx-auto text-[#DFDFDF] h-min px-4   `}
      >
        <button
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1 relative z-20"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
        <a href="./#">
          <Logo />
        </a>
        <Nav
          colorText={isScrolled ? "text-[#142A4C]" : "text-[#DFDFDF]"}
          className="max-lg:hidden flex-row  gap-[30px] xl:gap-[70px] lg:text-white"
          onClick={() => setIsOpen(false)}
        />
        <div className="flex md:gap-[40px] items-center font-medium max-md:w-10 max-md:h-10">
          <Button
            className={`gap-[10px] lg:px-5 lg:100% max-lg:w-10 tracking-[0.1em]  hover:border-white/20  active:border-white/20  max-md:w-full ${
              isScrolled
                ? "  text-[#142A4C] hover:bg-[#DFDFDF] active:bg-[#DFDFDF]/60 "
                : "text-[#DFDFDF] hover:bg-white/10 hover:text-white active:bg-white/5"
            }`}
          >
            <svg
              className={`fill-current max-lg:text-[#142A4C] `}
              width="16"
              height="22"
              viewBox="0 0 16 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.65859 10.62C7.62859 10.62 7.60859 10.62 7.57859 10.62C7.52859 10.61 7.45859 10.61 7.39859 10.62C4.49859 10.53 2.30859 8.25 2.30859 5.44C2.30859 2.58 4.63859 0.25 7.49859 0.25C10.3586 0.25 12.6886 2.58 12.6886 5.44C12.6786 8.25 10.4786 10.53 7.68859 10.62C7.67859 10.62 7.66859 10.62 7.65859 10.62ZM7.49859 1.75C5.46859 1.75 3.80859 3.41 3.80859 5.44C3.80859 7.44 5.36859 9.05 7.35859 9.12C7.40859 9.11 7.54859 9.11 7.67859 9.12C9.63859 9.03 11.1786 7.42 11.1886 5.44C11.1886 3.41 9.52859 1.75 7.49859 1.75Z"
                fill="currentColor"
              />
              <path
                d="M7.67156 21.55C5.71156 21.55 3.74156 21.05 2.25156 20.05C0.861563 19.13 0.101562 17.87 0.101562 16.5C0.101562 15.13 0.861563 13.86 2.25156 12.93C5.25156 10.94 10.1116 10.94 13.0916 12.93C14.4716 13.85 15.2416 15.11 15.2416 16.48C15.2416 17.85 14.4816 19.12 13.0916 20.05C11.5916 21.05 9.63156 21.55 7.67156 21.55ZM3.08156 14.19C2.12156 14.83 1.60156 15.65 1.60156 16.51C1.60156 17.36 2.13156 18.18 3.08156 18.81C5.57156 20.48 9.77156 20.48 12.2616 18.81C13.2216 18.17 13.7416 17.35 13.7416 16.49C13.7416 15.64 13.2116 14.82 12.2616 14.19C9.77156 12.53 5.57156 12.53 3.08156 14.19Z"
                fill="currentColor"
              />
            </svg>

            <p className={`max-lg:hidden `}>Вхід</p>
          </Button>

          <ModalManager variant={"formModal"}>
            <Button variant="primary" className="max-lg:hidden ">
              <span>Відправити заявку</span>
            </Button>
          </ModalManager>
        </div>
      </div>

      <div
        className={`
          lg:hidden 
          transform 
          transition-all 
          duration-300 
          ease-in-out 
          overflow-hidden 
          bg-[#F6F8FF] 
          w-full 
          py-10
		  z-10 
          flex 
          flex-col 
          items-center 
          justify-between
		  h-full
		  pb-25
		  fixed
          ${
            isOpen
              ? "max-w-full  opacity-100 translate-x-0"
              : "max-w-0 opacity-0 -translate-x-4"
          }
        `}
      >
        <Nav
          colorText="text-[#142A4C] font-semibold text-lg/6 tracking-widest"
          className="flex-col gap-[40px]"
          onClick={() => setIsOpen(false)}
        />
        <ModalManager variant={"formModal"}>
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span>Відправити заявку</span>
          </Button>
        </ModalManager>
      </div>
    </header>
  );
}
