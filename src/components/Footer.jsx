import Button from "./Button";
import Field from "./Field";
import FlexContainer from "./FlexContainer";
import FooterPolicy from "./FooterPolicy";
import Form from "./Form";
import Nav from "./Nav";
import TextDescription from "./TextDescription";

export default function Footer() {
  const socialLink = [
    {
      src: "#instagram",
      title: "Інстаграм",
      img: "/svg/social/social-icon-instagram.svg",
    },
    {
      src: "#youtube",
      title: "Ютуб",
      img: "/svg/social/social-icon-youtube.svg",
    },
    {
      src: "#facebook",
      title: "Facebook",
      img: "/svg/social/social-icon-facebook.svg",
    },
    {
      src: "#telegram",
      title: "Телеграм",
      img: "/svg/social/social-icon-telegram.svg",
    },
    {
      src: "#twitter",
      title: "Твітер",
      img: "/svg/social/social-icon-twitter.svg",
    },
  ];
  return (
    <footer className="flex flex-col">
      <div className="flex gap-[35px] h-full text-black bg-[#FFFFFF] items-center justify-center">
        <div className="grid items-start grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-[35px] px-3 py-[20px_40px] md:py-[64px] w-full max-w-[1536px] text-start">
          <FlexContainer className="gap-4">
            <FlexContainer className="gap-1.5">
              <img
                className="w-[100px]"
                src="/svg/logo-allvart.svg"
                alt="Allvart logo"
              />
              <TextDescription className={"text-sm/5"}>
                Революціонізація індустрії нерухомості шляхом надання
                професіоналам сучасних інструментів, ресурсів та максимального
                потенціалу доходу
              </TextDescription>
            </FlexContainer>
            <ul className="flex gap-10 md:gap-[25px] justify-center md:justify-start">
              {socialLink.map((el) => (
                <li>
                  <a href={el.src}>
                    <img src={el.img} alt={el.title} />
                  </a>
                </li>
              ))}
            </ul>
          </FlexContainer>
          <div className="grid grid-cols-2 md:gap-3 h-full">
            <FlexContainer className="gap-[16px] h-full justify-between">
              <h3 className="text-[#020817] font-semibold text-lg/[28px] ">
                Швидкі лінки
              </h3>
              <Nav className={"flex-col h-full gap-[8px]"}></Nav>
            </FlexContainer>
            <FlexContainer className="gap-[16px] h-full">
              <h3 className="text-[#020817] font-semibold text-lg/[28px] ">
                Контакти
              </h3>
              <ul className="flex flex-col h-full  gap-3 text-[#64748B] text-sm tracking-[0.1em] scroll-smooth">
                <li className="flex gap-[4px] md:gap-[8px] items-start">
                  <img src="/svg/icon-map-pin.svg" alt="Address" />
                  <a
                    href="https://www.google.com/maps?q=Ірпінь, вул. Садова, 70"
                    target="_blank"
                  >
                    02001, Ірпінь, Grand Estate,
                    <br /> вул. Садова, 70
                  </a>
                </li>
                <li className="flex gap-[4px] md:gap-[8px] items-start">
                  <img src="/svg/icon-mail.svg" alt="Mail" />
                  <a href="mailto:hello@allvart.com">hello@allvart.com</a>
                </li>
                <li className="flex gap-[4px] md:gap-[8px] items-start">
                  <img src="/svg/icon-phone.svg" alt="Phone" />
                  <div
                    href="#main-goal"
                    className="flex flex-col gap-0.5 tracking-[0]"
                  >
                    <a href="tel:+38(093)350-68-69">+38 (093) 350-68-69</a>
                    <a href="tel:+38(097)350-68-69">+38 (097) 350-68-69</a>
                    <a href="tel:+38(050)350-68-69">+38 (050) 350-68-69</a>
                  </div>
                </li>
              </ul>
            </FlexContainer>
          </div>
          <FlexContainer className="gap-[16px] h-full">
            <h3 className="text-[#020817] font-semibold text-lg/[28px] ">
              Слідкуй за новинами
            </h3>
            <TextDescription>
              Підпишіться на нашу розсилку, щоб отримувати останні новини та
              галузеву аналітику
            </TextDescription>
            <Form
              usedFields={["email"]}
              successText={"Вітаємо. Ви успішно підписались!"}
              className={
                "grid grid-cols-[2fr_1fr]  max-md:grid-cols-[2fr_1fr] max-xl:grid-cols-1  gap-x-[8px] gap-y-[25px] w-full "
              }
            >
              {({ values, errors, handleChange }) => (
                <>
                  <Field
                    className={` placeholder-shown:bg-[#F2F2F2] outline-none h-[44px] w-full p-3 bg-white border rounded-md  border-[#A1A3C0] text-[#142A4C] placeholder:text-base/[22px] font-medium ${
                      errors.email && "text-[#EA2E2E]"
                    }`}
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    error={errors.email}
                    required
                    placeholder="Ваш email"
                  />

                  <Button
                    type="submit"
                    className="text-[#798395] "
                    variant="primary"
                  >
                    Підписатися
                  </Button>
                </>
              )}
            </Form>
          </FlexContainer>
        </div>
      </div>
      <FooterPolicy />
    </footer>
  );
}
