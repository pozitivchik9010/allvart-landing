import { useEffect, useState } from "react";
import Button from "./Button";
import TextDescription from "./TextDescription";
import ModalManager from "./ModalManager";
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const setCookie = (name, value, days = 365) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export default function Cookie() {
  const [showCookie, setShowCookie] = useState(false);
  useEffect(() => {
    const accepted = getCookie("cookieAccepted");
    setShowCookie(accepted !== "true");
  }, []);

  const handleAccept = () => {
    setCookie("cookieAccepted", "true", 365);
    setShowCookie(false);
  };
  if (!showCookie) return null;
  return (
    <>
      <div className="fixed z-[19] bottom-2 w-[95%]  left-1/2 -translate-x-1/2 flex  gap-[30px] rounded-md bg-white px-2 md:px-10 py-2 md:py-4.5 md:text-start  max-w-[1274px] shadow-[0px_8px_8px_-4px_#0A0D120A,0px_20px_24px_-4px_#0A0D121A]">
        <img
          className="max-sm:hidden "
          src="/svg/icon-cookie.svg"
          alt="Icon Cookie"
        />
        <div className="flex max-md:flex-col gap-2.5 justify-between w-full max-w-[1120px] items-center">
          <TextDescription className={"max-[500px]:text-xs"}>
            Використання нашого сайту означає вашу згоду на отримання та
            відправку файлів Cookie
            <br />
            <ModalManager
              onAccept={handleAccept}
              variant={"cookie"}
              className="text-[#2445CE] underline underline-offset-3 cursor-pointer"
            >
              Політика використання кукі файлів
            </ModalManager>
          </TextDescription>
          <Button
            variant={"primary"}
            className=" w-full  sm:max-w-[148px] "
            onClick={handleAccept}
          >
            Прийняти
          </Button>
        </div>
      </div>
    </>
  );
}
