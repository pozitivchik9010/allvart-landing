export default function Field({ name, type, placeholder, className }) {
  return (
    <div name={name} className={`flex flex-col gap-24px ${className}`}>
      {/* {label ? (
        <label name={name} className="text-sm text-red-700 font-normal">
          {label}
        </label>
      ) : null} */}
      <input
        type={type}
        className={`outline-none h-[44px] p-3  bg-white/5 border-b border-b-[#C3C5DF] placeholder:text-base/[22px] font-medium ${className}`}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
