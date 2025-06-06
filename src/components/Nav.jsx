export default function Nav({
  className,
  onClick,
  colorText = "text-[#64748B]",
}) {
  const navLink = [
    { title: "Переваги", href: "#main-goal-1" },
    { title: "Кар’єра з Allvart", href: "#career" },
    { title: "Порівняння", href: "#main-goal-2" },
    { title: "Галерея", href: "#gallery" },
    { title: "Запрошення", href: "#invitation-1" },
  ];
  return (
    <ul
      className={`flex text-sm/5  tracking-[0.1em] scroll-smooth ${className}`}
      onClick={onClick}
    >
      {navLink.map((item, id) => (
        <li key={id}>
          <a className={`${colorText}`} href={item.href}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
