import React from "react";
import PropTypes from "prop-types";
import { ContentBox, List, ListItem, Name, Number } from "./Contacts.styled";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import selectors from "../../redux/contacts/selectors";

const ContactsList = () => {
  const contacts = useSelector((state) => selectors.getVisibleContacts(state));
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <ContentBox>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <IconButton aria-label="delete" onClick={() => onDeleteContact(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </ContentBox>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
};

export default ContactsList;
