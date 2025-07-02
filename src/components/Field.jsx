export default function Field({ className, error, ...props }) {
  const base =
    "h-[44px] py-3 px-2   bg-white/5 border-b outline-none placeholder-[#798395] placeholder:text-base/[22px] transition-colors duration-150  !autofill:bg-red-400";
  return (
    <div className={`flex flex-col gap-24px`}>
      <input
        autocomplete="off"
        {...props}
        className={` ${base} ${
          error ? "border-[#EA2E2E]" : "border-b-[#C3C5DF]"
        } ${className}  `}
      />
      {error && <span className=" mt-1 text-sm text-[#EA2E2E]">{error}</span>}
    </div>
  );
}
