import TextDescription from "./TextDescription";

export default function TextBlock({ title, text, className }) {
  return (
    <div className={`${className}`}>
      <span
        className={`text-[#142A4C] text-base/7  md:text-lg tracking-[0.1em] md:tracking-[0.2em]  font-semibold ${className}`}
      >
        {title}
      </span>
      <TextDescription>{text}</TextDescription>
    </div>
  );
}
