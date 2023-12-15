import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { getSongs, reset } from "../features/songs/songSlice";
import { useSelector, useDispatch } from "react-redux";

const customStyles = {
  content: {
    width: "600px",
  },
};

Modal.setAppElement("#root");

function Search() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState([
    {
      modalName: "",
      song: "",
      artist: "",
    },
  ]);

  const { songs, isLoading, isSuccess } = useSelector((state) => state.songs);

  const [searchItem, setSearchItem] = useState("");
  const [modalName, setModalName] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  const handleModalInput = (e) => {
    const inputValue = e.target.value;
    setModalName(inputValue);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setModalData({
      modalName: modalName,
      song: modalData.song,
      artist: modalData.artist,
    });

    emailjs
      .sendForm(
        "service_vt6o70n",
        "template_6p6w8wt",
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

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = songs.filter(
      (song) =>
        song.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSongs(filteredItems);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInput}
        placeholder="Search for a song"
      />
      <div>
        {searchItem == "" ? (
          songs.map((song) => (
            <Link
              className="choice"
              onClick={() => {
                openModal();
                setModalData(song);
              }}
              key={song._id}
            >
              {song.artist} - {song.song}
            </Link>
          ))
        ) : filteredSongs.length != 0 ? (
          filteredSongs.map((song) => (
            <Link
              className="choice"
              onClick={() => {
                openModal();
                setModalData(song);
              }}
              key={song._id}
            >
              {song.artist} - {song.song}
            </Link>
          ))
        ) : (
          <div>Sorry, I don't know that one!</div>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Submit Song Request"
      >
        <h2>Submit Your Request</h2>
        <button onClick={closeModal}>X</button>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">{`${modalData.artist} - ${modalData.song}`}</div>
          <div className="form-group">
            <input type="hidden" name="song" value={modalData.song} />
          </div>
          <div className="form-group">
            <input type="hidden" name="artist" value={modalData.artist} />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="modalName"
              id="modalName"
              onChange={handleModalInput}
              value={modalName}
              placeholder="Your first name"
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Search;
