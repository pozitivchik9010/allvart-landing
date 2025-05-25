import Button from "./Button";
import TextDescription from "./TextDescription";

export default function Cookie() {
  return (
    <div className="fixed flex w-full gap-[30px] bg-white mx-auto px-10 py-[18px] text-start z-999">
      <img src="/svg/icon-cookie.svg" alt="Icon Cookie" />
      <div className="flex justify-between w-full max-w-[1120px] ">
        <TextDescription>
          Використання нашого сайту означає вашу згоду на отримання та відправку
          файлів Cookie
          <br />
          <a
            className="text-[#2445CE] underline underline-offset-3"
            href="#policy-cookie"
          >
            Політика використання кукі файлів
          </a>
        </TextDescription>
        <Button variant={"primary"}>Прийняти</Button>
      </div>
    </div>
  );
}
