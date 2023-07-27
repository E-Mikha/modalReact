import React from "react";
import { Modal } from "./Components/Modal";
import "./index.scss";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <Modal open={open} setOpen={setOpen}>
        <img
          src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
          alt="Man"
        />
        <h3>Modal Window</h3>
        <form
          action="https://giphy.com/gifs/whoa-hd-tim-and-eric-xT0xeJpnrWC4XWblEk/fullscreen"
          target="_blank"
        >
          <button style={{ cursor: "pointer" }} className="open-fullscreen-btn">
            Fullscreen
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
