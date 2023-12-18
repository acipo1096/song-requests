import { useState, useReact } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoVenmo } from "react-icons/io5";

function Thanks() {
  return (
    <div>
      <p>Thanks for making your request!</p>
      <p>
        If I don't play your song within a few songs from now, let me know. If I
        take a break, I'll play your song as one of the first in my next set
      </p>
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
    </div>
  );
}

export default Thanks;
