import Button from "./Button";
import ModalWindow from "./ModalWindow";
import TextDescription from "./TextDescription";
import { setCookie } from "./Cookie";

export default function CookiePolicy({ state, onAccept, onClose }) {
  const handleAccept = () => {
    setCookie("cookieAccepted", "true", 365);
    onAccept?.();
    onClose();
  };
  return (
    <ModalWindow
      state={state}
      onClose={onClose}
      className="max-md:max-h-screen h-full gap-4.5"
    >
      <h2 className=" text-[22px]/[34px] md:text-4xl/[42px] font-medium text-[#142A4C]">
        Політика використання кукі файлів
      </h2>
      <TextDescription className="overflow-y-auto h-full pr-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextDescription>
      <Button
        className={`${
          !onAccept ? "hidden" : "block"
        } md:max-w-40 w-full mx-auto`}
        variant={"primary"}
        onClick={handleAccept}
      >
        Прийняти
      </Button>
    </ModalWindow>
  );
}
