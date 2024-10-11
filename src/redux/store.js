import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { searchFilterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: searchFilterReducer,
  },
});
