import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffd166;
  height: 25rem;
  width: 15rem;
  border-radius: 10px;
  text-decoration: none;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 1rem;
  color: black;
  text-align: center;
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 6rem;
  border-radius: 100px;
  margin-top:10px;

  color: white;
  background-color: #ee9b00;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;

  &&:hover {
    color: #023047;
    border-color: #023047;
    background-color: #ee9b00;
  }
`;

export const SubmitButton = styled.button`
  height: 2.5rem;
  width: "12rem";
  border-radius: 100px;

  color: white;
  background-color: #ee9b00;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;

  &&:hover {
    color: #023047;
    border-color: #023047;
    background-color: #ee9b00;
  }
`;
export const Input = styled.input`
  width: 80%;
  height: 2.5rem;
  border-radius: 10px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);

  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;
  border-radius: 10px;
  border-line: solid 1px;
  width: 100%;
  height: 3rem;
  text-align: left;
  padding-left: 10px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;
  border-radius: 10px;
  border-line: solid 1px;
  width: 100%;
  height: 3rem;
  text-align: left;
  padding-left: 10px;
`;

export const ModalBody = styled.div`
display: flex;
flex-direction: column;
.modal-title-mobile {
  display: none;
}

@media screen and (max-width: 540px) {
  .list-movies-votes {
    display: none;
  }
  .modal-title-desktop {
    display: none;
  }
  .modal-title-mobile {
    display: flex;
    flex-direction: column;
  }
}
`;

export const ListElement = styled.div`
display: flex;
flex-direction: row;
align-items: space-around;
justify-content: flex-start;
text-align: left;
`;
