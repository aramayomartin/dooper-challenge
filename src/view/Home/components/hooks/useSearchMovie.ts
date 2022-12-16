import { useMutation } from "react-query";
import Client from "http/client";

const useSearchMovies = () => {
  return useMutation("movies", (movie:string) => Client.searchMovies(movie.toLowerCase()));
};

export default useSearchMovies;
