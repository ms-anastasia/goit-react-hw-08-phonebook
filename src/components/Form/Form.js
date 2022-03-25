import { useState } from "react";
import { FormHeader, FormInput, FormButton } from "./Form.styled";
import { addContact } from "../../redux/operations";
import { useDispatch } from "react-redux";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addContact({ name, number }));

    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormHeader>
        Имя
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormHeader>
      <FormHeader>
        Номер
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </FormHeader>
      <FormButton type="submit">Отправить</FormButton>
    </form>
  );
};
export default Form;
