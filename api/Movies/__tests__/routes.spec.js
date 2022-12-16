const routes = require("../routes");
const generateMoviesData = require("../dataGenerator.js");
const request = require("supertest");
const express = require("express");
const movies = generateMoviesData();
const app = express();

app.use("/", routes);

describe("Test all endpoints", () => {
  it("Get all movies", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(movies);
  });

  it("Search Movies", async () => {
    const movieToSearch = "sk";
    const expectedResponse = [
      {
        title: "The Midnight Sky",
        photoUrL:
          "https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg",
        id: "midnight-sky",
        category: "Best Visual Effects",
      },
    ];
    const response = await request(app).get(`/api/movies/${movieToSearch}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual(expectedResponse);
  });
});
