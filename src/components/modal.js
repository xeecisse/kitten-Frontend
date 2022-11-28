import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// import { themeClass } from "../variables";

function ModalAlert({ isOpen = false, toggle = (f) => f, prisonNo = "" }) {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => setIsOpen(p => !p)

  return (
    <Modal toggle={toggle} isOpen={isOpen}>
      <ModalHeader
        toggle={toggle}
        style={{ backgroundColor: "black", border: "none", color: "white" }}
      >
        Nigerian Correctional Service
      </ModalHeader>
      <ModalBody
        style={{ backgroundColor: "black", border: "none", color: "white" }}
      >
        Form submitted sucessfully!
      </ModalBody>
      <ModalFooter style={{ backgroundColor: "black", border: "none" }}>
        <Button
          style={{
            backgroundColor: "white",
            border: "none",
            color: "black",
            width: "40%",
          }}
          onClick={toggle}
        >
          Ok
        </Button>{" "}
      </ModalFooter>
    </Modal>
  );
}
export default ModalAlert;
