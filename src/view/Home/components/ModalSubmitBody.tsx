import React, { useContext } from "react";
import { MainContext } from "context/MainContext";
import { Button, ListElement, ModalBody } from "view/Home/components/styles";

interface ModalSubmitBodyProps {
  close: () => void;
}
export default function ModalSubmitBody({ close }: ModalSubmitBodyProps) {
  const { state, handlers } = useContext(MainContext);
  const closeModal = () => {
    close();
    handlers?.clearSelectedMovies();
  };
  return (
    <ModalBody>
      <h2 className="modal-title-desktop">✅ Your votes have been correctly submitted!</h2>
      <h2 className="modal-title-mobile">Submitted!</h2>
      <div className="list-movies-votes">
        <h4>Your votes:</h4>
        {state.selectedMovies.map((m) => (
          <ListElement>
            <div>🟢 </div>
            <div>{m.category}</div>
            <div>➡️ </div>
            <div>{m.title}</div>
          </ListElement>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={closeModal}>Close</Button>
      </div>
    </ModalBody>
  );
}
