import client from "http/client";
import { moviesBuilder } from "tests/stubs/builders";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";


describe("Client test", () => {

  let mock :MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  
  afterEach(() => {
    mock.reset();
  });

  const movies = moviesBuilder();

  it("Success response", async () => {
    mock.onGet(`http://localhost:8080/api/movies`).reply(200, {data:movies});

    const response = await client.getMovies();

    expect(response).toEqual({ data: movies });
  });
});
