import { fireEvent, render, screen } from "@testing-library/react";
import { movieBuilder } from "tests/stubs/builders";
import TestProviders from "tests/utils/TestProviders";
import MovieCard from "../MovieCard";
import SearchBar from "../SearchBar";

describe("<MovieCard />", () => {
  it("Renders <MovieCard> correctly to vote", async () => {
    const setSearchedMovies = jest.fn();
    const movieToSearch = "skere";
    render(
      <TestProviders>
        <SearchBar setShowSearchedMovies={setSearchedMovies} />
      </TestProviders>
    );
    const input = screen.getByPlaceholderText("Search a movie");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: movieToSearch } });
    expect(input).toHaveValue(movieToSearch);
    const searchButton = screen.getByText("Search");
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(setSearchedMovies).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });
});
