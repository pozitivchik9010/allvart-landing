import TextDescription from "./TextDescription";

export default function TextBlock({ title, text, className }) {
  return (
    <div className={`${className}`}>
      <span
        className={`text-[#142A4C] text-base/6   tracking-[0.1em] md:tracking-[0.2em]  font-semibold ${className}`}
      >
        {title}
      </span>
      <TextDescription className="max-md:text-sm/6">{text}</TextDescription>
    </div>
  );
}
