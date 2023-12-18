import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

const customStyles = {
  content: {
    width: "200px",
    height: "350px",
    top: "5%",
    left: "25%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    position: "relative",
  },
};

Modal.setAppElement("#root");

function Suggest() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    yourName: "",
    message: "",
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleModalInput = (e) => {
    const inputValue = e.target.value;
    setModalData(inputValue);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setModalData({
      yourName: modalData.yourName,
      message: modalData.message,
    });

    emailjs
      .sendForm(
        "service_vt6o70n",
        "template_sq5nniq",
        form.current,
        "Qwk1b7QoE_4Op9U3b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    closeModal();
  };

  return (
    <div>
      <p>
        Sorry, I don't know that one.&nbsp;
        <Link
          onClick={() => {
            openModal();
          }}
        >
          Suggest a song here!
        </Link>
      </p>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Submit Song Request"
      >
        <h2 className="modal-title">Submit Your Request</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="yourName">Your Name</label>
            <input
              type="text"
              name="yourName"
              id="yourName"
              onChange={handleModalInput}
              value={modalData.yourName}
              placeholder="Your first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Suggestions</label>
            <textarea
              name="message"
              id="message"
              placeholder="What songs/artists should I learn?"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Suggest;
