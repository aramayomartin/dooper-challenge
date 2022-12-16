export type Movie = {
  title: string;
  photoUrL: string;
  id: number;
  category: string;
};

export type MoviesResponse = {
  movies: Movie[];
};
