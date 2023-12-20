import { Link } from "react-router-dom";
import { IoLogoVenmo } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Social() {
  return (
    <div>
      <div className="social-media">
        <Link
          className="venmo"
          to="https://venmo.com/u/alexcip96"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoVenmo />
        </Link>
        <Link
          className="instagram"
          to="https://www.instagram.com/alexfloyd_music/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare /> Follow me on Instagram
        </Link>
      </div>
      <div className="back-link">
        <Link className="back-link-text" to="/">
          <FaArrowCircleLeft /> Back to Songs
        </Link>
      </div>
    </div>
  );
}

export default Social;
