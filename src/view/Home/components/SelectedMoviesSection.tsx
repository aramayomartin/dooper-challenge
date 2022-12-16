import React, { useContext } from "react";
import { MainContext } from "context/MainContext";
import { SectionTitle, SubmitButton } from "view/Home/components/styles";
import ListMovies from "view/Home/components/ListMovies";
interface SelectedMoviesSectionProps {
  openModal: () => void;
}
const SelectedMoviesSection = ({ openModal }: SelectedMoviesSectionProps) => {
  const { state } = useContext(MainContext);
  const onSubmit = () => {
    openModal();
  };
  const isAllowedSubmit = () => {
    return state.selectedMovies.length === 7;
  };
  if (!state.selectedMovies.length) {
    return null;
  }
  return (
    <div
    style={{marginBottom:'15px'}}
    >
      <SectionTitle>
        <h1>😎 Selected Movies:</h1>
      </SectionTitle>
      <ListMovies movies={state.selectedMovies} allowToVote={false}/>
      {isAllowedSubmit() && (
        <SubmitButton onClick={() => onSubmit()}>
          Submit selection!
        </SubmitButton>
      )}
    </div>
  );
};

export default SelectedMoviesSection;
