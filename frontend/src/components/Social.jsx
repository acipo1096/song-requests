import { Link } from "react-router-dom";
import { IoLogoVenmo } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div>
      <div className="social-media">
        <div>
          <Link
            className="venmo"
            to="https://venmo.com/u/alexcip96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoVenmo />
          </Link>
        </div>
        <p className="insta-text">Follow me on Instagram:</p>
        <div>
          <Link
            className="instagram"
            to="https://www.instagram.com/alexfloyd_music/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </div>
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
