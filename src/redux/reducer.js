import { combineReducers } from "@reduxjs/toolkit";
import { contactSearch } from "./actions";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],

  [deleteContact.fulfilled]: (state, { meta }) =>
    state.filter(({ id }) => id !== meta.arg),
});

const filter = createReducer("", {
  [contactSearch]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({ items, filter, error });
