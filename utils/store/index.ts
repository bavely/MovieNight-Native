import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../slices/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice, // Add reducers here
  },
});

// TypeScript-specific: Infer the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
