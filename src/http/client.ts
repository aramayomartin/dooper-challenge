import axios from "axios";
import { Movie, MoviesResponse } from "http/types";

const client = {
  async getMovies(): Promise<MoviesResponse> {
    const { data } = await axios("http://localhost:8080/api/movies");
    return data;
  },

  async searchMovies(movie:string): Promise<Movie> {
    const { data } = await axios(`http://localhost:8080/api/movies/${movie}`);
    return data;
  },
};

export default client;
