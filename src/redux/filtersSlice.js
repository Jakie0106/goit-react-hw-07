import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const searchFilterReducer = slice.reducer;
export const { changeFilter } = slice.actions;

export const selectNameFilter = (state) => state.filter.filters.name;
