import Button from "./Button";
import FlexContainer from "./FlexContainer";
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
    <footer className="flex gap-[35px] h-full text-black bg-[#FFFFFF] items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-[35px] px-3 py-[20px_40px] md:py-[64px] w-full max-w-[1536px] text-start items-center ">
        <FlexContainer className=" gap-[16px] ">
          <img
            className="w-[100px]"
            src="/svg/logo-allvart.svg"
            alt="Allvart logo"
          />
          <TextDescription className={"text-sm/5"}>
            Революціонізація індустрії нерухомості шляхом надання професіоналам
            сучасних інструментів, ресурсів та максимального потенціалу доходу
          </TextDescription>
          <ul className="flex gap-[25px]">
            {socialLink.map((el) => (
              <li>
                <a href={el.src}>
                  <img src={el.img} alt={el.title} />
                </a>
              </li>
            ))}
          </ul>
        </FlexContainer>
        <div className="grid grid-cols-2 gap-3 h-full">
          <FlexContainer className="gap-[16px] h-full justify-between">
            <h3 className="text-[#020817] font-semibold text-lg/[28px] ">
              Швидкі посилання
            </h3>
            <Nav className={"flex-col h-full gap-[8px]"}></Nav>
          </FlexContainer>
          <FlexContainer className="gap-[16px] h-full">
            <h3 className="text-[#020817] font-semibold text-lg/[28px] ">
              Контакти
            </h3>
            <ul className="flex flex-col h-full  gap-[8px] text-[#64748B] text-sm tracking-[0.1em] scroll-smooth">
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
                <img src="/svg/icon-mail.svg" alt="Address" />
                <a href="mailto:hello@allvart.com">hello@allvart.com</a>
              </li>
              <li className="flex gap-[4px] md:gap-[8px] items-start">
                <img src="/svg/icon-phone.svg" alt="Address" />
                <div href="#main-goal" className="flex flex-col tracking-[0]">
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
          <form className="grid grid-cols-2 max-md:grid-cols-2 max-xl:grid-cols-1 gap-[8px]">
            <input
              placeholder="Ваш email"
              type="email"
              className="outline-none h-[44px] w-full p-3  bg-[#F2F2F2] border rounded-md border-[#A1A3C0] placeholder:text-base/[22px] font-medium"
            />
            <Button variant={"primary"}>Надіслати</Button>
          </form>
        </FlexContainer>
      </div>
    </footer>
  );
}
