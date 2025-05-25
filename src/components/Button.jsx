export default function Button({
  href,
  children,
  className = "",
  variant,
  onClick,
  ...props
}) {
  const base =
    "flex flex-row h-[44px] px-[20px] py-[10px] rounded-[6px] cursor-pointer justify-center items-center";
  const variants = {
    primary: "bg-[#1E6BE6] hover:bg-[#2445CE] active:bg-[#798395] text-white",
    secondary:
      "bg-[#FFFFFF]/5 active:text-[#0f172a] active:bg-[#ffffff]/10 border border-[#4C4D55] sm:px-[40px]",
  };
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        {...props}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
