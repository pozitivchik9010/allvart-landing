import Field from "./Field";
import TextDescription from "./TextDescription";
import Button from "./Button";
import FlexContainer from "./FlexContainer";
import { use, useEffect, useState } from "react";

export default function ModalWindow({ state, onClose }) {
  if (!state) return null;
  return (
    <div
      className={`fixed flex  inset-0 z-50 items-center justify-center bg-[#1A1F26]/70 backdrop-blur`}
    >
      <FlexContainer className=" bg-white rounded-[20px] w-full max-w-[400px] md:max-w-[800px] py-10 px-3 md:px-30 relative gap-4.5">
        <div className="relative">
          <button
            className="bg-black absolute right-10 -top-2"
            onClick={onClose}
          >
            X
          </button>
          <h2 className="text-[22px]/[34px] text-[#142A4C]">
            Приєднатися до ALLVART
          </h2>
          <div className="text-start">
            <TextDescription>
              Просто залиште свої дані і ми зв'яжемося з вами якомога швидше
            </TextDescription>
            <form className="grid max-md:max-w-[500px] grid-cols-1 gap-[18px] md:gap-[35px] items-center w-full">
              <Field
                className="w-full  placeholder-[#798395] text-[#798395]"
                placeholder="Введіть ваше ім’я *"
              />
              <Field
                className="w-full placeholder-[#798395] text-[#798395]"
                placeholder="Номер мобільного *"
              />
              <Button className="text-[#798395]" variant={"primary"}>
                Відправити
              </Button>
              <TextDescription className={" text-sm/[22px] leading-[24px]"}>
                Натискаючи на кнопку “Відправити” я даю згоду на обробку
                персональних даних і приймаю
                <a href="#" className="underline underline-offset-3">
                  {" умови "}
                </a>
                угоди
              </TextDescription>
            </form>
          </div>
        </div>
      </FlexContainer>
    </div>
  );
}
