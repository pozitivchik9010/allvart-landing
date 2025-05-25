import TextBlock from "./TextBlock";
import TextDescription from "./TextDescription";

export default function FeatureItem({
  number,
  children,
  className,
  titleItem,
  textItem,
}) {
  return (
    <div className="w-[354px] flex gap-3 px-5 text-start h-max">
      <span className="text-[#2445CE] text-lg/7 font-semibold tracking-[0.2em]">
        {number}
      </span>
      <TextDescription>—</TextDescription>
      <TextBlock title={titleItem} text={textItem}></TextBlock>
    </div>
  );
}
