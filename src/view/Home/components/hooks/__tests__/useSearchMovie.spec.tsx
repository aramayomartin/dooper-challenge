import { ReactNode } from "react";
import { renderHook } from "@testing-library/react-hooks";
import TestProviders from "tests/utils/TestProviders";
import { moviesBuilder } from "tests/stubs/builders";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import useSearchMovies from "../useSearchMovie";

describe("[useSearchMovie]", () => {
  let mock: MockAdapter;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  afterAll(() => {
    jest.restoreAllMocks();
    mock.reset();
  });
  const movies = moviesBuilder();
  const movieToSearch = "sk";
  it("Correct call to api", async () => {
    mock
      .onGet(`http://localhost:8080/api/movies/${movieToSearch}`)
      .reply(200, movies);
    const { result, waitFor } = renderHook(() => useSearchMovies(), {
      wrapper: (props: { children: ReactNode }) => (
        <TestProviders>{props.children} </TestProviders>
      ),
    });
    result.current.mutate(movieToSearch);

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(movies);
  });
});
