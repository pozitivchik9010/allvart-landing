import TextDescription from "./TextDescription";

export default function InfoCard({
  title,
  text,
  titleClassName,
  listItems,
  className,
}) {
  return (
    <div
      className={`max-w-[524px]  shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]
 bg-white rounded-xl pt-[36px] pb-[32px] px-5 md:px-[32px] flex flex-col gap-[32px] ${className}`}
    >
      <div className="flex flex-col gap-[8px]">
        <p className={`${titleClassName}`}>{title}</p>
        <TextDescription>{text}</TextDescription>
      </div>
      <ul className="flex flex-col gap-[16px] w-full max-w-[460px] text-start">
        {listItems.map((i, index) => (
          <li key={index} className="flex ">
            {i.successIcon ? (
              <img
                src="/svg/icon-success-check.svg"
                alt="Icon success"
                className="mr-[12px] w-5 h-5"
              />
            ) : (
              <img
                src="/svg/icon-error-check.svg"
                alt="Icon error"
                className="mr-[12px] w-5 h-5"
              />
            )}
            <span className={`text-[#020817] font-medium text-base/[24px]`}>
              {i.titleInfo}
              {i.valueInfo ? (
                <>
                  {" - "}
                  <span className="font-normal">{i.valueInfo}</span>
                </>
              ) : (
                ""
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
