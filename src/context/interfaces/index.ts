import { Movie } from "http/types";

export interface MainContextHandlers {
  groupByCategory: (movies: Movie[]) => any;
  addToSelectedMovies: (movie: Movie) => void;
  isSelected: (movie: Movie) => boolean;
  removeToSelectedMovies: (movie: Movie) => void;
  clearSelectedMovies: () => void;
  setSearchedMovies: (movie: any) => void;
  toastSuccess: (message: string) => void;
  toastWarning: (message: string) => void;
  isAllowed: (category: string) => boolean;
}

export interface MainContextState {
  selectedMovies: Movie[];
  searchedMovies: Movie[];
}
