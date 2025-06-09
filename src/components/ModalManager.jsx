import { useState } from "react";
import TermsOfService from "./TermsOfService";
import CookiePolicy from "./CookiePolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import FormModal from "./formModal";

export default function ModalManager({
  children,
  className,
  variant,
  onAccept,
}) {
  const [currentModal, setcurrentModal] = useState(false);
  const variants = {
    terms: (
      <TermsOfService
        state={currentModal}
        onClose={() => setcurrentModal(false)}
      />
    ),
    cookie: (
      <CookiePolicy
        state={currentModal}
        onClose={() => setcurrentModal(false)}
        onAccept={onAccept}
      />
    ),
    privacy: (
      <PrivacyPolicy
        state={currentModal}
        onClose={() => setcurrentModal(false)}
      />
    ),
    formModal: (
      <FormModal state={currentModal} onClose={() => setcurrentModal(false)} />
    ),
  };
  return (
    <>
      <a
        className={`cursor-pointer ${className}`}
        onClick={() => setcurrentModal(true)}
      >
        {children}
      </a>
      {variants[variant]}
    </>
  );
}
