import { ReactNode } from "react";
import { renderHook } from "@testing-library/react-hooks";
import useMovies from "../useMovies";
import TestProviders from "tests/utils/TestProviders";
import { moviesBuilder } from "tests/stubs/builders";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("[useMovies]", () => {
  let mock: MockAdapter;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  afterAll(() => {
    jest.restoreAllMocks();
    mock.reset();
  });
  const movies = moviesBuilder();
  it("Correct call to api", async () => {
    mock.onGet(`http://localhost:8080/api/movies`).reply(200, { data: movies });
    const { result, waitFor } = renderHook(() => useMovies(), {
      wrapper: (props: { children: ReactNode }) => (
        <TestProviders>{props.children} </TestProviders>
      ),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual({ data: movies });
  });
});
