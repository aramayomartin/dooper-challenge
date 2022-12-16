import { MainContext } from "context/MainContext";
import React, { useContext, useState } from "react";
import useSearchMovies from "view/Home/components/hooks/useSearchMovie";
import { Button, Input } from "view/Home/components/styles";

interface SearchBarProps {
  setShowSearchedMovies: (state: boolean) => void;
}

export default function SearchBar({
  setShowSearchedMovies,
}: SearchBarProps): React.ReactElement {
  const [input, setInput] = useState("");
  const searchMovie = useSearchMovies();
  const { handlers } = useContext(MainContext);

  const onChange = (e: any) => {
    e.preventDefault();
    setInput(e.target?.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setInput("");
    searchMovie.mutate(input, {
      onSuccess: (data) => {
        handlers?.setSearchedMovies(data);
      },
    });
    setShowSearchedMovies(true);
  };

  const clear = () => {
    setShowSearchedMovies(false);
  };

  return (
    <div style={{marginTop:'15px', display:'flex', justifyContent:'space-around'}}>
      <Input value={input} onChange={onChange} placeholder="Search a movie" />
      <Button onClick={onSubmit} disabled={input.length === 0}>
        Search
      </Button>
      <Button onClick={clear}>Clear</Button>
    </div>
  );
}
