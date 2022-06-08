import React from "react";
import Tilt from "react-parallax-tilt";
import brainIcon from "./brain-icon.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <Tilt className="Tilt shadow-2">
        <div>
          <img alt="Logo" src={brainIcon} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
