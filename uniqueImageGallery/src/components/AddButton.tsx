import { ReactElement, useState } from "react";
import Button from "react-bootstrap/Button";
import { AddModal } from "./AddModal";

export const AddButton = (): ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="Add_btn-container">
        <Button id="AddButton" variant="success" onClick={() => setShow(true)}>
          +
        </Button>
      </div>

      <AddModal show={show} onHide={() => setShow(false)} />
    </>
  );
};
