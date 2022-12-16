import React from "react";
import { Movie } from "http/types";
import MovieCard from "view/Home/components/MovieCard";
import { Cards } from "./styles";

interface ListMoviesProps {
  movies: Movie[];
  allowToVote: boolean;
}
const ListMovies = ({ movies, allowToVote }: ListMoviesProps) => {
  const orderByTitle = (a: any, b: any) =>
    a.title.charCodeAt(0) - b.title.charCodeAt(0);
  return (
    <Cards>
      {movies?.sort(orderByTitle).map((m, index) => (
        <MovieCard
          movie={m}
          key={`${m.id}-${index}`}
          allowToVote={allowToVote}
        />
      ))}
    </Cards>
  );
};

export default ListMovies;
