import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import { useState, useEffect } from "react";
import FormModal from "./formModal";

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
        <FormModal state={isOpenModal} onClose={() => setIsOpenModal(false)} />
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
        <div className="flex gap-[40px] items-center font-medium">
          <Button className="gap-[10px]  tracking-[0.1em] hover:text-white hover:border-white/20 hover:bg-white/10 active:border-white/20 active:bg-white/5">
            <svg
              className={`w-6 h-6  fill-current max-lg:text-[#142A4C] ${
                isScrolled ? "text-[#142A4C]" : "text-[#DFDFDF]"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1586 11.62C12.1286 11.62 12.1086 11.62 12.0786 11.62C12.0286 11.61 11.9586 11.61 11.8986 11.62C8.99859 11.53 6.80859 9.25 6.80859 6.44C6.80859 3.58 9.13859 1.25 11.9986 1.25C14.8586 1.25 17.1886 3.58 17.1886 6.44C17.1786 9.25 14.9786 11.53 12.1886 11.62C12.1786 11.62 12.1686 11.62 12.1586 11.62ZM11.9986 2.75C9.96859 2.75 8.30859 4.41 8.30859 6.44C8.30859 8.44 9.86859 10.05 11.8586 10.12C11.9086 10.11 12.0486 10.11 12.1786 10.12C14.1386 10.03 15.6786 8.42 15.6886 6.44C15.6886 4.41 14.0286 2.75 11.9986 2.75Z"
                fill="currentColor"
              />
              <path
                d="M12.1716 22.55C10.2116 22.55 8.24156 22.05 6.75156 21.05C5.36156 20.13 4.60156 18.87 4.60156 17.5C4.60156 16.13 5.36156 14.86 6.75156 13.93C9.75156 11.94 14.6116 11.94 17.5916 13.93C18.9716 14.85 19.7416 16.11 19.7416 17.48C19.7416 18.85 18.9816 20.12 17.5916 21.05C16.0916 22.05 14.1316 22.55 12.1716 22.55ZM7.58156 15.19C6.62156 15.83 6.10156 16.65 6.10156 17.51C6.10156 18.36 6.63156 19.18 7.58156 19.81C10.0716 21.48 14.2716 21.48 16.7616 19.81C17.7216 19.17 18.2416 18.35 18.2416 17.49C18.2416 16.64 17.7116 15.82 16.7616 15.19C14.2716 13.53 10.0716 13.53 7.58156 15.19Z"
                fill="currentColor"
              />
            </svg>

            <p
              className={`max-lg:hidden ${
                isScrolled ? "  text-[#142A4C]" : "text-[#DFDFDF]"
              }`}
            >
              Вхід
            </p>
          </Button>
          <Button
            variant="primary"
            className="max-lg:hidden "
            onClick={() => setIsOpenModal(true)}
          >
            <span>Відправити заявку</span>
          </Button>
        </div>
      </div>

      {/* Мобільне меню з анімацією */}
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
        <Button
          variant="primary"
          onClick={() => {
            setIsOpen(false), setIsOpenModal(true);
          }}
        >
          <span>Відправити заявку</span>
        </Button>
      </div>
    </header>
  );
}
