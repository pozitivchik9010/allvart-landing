import "./App.css";
import Button from "./components/Button";
import Cookie from "./components/Cookie";
import FeatureItem from "./components/FeatureItem";
import Field from "./components/Field";
import FlexContainer from "./components/FlexContainer";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import ModalManager from "./components/ModalManager";
import ModalWindow from "./components/ModalWindow";

import SliderImage from "./components/SliderImage";
import TextBlock from "./components/TextBlock";
import TextDescription from "./components/TextDescription";

function App() {
  const listItemsInfo = [
    {
      titleInfo: "100% доходу",
      valueInfo: "без комісій від угод",
      successIcon: true,
    },
    {
      titleInfo: "Гнучкий графік",
      valueInfo: "працюйте, коли вам зручно",
      successIcon: true,
    },
    {
      titleInfo: "Сучасні офіси",
      valueInfo: "доступ до переговорки за потреби",
      successIcon: true,
    },
    { titleInfo: "Велика база об’єктів та клієнтів", successIcon: true },
    {
      titleInfo: "Сучасна CRM",
      valueInfo:
        "передові інструменти та програмне забезпечення з власним додатком для смартфону",
      successIcon: true,
    },
    {
      titleInfo: "Юридичні та нотаріальні послуги",
      valueInfo: "повна підтримка безпосередньо в офісі",
      successIcon: true,
    },
    {
      titleInfo: "Професійне навчання",
      valueInfo: "безперервний розвиток навичок",
      successIcon: true,
    },
  ];

  const badListItemsInfo = [
    { titleInfo: "Комісія від угоди 30% - 50%" },
    {
      titleInfo: "Фіксований графік 9-18",
      valueInfo: "жорсткі години роботи",
    },
    {
      titleInfo: "Постійний контроль",
      valueInfo: "обмежена автономія",
    },
    {
      titleInfo: "Застарілі бази даних",
      valueInfo: "обмежений доступ до клієнтів",
    },
    {
      titleInfo: "Базові інструменти",
      valueInfo: "застарілі системи та процеси",
    },
    {
      titleInfo: "Обмежена юридична підтримка",
      valueInfo: "додаткові витрати",
      successIcon: true,
    },
    {
      titleInfo: "Мінімальне навчання",
      valueInfo: `підхід "вчитися на ходу"`,
    },
  ];
  return (
    <div className="text-white ">
      <Header />

      <section
        className=" h-full bg-[#0C0E18] section-1  bg-top bg-cover  "
        style={{
          backgroundImage: `linear-gradient(to bottom, #0C0E181A, #0C0E18),  url('/img/background-image-building.png')`,
        }}
      >
        <div className="flex flex-col  relative items-start h-full bg-[#0C0E18]/80  pt-24 pb-16 md:pt-32  md:pb-25">
          <FlexContainer className="w-full px-[12px] sm:max-w-[870px] max-md:px-2.5 mx-auto my-5 items-center gap-[40px]">
            <div className="max-w-max px-[16px] py-[6px] bg-[#FFFFFF]/9 backdrop-blur-xs rounded-full flex items-center">
              <span className="relative  max-sm:hidden flex h-2 w-2 mr-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-xs">
                Платформа нерухомості нового покоління для ріелторів
              </span>
            </div>
            <FlexContainer className="flex gap-[24px]">
              <h1 className="text-6xl/[60px] font-bold max-sm:text-[40px]/[40px] max-sm:font-semibold">
                Побудуйте свою <span className="text-[#60A5FA]">успішну</span>{" "}
                кар'єру в сфері нерухомості
              </h1>
              <TextDescription className="text-[#D1D5DB] text-xl/[28px] max-sm:text-base/[22px] w-[90%]">
                ALLVART дозволяє фахівцям з нерухомості легше розвивати свій
                бізнес та отримувати дохід без традиційних агентських обмежень
              </TextDescription>
            </FlexContainer>
            <div className="grid grid-cols-2  gap-[16px] h-[44px]">
              <Button
                href="#invitation-1"
                variant={"primary"}
                className=" sm:px-[40px] gap-[8px] font-medium text-sm/[22px]"
              >
                <span>Почати зараз</span>
                <img src="/svg/item-arrow-right.svg" width={16} height={16} />
              </Button>
              <Button
                href="#invitation-2"
                variant={"secondary"}
                className="px-[10px]"
              >
                Дізнатися більше
              </Button>
            </div>
          </FlexContainer>
        </div>
      </section>
      <Cookie />

      <section
        id="main-goal-1"
        className=" scroll-mt-[64px] bg-white min-h-[750px] h-full flex flex-col items-center "
      >
        <div className="w-full flex flex-col  px-3  py-13.5 overflow-hidden  mx-auto gap-[70px] max-w-[1538px] relative">
          <div className="hidden lg:flex absolute -top-50 left-0 right-0  justify-between px-3 pointer-events-none ">
            <div className="  h-[254px] w-px bg-gradient-to-t from-[white]/0 from-0% via-[#142A4C] via-26% to-[#142A4C] to-100% opacity-50 pointer-events-none" />
            <div className=" h-[254px] w-px bg-gradient-to-t from-[white]/0 from-0% via-[#142A4C] via-26% to-[#142A4C] to-100% opacity-50  pointer-events-none" />
          </div>
          <h2 className="text-[#64748B] font-medium text-sm/5 md:text-base/[30px] tracking-[0.4em] uppercase ">
            Переваги
          </h2>
          <FlexContainer className="relative  h-full gap-[40px] md:gap-[80px] items-start text-start">
            <span className="text-[#64748B] text-outline absolute -top-30 md:-top-[10%] left-1/2 -translate-x-1/2 text-6xl/[80px] font-black md:text-[124px]/41  z-0 select-none pointer-events-none tracking-[0.2em] uppercase">
              Переваги
            </span>
            <FlexContainer className="z-1 w-full text-start mb-3 justify-items-start gap-3">
              <h2 className="text-[34px]/[40px] md:text-[40px] font-semibold text-[#020817] inline-block ">
                Масштабуйте свій бізнес з{" "}
                <span className="text-[#2445CE]">ALLVART</span>
              </h2>

              <TextDescription className={"leading-5.5 md:text-lg/7"}>
                Все, що потрібно для побудови успішної кар'єри в нерухомості, на
                одній платформі
              </TextDescription>
            </FlexContainer>
            <div className="grid xl:grid-cols-2 gap-[80px] xl:gap-[168px] text-black items-center">
              <div className="grid sm:grid-cols-2 gap-[20px] md:gap-x-[76px] md:gap-y-[42px]">
                {/* map() */}
                <FeatureItem
                  number={"01"}
                  titleItem={"Без комісії від угод"}
                  textItem={"Тепер ніяких комісій від угод, 100% ВАШІ"}
                />
                <FeatureItem
                  number={"02"}
                  titleItem={"Юридичний супровід"}
                  textItem={"Повний юридичний супровід безпосередньо в офісі"}
                />
                <FeatureItem
                  number={"03"}
                  titleItem={"Без звітів"}
                  textItem={
                    "Ви звітуєте тільки перед собою. Ваші угоди - це Ваші гроші!"
                  }
                />
                <FeatureItem
                  number={"04"}
                  titleItem={"Нотаріальні послуги"}
                  textItem={"Нотаріальні послуги безпосередньо в офісі"}
                />
              </div>
              <FlexContainer className="relative hidden xl:flex gap-[40px] w-[490px] text-start">
                <TextDescription>
                  Долучайся до нашої команди.
                  <br />З нами будеш заробляти значно більше!
                </TextDescription>
                <TextDescription>
                  Будувати власну кар’єру з ALLVART значно простіше, лише
                  власний шлях без агенцій в зручній CRM
                </TextDescription>
                <img
                  src="/img/bg-logo.svg"
                  className="absolute  top-1/2 left-0 transform -translate-y-1/2"
                />
              </FlexContainer>
            </div>
          </FlexContainer>
        </div>
      </section>
      <section
        id="career"
        className="scroll-mt-[64px] flex justify-center h-full bg-linear-to-b from-[#0A0D1B] to-[#030D37]"
      >
        <FlexContainer className=" overflow-hidden  relative gap-[34px] md:gap-[80px] items-center w-full max-w-[1538px] px-3 pt-[40px] md:pt-[80px]">
          <div className="max-lg:hidden absolute -top-25 grid grid-cols-12 w-full">
            <div className="col-start-2  h-[254px] w-px bg-gradient-to-b from-[#0A0D1B]/0 from-0% via-[#60A5FA] via-50% to-[#0A0D1B]/0 to-100%  pointer-events-none" />
            <div className="col-start-12 h-[254px] w-px bg-gradient-to-b from-[#0A0D1B]/0 from-0% via-[#60A5FA] via-50% to-[#0A0D1B]/0 to-100%  pointer-events-none" />
          </div>
          <div className="grid gap-[20px] md:gap-[12px] w-full max-w-80 min-[500px]:max-w-170">
            <h2 className="  font-medium text-sm/5 md:text-base/[30px] tracking-[0.4em] uppercase">
              кар’єра з Allvart
            </h2>
            <h2 className="text-[34px]/[40px] md:text-[40px]/[50px] font-semibold text-white ">
              Що ви отримуєте при співпраці з агенцією{" "}
              <span className="text-[#60A5FA]">ALLVART</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[1fr_4fr_1fr] w-full h-full justify-items-center gap-[35px] mx-5">
            <div className="relative xl:absolute xl:left-0 xl:top-[230px] grid col-span-1 max-lg:w-[40px] max-lg:h-[120px] max-w-[300px] max-h-[325px] w-full h-full bg-transparent">
              <div className="absolute top-0 left-0 h-full w-full max-h-[325px] max-w-[100px]">
                <div className="absolute top-[8px] left-[-4px] lg:top-[20px] lg:left-[-10px] w-full h-full border border-[#60A5FA]"></div>
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/background-image-people1.png')`,
                    backgroundSize: "900%",
                    backgroundPosition: "40% 0",
                  }}
                ></div>
              </div>

              <div className="absolute top-18 max-lg:left-13 left-32  h-full w-full max-h-[325px] max-w-[100px]">
                <div className="absolute  top-[8px] left-[-4px] lg:top-[20px] lg:left-[-10px] w-full h-full border border-[#60A5FA]"></div>
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/background-image-people1.png')`,
                    backgroundSize: "900%",
                    backgroundPosition: "56% 27%",
                  }}
                ></div>
              </div>
            </div>

            <div className="grid col-start-2 grid-cols-2 max-lg:contents  w-full  gap-x-[35px] gap-y-[50px]">
              <div className="grid max-lg:col-span-2 gap-[50px]">
                <TextBlock
                  className={"max-w-[450px] text-start text-white"}
                  title={"50 безкоштовних оголошень"}
                  text={
                    "Безкоштовні оголошенння для OLX при публікації через CRM Allvart"
                  }
                />

                <TextBlock
                  className={"max-w-[450px] text-start text-white"}
                  title={"Велика база"}
                  text={"База, яка оновлюється новими об’єктами кожного дня"}
                />
                <TextBlock
                  className={"max-w-[450px] text-start text-white"}
                  title={"CRM"}
                  text={
                    "Доступна та зручна CRM з власним додатком для смартфону"
                  }
                />
              </div>
              <div className="grid max-lg:col-span-2 gap-[50px]">
                <TextBlock
                  className={"max-w-[450px] text-start text-white"}
                  title={"Нотаріус та юрист"}
                  text={"Повний нотаріальний та юридичний супровід"}
                />

                <TextBlock
                  className={"max-w-[450px] text-start text-white"}
                  title={"Сейфові скриньки"}
                  text={
                    "Індивідуальні сейфові скриньки для зберігання цінних речей. Під охороною 24/7"
                  }
                />

                <TextBlock
                  className={"max-w-[450px] text-start text-white"}
                  title={"Банк"}
                  text={"Банк в будівлі офісу"}
                />
              </div>
            </div>

            <div className="relative  grid col-span-1 max-lg:w-[40px] max-lg:h-[120px] max-w-[300px] max-h-[325px] w-full h-full bg-transparent">
              <div className="absolute top-0 -left-3 h-full w-full max-h-[325px] max-w-[100px]">
                <div className="absolute  top-[8px] left-[-4px] lg:top-[20px] lg:left-[-10px] w-full h-full border border-[#60A5FA]"></div>
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/background-image-people2.png')`,
                    backgroundSize: "600%",
                    backgroundPosition: "20% 0",
                  }}
                ></div>
              </div>

              <div className="absolute top-18 max-lg:left-10 left-32  h-full w-full max-h-[325px] max-w-[100px]">
                <div className="absolute  top-[8px] left-[-4px] lg:top-[20px] lg:left-[-10px] w-full h-full border border-[#60A5FA]"></div>
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/background-image-people2.png')`,
                    backgroundSize: "600%",
                    backgroundPosition: "48% -12px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <FlexContainer className="items-center gap-[24px] md:gap-[40px] mb-[30px] md:mb-[60px]">
            <ModalManager variant={"formModal"}>
              <Button
                variant={"secondary"}
                className={"max-[400px]:w-full px-10 py-3 "}
              >
                Почати зараз
              </Button>
            </ModalManager>
            <Button href="#main-goal-2" className="w-10 h-10">
              <span className="border-white border rounded-full w-[10px] h-[19px] ">
                <span className=" inline-block w-[2px] h-[2px]  bg-white rounded-full"></span>
              </span>
            </Button>
          </FlexContainer>
        </FlexContainer>
      </section>
      <section
        id="main-goal-2"
        className=" scroll-mt-[64px] flex  flex-col gap-[64px] text-black justify-center items-center bg-[#F6F8FF] h-full py-[30px]"
      >
        <div className=" flex flex-col px-3 w-full max-w-[1038px] gap-5 md:gap-[64px]">
          <div>
            <h2 className=" text-[22px]/[34px] md:text-[40px]/[40px] font-semibold text-[#020817] inline-block ">
              ALLVART та звичайна агенція
            </h2>
            <div className="flex flex-col h-1 w-20 mx-auto my-6 bg-[#2445CE] rounded-[4px] "></div>
            <TextDescription className={"text-base/[22px] md:text-lg/[28px] "}>
              Дізнайтеся, як співпраця з ALLVART порівнюється з традиційними
              агентствами нерухомості
            </TextDescription>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-[35px] justify-items-center">
            <InfoCard
              className=" border-[#1E6BE6] w-full border-t-4 transform hover:-translate-y-1 transition-transform duration-300"
              title="ALLVART"
              titleClassName="text-[#2445CE] text-2xl/[32px] font-bold"
              text="Сучасна платформа"
              listItems={listItemsInfo}
            ></InfoCard>
            <InfoCard
              className="border-[#D1D5DB] w-full border-t-4"
              title="Звичайна агенція"
              titleClassName="text-[#4B5563] text-2xl/[32px] font-bold"
              text="Традиційний підхід"
              listItems={badListItemsInfo}
            ></InfoCard>
          </div>
        </div>
      </section>
      <section className="flex h-full bg-white text-black justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] justify-center justify-items-center w-full max-w-[1400px] py-7.5 md:py-16">
          <div className="flex flex-col w-full gap-[8px]">
            <span className=" font-bold text-[40px]/[40px] md:text-5xl/[42px] bg-gradient-to-r from-[#2445CE] to-[#2563EB] bg-clip-text text-transparent">
              100%
            </span>
            <TextDescription className={"text-sm/[20px]"}>
              Комісії, яку ви залишаєте
            </TextDescription>
          </div>
          <div className="flex flex-col w-full gap-[8px]">
            <span className=" font-bold text-[40px]/[40px] md:text-5xl/[42px] bg-gradient-to-r from-[#2445CE] to-[#2563EB] bg-clip-text text-transparent">
              +200%
            </span>
            <TextDescription className={"text-sm/[20px]"}>
              Потенційне збільшення доходу
            </TextDescription>
          </div>
          <div className="flex flex-col w-full gap-[8px]">
            <span className=" font-bold text-[40px]/[40px] md:text-5xl/[42px] bg-gradient-to-r from-[#2445CE] to-[#2563EB] bg-clip-text text-transparent">
              400+
            </span>
            <TextDescription className={"text-sm/[20px]"}>
              Активних оголошеннь про нерухомість
            </TextDescription>
          </div>
          <div className="flex flex-col w-full gap-[8px]">
            <span className=" font-bold text-[40px]/[40px] md:text-5xl/[42px] bg-gradient-to-r from-[#2445CE] to-[#2563EB] bg-clip-text text-transparent">
              1
            </span>
            <TextDescription className={"text-sm/[20px]"}>
              Преміальний офіс
            </TextDescription>
          </div>
        </div>
      </section>
      <section
        id="invitation-1"
        className="flex overflow-x-clip justify-center bg-linear-to-b from-[#0A0D1B] to-[#030D37] h-full min-h-[460px] py-10  scroll-mt-[64px]"
      >
        <div className=" relative grid md:grid-cols-12 text-start md:text-center justify-center w-full  max-w-[1538px] pt-2.5 md:py-6 max-md:px-3">
          <span className=" text-outline top-0 left-0 text-[#CCCCCC] absolute text-[40px]/[50px] md:text-[120px]/30 font-black z-0 select-none pointer-events-none tracking-[0.2em] md:tracking-[0.1em] opacity-40 uppercase">
            Презентація
          </span>
          <FlexContainer className="z-1  md:col-start-2 md:col-end-10 gap-[22px] md:gap-[57px] w-full max-w-[1538px]  items-start text-start">
            <div className="flex flex-col max-md:gap-5">
              {" "}
              <h2 className=" text-white font-medium text-sm/[30px] md:text-xl tracking-[0.4em] uppercase ">
                Запрошення
              </h2>
              <h2 className="text-[34px]/[40px] md:text-[40px]/[50px]  tracking-[0] font-semibold text-white inline-block ">
                Отримати презентацію
              </h2>
            </div>
            <FlexContainer className="gap-[24px] w-full">
              <TextDescription
                className={"max-md:text-sm/[22px] leading-[24px] text-white"}
                children={` Просто залиште свої дані і ми зв'яжемося з вами якомога швидше`}
              ></TextDescription>

              <Form
                usedFields={["username", "phone"]}
                className={
                  "grid grid-cols-1 md:grid-cols-[3fr_3fr_2fr] text-white gap-[18px] md:gap-[35px] items-center w-full"
                }
              >
                {({ values, errors, handleChange }) => (
                  <>
                    <Field
                      value={values.username}
                      name="username"
                      onChange={handleChange}
                      error={errors.username}
                      required
                      placeholder="Введіть ваше ім’я *"
                    />
                    <Field
                      value={values.phone}
                      name="phone"
                      onChange={handleChange}
                      error={errors.phone}
                      required
                      type="tel"
                      placeholder="Номер мобільного *"
                    />

                    <Button
                      disabledBtn={
                        !values.username.trim() ||
                        !values.phone.trim() ||
                        errors.username ||
                        errors.phone
                      }
                      type="submit"
                      className="text-[#798395] "
                      variant="secondary"
                    >
                      Відправити
                    </Button>
                  </>
                )}
              </Form>
              <TextDescription className={" text-sm/[22px] leading-[24px]"}>
                {
                  "Натискаючи на кнопку “Відправити” я даю згоду на обробку персональних даних і приймаю "
                }
                <ModalManager
                  variant={"terms"}
                  className="underline underline-offset-3"
                >
                  {"умови"}
                </ModalManager>
                {" угоди"}
              </TextDescription>
            </FlexContainer>
          </FlexContainer>
          <div className=" hidden xl:block absolute top-1/2 -translate-y-1/2 col-start-11 2xl:col-start-12  w-160   ">
            <img src="/svg/bg-dots.svg" className="" />
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="scroll-mt-[64px] flex flex-col bg-white h-full  text-start items-center pt-[50px] md:pt-[100px] gap-[10px]"
      >
        <div className=" px-4 sm:px-6 gap-2.5 md:px-3 relative flex flex-col w-full max-w-[1538px] ">
          <TextDescription className=" leading-5.5 md:text-lg/7 ">
            Ознайомтеся з нашими преміальними робочими місцями та офісом
          </TextDescription>
          <SliderImage />
        </div>
      </section>

      <section id="invitation-2" className=" scroll-mt-[64px] h-full ">
        <div className="overflow-hidden bg-linear-to-b from-[#0A0D1B] to-[#030D37] ">
          <div className="flex flex-col px-3 pt-[38px] py-[56px] md:py-[60px] gap-[21px] w-full max-w-[1536px] relative mx-auto">
            <div className="max-md:hidden absolute -top-50 left-8 h-[254px] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
            <div className="max-md:hidden absolute -top-50 right-8 h-[254px] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
            <div className="max-xl:hidden absolute top-[35px] left-30 rounded-full outline-dashed outline-[0.7px] outline-[#828695] w-[600px] h-[600px]"></div>
            <div className="max-xl:hidden absolute top-40 -left-90 rounded-full outline-dashed outline-[0.7px] outline-[#828695] w-[1067px] h-[1067px]"></div>

            <h2 className=" max-md:hidden  text-white font-medium text-base/[30px] tracking-[0.4em] uppercase ">
              Запрошення
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[35px]">
              <div className="z-2 flex flex-col gap-3 items-center justify-center">
                <img
                  className="max-md:w-[53px] max-md:order-[-1]"
                  src="/svg/logo-allvart-top.svg"
                  alt="Logo"
                />
                <h2 className=" md:hidden text-white font-medium text-sm/5 tracking-[0.4em] uppercase ">
                  Запрошення
                </h2>
              </div>

              <div className="flex relative flex-col gap-3 items-start text-start w-full h-max ">
                <div className="hidden xl:block w-160">
                  <img src="/svg/bg-dots.svg" className="" />
                </div>
                <div className="flex flex-col gap-5 md:gap-10">
                  <h2 className="text-[34px]/[40px] md:text-[40px]/[50px] font-semibold text-white inline-block ">
                    Хочете дізнатися більше про
                    <br /> ALLVART?
                  </h2>

                  <Form
                    usedFields={["username", "phone", "message"]}
                    className={
                      "max-w-[489px] grid max-md:max-w-[500px] text-white grid-cols-1 gap-[30px] items-start  w-full"
                    }
                  >
                    {({ values, errors, handleChange }) => (
                      <>
                        <Field
                          value={values.username}
                          name="username"
                          onChange={handleChange}
                          error={errors.username}
                          required
                          placeholder="Введіть ваше ім'я *"
                        />
                        <Field
                          value={values.phone}
                          name="phone"
                          onChange={handleChange}
                          error={errors.phone}
                          required
                          type="tel"
                          placeholder="Номер мобільного *"
                        />
                        <textarea
                          value={values.message}
                          name="message"
                          onChange={handleChange}
                          placeholder="Повідомлення"
                          className="w-full min-h-[120px] outline-none p-3 placeholder-[#798395] placeholder:text-base/[22px] text-white bg-white/5 border-b border-b-[#C3C5DF]"
                        />
                        <Button
                          disabledBtn={
                            !values.username.trim() ||
                            !values.phone.trim() ||
                            errors.username ||
                            errors.phone
                          }
                          type="submit"
                          className="text-[#798395] md:max-w-40"
                          variant="secondary"
                        >
                          Відправити
                        </Button>
                      </>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
