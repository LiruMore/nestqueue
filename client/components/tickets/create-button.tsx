import { useState } from "react";
import Button from "../ui/button";
import CreateTicketForm from "../ui/create-form";
import Modal from "../ui/modal";

export default function CreateTicketButton() {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(true);
  const handleDismiss = () => setActive(false);
  return (
    <>
      <Button onClick={handleClick}>Create New</Button>
      <Modal active={active}>
        <CreateTicketForm onDismiss={handleDismiss} />
      </Modal>
    </>
  );
}
