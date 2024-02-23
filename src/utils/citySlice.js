import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
  name: "city",
  initialState: {
    city: "",
  },
  reducers: {
    setCity: (state, action) => {
      state = action.payload; // using immer-like syntax
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
