import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.APP_TMDB_API_KEY;
const BASE_URL = process.env.APP_TMDB_BASE_URL;
const headers = {
  "Authorization": `${API_KEY}`,
  "Content-Type": "application/json",
};
console.log(API_KEY);
console.log(BASE_URL);
// Fetch movies by genre
export const fetchMoodMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ page = 1, genre = "" }: { page?: number; genre?: string }) => {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?include_adult=false&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}&with_original_language=en`,
      {
        headers: headers,
      },
    );
    return response.data.results;
  },
);

// Fetch popular movies
export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async ({ page = 1 }: { page?: number }) => {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
      {
        headers: headers,
      },
    );
    console.log(response);
    return response.data.results;
  },
);

// Fetch top rated movies
export const fetchTopRatedMovies = createAsyncThunk(
  "movies/fetchTopRatedMovies",
  async ({ page = 1 }: { page?: number }) => {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?language=en-US&page=${page}`,
      {
        headers: headers,
      },
    );
    return response.data.results;
  },
);

// Fetch upcoming movies
export const fetchUpcomingMovies = createAsyncThunk(
  "movies/fetchUpcomingMovies",
  async ({ page = 1 }: { page?: number }) => {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?language=en-US&page=${page}`,
      {
        headers: headers,
      },
    );
    return response.data.results;
  },
);

// Search movies by keyword
export const fetchSearchMovies = createAsyncThunk(
  "movies/fetchSearchMovies",
  async ({ page = 1, query = "" }: { page?: number; query?: string }) => {
    const response = await axios.get(
      `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=${page}&query=${query}`,
      {
        headers: headers,
      },
    );
    return response.data.results;
  },
);
