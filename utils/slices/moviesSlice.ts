import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchMoodMovies,
  fetchSearchMovies,
} from "../../services/movies";

// 🎥 Movie Slice
const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    moodMovies: [],
    searchResults: [],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch popular movies";
      })

      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
      })

      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload;
      })

      .addCase(fetchMoodMovies.fulfilled, (state, action) => {
        state.moodMovies = action.payload;
      })

      .addCase(fetchSearchMovies.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default moviesSlice.reducer;
