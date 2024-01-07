import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    width: "250px",
    height: "350px",
    top: "40%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
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

  const navigate = useNavigate();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
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
      toast.success("Thank you! Your suggestion was submitted.");
      navigate("/thanks-for-your-suggestion");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <p>
        Sorry, I don't know how to play that one.&nbsp;
        <Link
          className="suggest-link"
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
          <div className="form-group form-input">
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
          <div className="form-group form-input">
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
