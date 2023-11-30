import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    suggestedMovieNames: null,
    suggestedMovies: null,
  },

  reducers: {
    toggleGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
    hideGpt: (state) => {
      state.showGpt = false;
    },
    addSuggestedMovieNames: (state, action) => {
      state.suggestedMovieNames = action.payload;
    },
    addSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
  },
});

export const {
  toggleGpt,
  hideGpt,
  addSuggestedMovieNames,
  addSuggestedMovies,
} = gptSlice.actions;

export default gptSlice.reducer;
