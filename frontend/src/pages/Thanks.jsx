import { useState, useReact } from "react";
import { FaVenmo } from "react-icons/fa";

function Thanks() {
  return (
    <div>
      <p>Thanks for making your request!</p>
      <p>If I don't play your song within a few songs from now, let me know</p>
      <p>
        If I take a break, I'll play your song as one of the first in my next
        set
      </p>
      <p>If you like what you here, consider buying me a coffee:</p>
      <div>
        <FaVenmo />
      </div>
    </div>
  );
}

export default Thanks;
