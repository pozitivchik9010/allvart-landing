import TextBlock from "./TextBlock";
const featureItems = [
  {
    number: "01",
    title: "Без комісії від угод",
    text: "Тепер ніяких комісій від угод, 100% ВАШІ",
  },
  {
    number: "02",
    title: "Юридичний супровід",
    text: "Повний юридичний супровід безпосередньо в офісі",
  },
  {
    number: "03",
    title: "Без звітів",
    text: "Ви звітуєте тільки перед собою. Ваші угоди - це Ваші гроші!",
  },
  {
    number: "04",
    title: "Нотаріальні послуги",
    text: "Нотаріальні послуги безпосередньо в офісі",
  },
];

export default function FeatureItems() {
  return (
    <div className="grid sm:grid-cols-2 gap-[20px] md:gap-x-[76px] md:gap-y-[42px]">
      {featureItems.map((item) => (
        <div
          className="w-full max-w-[354px] flex gap-3 px-5 text-start h-max"
          key={item.number}
        >
          <span className="text-[#2445CE] md:text-lg text-xl/7 font-semibold tracking-[0.2em]">
            {item.number}
          </span>
          <span className="text-[#64748B] text-base font-normal ">—</span>
          <TextBlock title={item.title} text={item.text}></TextBlock>
        </div>
      ))}
    </div>
  );
}
