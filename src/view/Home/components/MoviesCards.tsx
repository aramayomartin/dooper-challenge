import { MainContext } from "context/MainContext";
import React, { useContext } from "react";
import CategorySection from "./CategorySection";
import useMovies from "./hooks/useMovies";

export default function MoviesCards() {
    const { handlers } = useContext(MainContext);
    const moviesRequest: any = useMovies();
    const groupedMoviesByCategory = handlers?.groupByCategory(
      moviesRequest.data?.movies
    );
  return (
    <>
      {moviesRequest.isSuccess &&
        Object.keys(groupedMoviesByCategory)
          .map((c, index) => (
            <CategorySection
              key={`${groupedMoviesByCategory[c].id}-"${index}`}
              category={c}
              movies={groupedMoviesByCategory[c]}
            />
          ))}
    </>
  );
}
