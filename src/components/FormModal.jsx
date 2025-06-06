import Button from "./Button";
import Field from "./Field";
import FlexContainer from "./FlexContainer";
import Form from "./Form";
import ModalWindow from "./ModalWindow";
import TextDescription from "./TextDescription";

export default function FormModal({ state, onClose }) {
  return (
    <ModalWindow state={state} onClose={onClose}>
      <FlexContainer className="relative text-center items-center gap-5">
        <h2 className="text-[22px]/[34px] md:text-4xl/10.5 font-medium text-[#142A4C]">
          Приєднатися до ALLVART
        </h2>
        <FlexContainer className="items-center gap-5 w-full max-w-[525px]">
          <TextDescription>
            Просто залиште свої дані і ми зв'яжемося з вами якомога швидше
          </TextDescription>

          <Form
            usedFields={["username", "phone"]}
            className={
              "max-w-[360px] grid max-md:max-w-[500px] text-[#798395] grid-cols-1 gap-[30px] items-start  w-full text-start"
            }
          >
            {({ values, errors, handleChange }) => (
              <>
                <Field
                  value={values.username}
                  name="username"
                  onChange={handleChange}
                  error={errors.username}
                  required
                  placeholder="Введіть ваше ім'я*"
                />
                <Field
                  value={values.phone}
                  name="phone"
                  onChange={handleChange}
                  error={errors.phone}
                  required
                  type="tel"
                  placeholder="Номер мобільного телефону *"
                />

                <Button
                  disabledBtn={
                    !values.username.trim() ||
                    !values.phone.trim() ||
                    errors.username ||
                    errors.phone
                  }
                  type="submit"
                  className="text-[#798395] "
                  variant="primary"
                >
                  Відправити
                </Button>
              </>
            )}
          </Form>
          <TextDescription
            className={" text-sm/[22px] leading-[24px] text-start"}
          >
            {
              "Натискаючи на кнопку “Відправити” я даю згоду на обробку персональних даних і приймаю "
            }
            <a href="#" className="underline underline-offset-3">
              {"умови"}
            </a>
            {" угоди"}
          </TextDescription>
        </FlexContainer>
      </FlexContainer>
    </ModalWindow>
  );
}
