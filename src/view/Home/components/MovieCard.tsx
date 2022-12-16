import React, { useContext } from "react";
import { Movie } from "http/types";
import { MainContext } from "context/MainContext";
import { Button, Card } from "view/Home/components/styles";

interface MovieElement {
  movie: Movie;
  allowToVote: boolean;
}
export default function MovieCard({ movie, allowToVote }: MovieElement) {
  const { handlers } = useContext(MainContext);
  const onVote = () => {
    if (handlers?.isAllowed(movie.category)) {
      handlers?.addToSelectedMovies(movie);
      handlers?.toastSuccess("Added!");
    } else {
      handlers?.toastWarning("Only one movie can be selected per category");
    }
  };
  const remove = () => {
    handlers?.removeToSelectedMovies(movie);
    handlers?.toastSuccess("Removed!");
  };
  return (
    <>
      <Card>
          <h4>{movie.title}</h4>
        <img
          style={{ height: "70%", width: "70%" }}
          src={movie.photoUrL}
          alt={movie.title}
        />
        <p>{movie.category}</p>

        {allowToVote ? (
          <Button onClick={() => onVote()}>Vote</Button>
        ) : (
          <Button onClick={() => remove()}>Remove</Button>
        )}
      </Card>
    </>
  );
}
