module.exports = {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-[#1E6BE6]",
    "hover:bg-[#2445CE]",
    "active:bg-[#798395]",
    "text-white",
    "bg-[#FFFFFF]/5",
    "active:text-[#0f172a]",
    "active:bg-[#ffffff]/10",
    "border",
    "border-[#4C4D55]",
    "sm:px-[40px]",
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px",
    },
    extend: {},
  },
  plugins: [],
};
