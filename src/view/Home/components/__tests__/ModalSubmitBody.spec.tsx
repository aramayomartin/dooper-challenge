import { render, screen } from "@testing-library/react";
import ModalSubmitBody from "../ModalSubmitBody";

describe("<ModalSubmitBody />", () => {
    const close = jest.fn();
  it("Renders <ModalSubmitBody> correctly", async () => {
    render(<ModalSubmitBody close={close}/>);
    expect(screen.getByText("✅ Your votes have been correctly submitted!")).toBeInTheDocument();
});
});
