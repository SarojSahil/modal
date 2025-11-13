import { Modal } from "@/shared/ui/modal";
import { useState } from "react";

const App = () => {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="absolute top-1/2 left-1/2 -translate-1/2 bg-sky-400 py-1 px-4 rounded-md text-white">
        Open
        </button>
      
      <Modal.Root open={open} close={() => setOpen(false)}>
        <Modal.Header>
          Warning!
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure want to delete this repository?</p>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Cancel />
          <Modal.Confirm />
        </Modal.Footer>
      </Modal.Root>
    </>
  );
}

export default App;