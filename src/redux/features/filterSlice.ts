import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { filterType } from "../types/filterSlice";

export const initialState: filterType = {
  accommodation: true,
  food: true,
  culture: true,
  etc: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggleSelection(state, action: PayloadAction<{ key: string }>) {
      state[action.payload.key] = !state[action.payload.key];
    },
  },
});

export default filterSlice;

export const { toggleSelection } = filterSlice.actions;
