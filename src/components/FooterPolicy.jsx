import ModalManager from "./ModalManager";

export default function FooterPolicy() {
  return (
    <section className="flex h-full   bg-[#142A4C] items-center justify-center">
      <div className="flex flex-col-reverse w-full max-w-[1538px] gap-5 md:flex-row h-full grid-cols-1 md:grid-cols-2 pt-3 pb-5 justify-center md:justify-between">
        <span className="max-md:text-[#64748B]">
          © 2025 ALLVART. Всі права захищені
        </span>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-[90px] items-center">
          <li>
            <ModalManager variant={"privacy"}>
              Політика конфіденційності
            </ModalManager>
          </li>
          <li>
            <ModalManager variant={"terms"}>Умови надання послуг</ModalManager>
          </li>
          <li>
            <ModalManager variant={"cookie"}>
              Політика щодо файлів cookie
            </ModalManager>
          </li>
        </ul>
      </div>
    </section>
  );
}
