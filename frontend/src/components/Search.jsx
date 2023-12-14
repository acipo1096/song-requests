import { get } from "mongoose";
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
  const [modalData, setModalData] = useState("");

  const { songs, isLoading, isSuccess } = useSelector((state) => state.songs);
  const [searchItem, setSearchItem] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  const handleInput = (e) => {
    const searchTerm = e.target.value;
    // console.log(searchTerm);
    setSearchItem(searchTerm);

    const filteredItems = songs.filter(
      (song) =>
        song.song.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSongs(filteredItems);
    // console.log(filteredSongs);
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
        {searchItem == ""
          ? songs.map((song) => (
              <button
                onClick={() => {
                  openModal();
                  setModalData(song);
                }}
                key={song._id}
              >
                {song.artist} - {song.song}
              </button>
            ))
          : filteredSongs.map((song) => (
              <button
                onClick={() => {
                  openModal();
                  setModalData(song);
                }}
                key={song._id}
              >
                {song.artist} - {song.song}
              </button>
            ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Submit Song Request"
      >
        <h2>Submit Your Request</h2>
        <button onClick={closeModal}>X</button>
        <form>
          <div className="form-group">{`${modalData.artist} - ${modalData.song}`}</div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
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
