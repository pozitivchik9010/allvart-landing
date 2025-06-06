export default function Button({
  href,
  children,
  className = "",
  variant,
  onClick,
  type = "button",
  disabledBtn,
  ...props
}) {
  const base = `flex flex-row h-[44px]  rounded-[6px]  justify-center items-center ${
    disabledBtn ? " cursor-no-drop" : "cursor-pointer"
  }`;
  const variants = {
    primary: `px-[20px] py-[10px] bg-[#1E6BE6]  text-white ${
      disabledBtn
        ? "text-[#798395] cursor-no-drop bg-[#798395]"
        : "hover:bg-[#2445CE] active:bg-[#1E6BE6]/80"
    }`,
    secondary: `bg-[#FFFFFF]/5 border border-[#4C4D55] sm:px-[40px] ${
      disabledBtn
        ? "text-[#798395] bg-[#ffffff]/5 cursor-no-drop"
        : "text-white active:text-[#798395] hover:bg-[#ffffff]/10 active:bg-[#ffffff]/5"
    }`,
  };
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        {...props}
        className={` ${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className} `}
    >
      {children}
    </button>
  );
}
