import { render, screen } from "@testing-library/react";
import { movieBuilder } from "tests/stubs/builders";
import MovieCard from "../MovieCard";

describe("<MovieCard />", () => {
  it("Renders <MovieCard> correctly to vote", async () => {
    const movie = movieBuilder();
    render(<MovieCard movie={movie} allowToVote/>);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.category)).toBeInTheDocument();
    expect(screen.getByText('Vote')).toBeInTheDocument();
  });
  it("Renders <MovieCard> correctly to remove", async () => {
    const movie = movieBuilder();
    render(<MovieCard movie={movie} allowToVote={false}/>);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.category)).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });
});
