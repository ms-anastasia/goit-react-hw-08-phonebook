import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import ContactsList from "../components/ContactsList/ContactsList";

export default function ContactsView() {
  return (
    <>
      <Filter />
      <Form />
      <ContactsList/>
    </>
  );
}
