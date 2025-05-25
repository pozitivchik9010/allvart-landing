export default function TextDescription({ children, className }) {
  return (
    <p className={`text-[#64748B] text-base font-normal ${className}`}>
      {children}
    </p>
  );
}
