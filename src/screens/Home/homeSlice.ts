import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from "../../app/store" ;
import { fetchMovies } from './HomeApi';

export interface HomeState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  movies : Array<any>;
  searchMovies: Array<any>;
  selectedMovieIndex: number;
}

const initialState: HomeState = {
  value: 0,
  status: 'idle',
  movies: [],
  searchMovies: [],
  selectedMovieIndex: 0
};


export const homeSlice = createSlice({
  name: 'home',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setMovies: (state, action: PayloadAction<any>) => {
        const movies = [...state.movies];
        movies.push(...action.payload);
        state.movies = movies;
    },
    setSearchMovies: (state, action: PayloadAction<any>) => {
      state.searchMovies = action.payload
    },
    appendToSearchMovies: (state, action: PayloadAction<any>) => {
      const movies = [...state.searchMovies];
      movies.push(...action.payload);
      state.searchMovies = movies;
    },
    setSelectedMovieIndex: (state, action: PayloadAction<any>) => {
      state.selectedMovieIndex = action.payload
    },
  },
});

export const { incrementByAmount, setMovies, setSearchMovies, appendToSearchMovies, setSelectedMovieIndex } = homeSlice.actions;

export const movies = (state: RootState) => state.home.movies;
export const searchMovies = (state: RootState) => state.home.searchMovies;
export const selectedMovieIndex = (state: RootState) => state.home.selectedMovieIndex;



export default homeSlice.reducer;
