import { createSlice } from "@reduxjs/toolkit";
import contactsList from "../contactList.json/";

const initialState = {
  contacts: {
    items: contactsList,
  },
  filters: {
    name: "",
  },
};

console.log(initialState.contacts.items);

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const contactReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;

export const selectContact = (state) => state.contact.contacts.items;

// console.log(selectContact());
