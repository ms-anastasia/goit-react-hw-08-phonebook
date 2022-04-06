import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import ContactsList from "../components/ContactsList/ContactsList";
// import Load from "../components/Loader/Loader";
// import { getLoading } from "../redux/contacts/phonebook-selectors";

export default function ContactsView() {
  return (
    <>
      <Form />
      <Filter />
      {/* {getLoading && <Load />} */}
      <ContactsList/>
    </>
  );
}
