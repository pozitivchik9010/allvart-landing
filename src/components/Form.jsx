import { useState } from "react";

export default function Form({ children, className, usedFields, successText }) {
  const [Success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    username: "",
    phone: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "username":
        return value.trim() === "" ? "Введіть ваше ім’я" : "";

      case "email":
        if (value.trim() === "") return "Введіть вашу електронну пошту";
        if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value))
          return "Введіть коректну електронну пошту";
        return "";
      case "phone":
        if (value.trim() === "") return "Введіть ваш номер мобільного";
        if (!/^\+?\d{10,15}$/.test(value))
          return "Введіть коректний номер телефону";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    const newErrors = {};
    const fieldsToValidate = usedFields || Object.keys(values);

    for (const name of fieldsToValidate) {
      const value = values[name];
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err !== "");

    if (!hasErrors) {
      const valuesToSend = Object.fromEntries(
        (usedFields || Object.keys(values)).map((key) => [key, values[key]])
      );

      console.log("Форма валідна. Відправляємо...");
      console.log("Значення для відправки:", valuesToSend);
      setSuccess(true);
    } else {
      console.log("Форма не валідна.");
    }
  };

  const baseStyle =
    "grid max-md:max-w-[500px] text-[#798395] grid-cols-1 items-start  w-full";
  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className={` ${baseStyle} ${className}`}
    >
      {typeof children === "function"
        ? children({ values, errors, handleChange, submitted })
        : children}
      {successText && Success && (
        <span className="flex col-span-2 h-10 bg-[#00FF2F]/5 text-[#142A4C] rounded-md text-center justify-center items-center animate-fade-in">
          {successText}
        </span>
      )}
    </form>
  );
}
