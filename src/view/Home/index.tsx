import React, { useState } from "react";
import SearchBar from "view/Home/components/SearchBar";
import MoviesCards from "view/Home/components/MoviesCards";
import SearchedMovies from "view/Home/components/SearchedMovies";
import SelectedMoviesSection from "view/Home/components/SelectedMoviesSection";
import Modal from "react-modal";
import ModalSubmitBody from "view/Home/components/ModalSubmitBody";

const Home = () => {
  const [showSearchedMovies, setShowSearchedMovies] = useState(false);
  const [showModalSubmit, setShowModalSubmit] = useState(false);
  const openModal = () => setShowModalSubmit(true);
  const closeModal = () => setShowModalSubmit(false);
  Modal.setAppElement(document.getElementById('root')!);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px'
    },
  };

  return (
    <>
      <SearchBar data-testid="search-bar-component" setShowSearchedMovies={setShowSearchedMovies} />
      {showSearchedMovies ? <SearchedMovies /> : <MoviesCards />}
      <SelectedMoviesSection data-testid="movies-section-component" openModal={openModal} />
      <Modal
        isOpen={showModalSubmit}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalSubmitBody close={closeModal} />
      </Modal>
    </>
  );
};

export default Home;
