import { useState, useReact } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoVenmo } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";

function Thanks() {
  return (
    <div>
      <p>Thanks for your suggestion! I'll keep it in mind as I grow my set.</p>
      <p>If you see a song that I know, feel free to request that one.</p>
      <p>If you like what you hear, consider buying me a coffee:</p>
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
      <div className="back-link">
        <Link className="back-link-text" to="/">
          <FaArrowCircleLeft /> Back to Songs
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
