import { render, screen } from "@testing-library/react";
import {  movieBuilder } from "tests/stubs/builders";
import CategorySection from "../CategorySection";

describe("<CategorySection />", () => {
  it("Renders <CategorySection/> correctly", async () => {
    const movies = [movieBuilder(),movieBuilder()];
    const category = "random-category";
    render(<CategorySection movies={movies} category={category}/>);
    expect(screen.getByText(`⚡ Category: ${category}`)).toBeInTheDocument();
  });
});
