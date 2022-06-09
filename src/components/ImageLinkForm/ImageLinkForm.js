import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="form-container">
      <p className="f3">
        NoFace will detect faces in your pictures. Give it a try!
      </p>
      <div className="center">
        <div className="form pa4 shadow-5">
          <input className="f4 pa2 w-70" type="text" />
          <button className="f4 pa2 w-30 grow link dim ph3 pv2 dib white">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
