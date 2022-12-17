import { MainContextHandlers, MainContextState } from "context/interfaces";
import { Movie } from "http/types";
import React, { createContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  selectedMovies: [],
  searchedMovies: [],
};

export const MainContext = createContext<{
  handlers?: MainContextHandlers;
  state: MainContextState;
}>({
  state: {
    selectedMovies: [],
    searchedMovies: [],
  },
});

export const MainContextProvider: React.FC = ({ children }: any) => {
  const [state, setState] = useState<MainContextState>({ ...initialState });

  function toastSuccess(message: string): void {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function toastWarning(message: string): void {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  function setSearchedMovies(movies: any): void {
    setState({
      ...state,
      searchedMovies: movies,
    });
  }

  function clearSelectedMovies(): void {
    setState({
      ...state,
      selectedMovies: [],
    });
  }

  function isAllowed(category: string): boolean {
    let flag: boolean = true;
    state.selectedMovies.forEach((m) => {
      if (m.category === category) flag = false;
    });
    return flag;
  }

  function addToSelectedMovies(movie: Movie): void {
    setState({
      ...state,
      selectedMovies: [...state.selectedMovies, movie],
    });
  }

  function removeToSelectedMovies(movie: Movie): void {
    setState({
      ...state,
      selectedMovies: state.selectedMovies.filter((m) => m !== movie),
    });
  }

  function groupByCategory(movies?: Movie[]): any {
    let categories: any = {};
    movies?.forEach((m) => {
      if (categories[m.category]) {
        categories[m.category].push({
          title: m.title,
          id: m.id,
          photoUrL: m.photoUrL,
          category: m.category,
        });
      } else {
        categories[m.category] = [
          {
            title: m.title,
            id: m.id,
            photoUrL: m.photoUrL,
            category: m.category,
          },
        ];
      }
    });
    return categories;
  }

  function isSelected(movie: Movie): boolean {
    return state.selectedMovies.find((m) => m === movie) ? true : false;
  }

  const contextValue = useMemo(
    () => ({
      handlers: {
        groupByCategory,
        addToSelectedMovies,
        isSelected,
        removeToSelectedMovies,
        clearSelectedMovies,
        setSearchedMovies,
        toastSuccess,
        toastWarning,
        isAllowed,
      },
      state: state,
    }),
    [state]
  );
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
