import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
    hideGpt: (state) => {
      state.showGpt = false;
    },
  },
});

export const { toggleGpt, hideGpt } = gptSlice.actions;

export default gptSlice.reducer;
