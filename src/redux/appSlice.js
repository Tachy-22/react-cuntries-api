import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredCountries: null,
  countryInView: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateFilteredCountries: (state, action) => ({
      ...state,
      filteredCountries: action.payload,
    }),
    updateCountryInView: (state, action) => ({
      ...state,
      countryInView: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { updateFilteredCountries, updateCountryInView } =
  appSlice.actions;

export default appSlice.reducer;
