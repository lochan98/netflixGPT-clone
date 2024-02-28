import { createSlice } from "@reduxjs/toolkit";

const gptSearch = createSlice({
  name: "gptSlice",
  initialState: {
    gptSearch: false,
    moviesList: null,
    movieNames: null,
  },
  reducers: {
    toggleGPT: (state, action) => {
      state.gptSearch = action.payload;
    },
    addGPTMovies: (state, action) => {
      const { movieList, movieNames } = action.payload;
      state.moviesList = movieList;
      state.movieNames = movieNames;
    },
  },
});

export const { toggleGPT, addGPTMovies } = gptSearch.actions;
export default gptSearch.reducer;
