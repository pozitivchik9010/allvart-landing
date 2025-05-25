import TextDescription from "./TextDescription";

export default function TextBlock({ title, text, className }) {
  return (
    <div className={`${className}`}>
      <span
        className={`text-[#142A4C] text-lg tracking-[0.2em] leading-[28px] font-semibold ${className}`}
      >
        {title}
      </span>
      <TextDescription>{text}</TextDescription>
    </div>
  );
}
