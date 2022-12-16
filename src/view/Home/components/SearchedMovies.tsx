import { MainContext } from "context/MainContext";
import React, { useContext } from "react";
import CategorySection from "./CategorySection";

export default function SearchedMovies() {
  const { handlers, state } = useContext(MainContext);
  const { searchedMovies } = state;
  var groupedMoviesByCategory = handlers?.groupByCategory(searchedMovies);

  return (
    <>
      {searchedMovies.length === 0 ? (
        <h1>No results</h1>
      ) : (
        Object.keys(groupedMoviesByCategory)
          .sort()
          .map((c, index) => (
            <CategorySection
              key={`${groupedMoviesByCategory[c].id}-${index}`}
              category={c}
              movies={groupedMoviesByCategory[c]}
            />
          ))
      )}
    </>
  );
}
