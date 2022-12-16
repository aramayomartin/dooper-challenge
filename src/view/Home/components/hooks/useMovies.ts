import { useQuery } from "react-query";
import Client from "http/client";

const useMovies = () => {
  const movies = useQuery("movies", Client.getMovies, {staleTime:Infinity});
  return movies;
};

export default useMovies;

