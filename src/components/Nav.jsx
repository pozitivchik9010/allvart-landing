export default function Nav({ className, onClick }) {
  return (
    <ul
      className={`  flex text-sm/5 text-[#142A4C] tracking-[0.1em] scroll-smooth ${className}`}
      onClick={onClick}
    >
      <li>
        <a href="#main-goal-1">Переваги</a>
      </li>
      <li>
        <a href="#career">Кар’єра з Allvart</a>
      </li>
      <li>
        <a href="#main-goal-2">Переваги</a>
      </li>
      <li>
        <a href="#gallery">Фотогалерея</a>
      </li>
      <li>
        <a href="#invitation-1">Запрошення</a>
      </li>
    </ul>
  );
}
