import Logo from "./Logo";
import Nav from "./Nav";
import Button from "./Button";
import { useState } from "react";
import ModalWindow from "./ModalWindow";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <header className="flex max-sm:bg-white flex-row items-center justify-between w-full max-w-[1538px] mx-auto text-[#DFDFDF] h-min px-4 py-3 pt-0 relative z-20">
        <ModalWindow
          state={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
        <button
          className="sm:hidden w-10 h-10 flex flex-col justify-center items-center gap-1 relative z-30"
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

        <Logo />
        <Nav
          className="max-xl:hidden flex-row  gap-[70px] sm:text-white"
          onClick={() => setIsOpen(false)}
        />
        <div className="flex gap-[40px] items-center font-medium">
          <Button className="gap-[10px]  tracking-[0.1em] hover:text-white hover:border-white/20 hover:bg-white/10 active:border-white/20 active:bg-white/5">
            <img src="/svg/item-login.svg" />
            <p className="max-sm:hidden">Вхід</p>
          </Button>
          <Button
            variant="primary"
            className="max-sm:hidden "
            onClick={() => setIsOpenModal(true)}
          >
            <span>Відправити заявку</span>
          </Button>
        </div>
      </header>

      {/* Мобільне меню з анімацією */}
      <div
        className={`
          sm:hidden 
          transform 
          transition-all 
          duration-300 
          ease-in-out 
          overflow-hidden 
          bg-white 
          w-full 
          py-6 
		  top-18.5
          z-10 
          flex 
          flex-col 
          items-center 
          gap-80 
		  h-screen
		  absolute
          ${
            isOpen
              ? "max-w-full  opacity-100 translate-x-0"
              : "max-w-0 opacity-0 -translate-x-4"
          }
        `}
      >
        <Nav
          className="flex-col gap-[20px] md:gap-[40px] sm:text-white"
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
    </>
  );
}
