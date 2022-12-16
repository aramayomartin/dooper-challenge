import React from "react";
import { Movie } from "http/types";
import ListMovies from "view/Home/components/ListMovies";
import { CategoryTitle } from "./styles";

interface CategorySectionProps {
  category: string;
  movies: Movie[];
}
export default function CategorySection({
  category,
  movies,
}: CategorySectionProps) {
  return (
    <>
      <div>
        <CategoryTitle>
          <h2>
            {`⚡ Category: ${category}`}
            </h2>
        </CategoryTitle>
        <ListMovies movies={movies} allowToVote/>
      </div>
    </>
  );
}
