import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { match } from "ts-pattern";

export interface Query {
  value: string;
  searchResults: kakao.maps.services.PlacesSearchResult;
  isSearchCompleted: boolean;
}

export const initialState: Query = {
  value: "",
  searchResults: [],
  isSearchCompleted: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<{ value: string }>) {
      state.value = action.payload.value;
    },
    setSearchResult(
      state,
      action: PayloadAction<{
        result: kakao.maps.services.PlacesSearchResult;
        status: "OK" | "ZERO_RESULT" | "ERROR" | "INVALID_REQUEST";
      }>
    ) {
      match(action.payload.status)
        .with("OK", () => {
          state.searchResults = action.payload.result;
          state.isSearchCompleted = true;
        })
        .with("ZERO_RESULT", () => {
          state.isSearchCompleted = true;
        })
        .with("ERROR", () => {
          state.isSearchCompleted = false;
        })
        .with("INVALID_REQUEST", () => {
          state.isSearchCompleted = false;
        })
        .exhaustive();
    },
  },
});

export default searchSlice;

export const { setSearchResult, setQuery } = searchSlice.actions;
