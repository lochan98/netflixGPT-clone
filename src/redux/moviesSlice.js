import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trialer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trialer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addTrailer,
} = moviesSlice.actions;
export default moviesSlice.reducer;
