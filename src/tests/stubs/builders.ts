import { build, sequence } from "@jackfranklin/test-data-bot";
import { Movie } from "http/types";

export const movieBuilder = build<Movie>("Movie", {
  fields: {
    title: sequence((x) => `title: ${x}`),
    photoUrL: sequence((x) => `photoUrl: ${x}`),
    id: sequence((x) => x),
    category: sequence((x) => `category: ${x}`),
  },
});

export const moviesBuilder = build<Movie[]>("Movie", {
  fields: [movieBuilder(), movieBuilder(), movieBuilder()],
});
