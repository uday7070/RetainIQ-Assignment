import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./ImageUploader.css";
const ImageUploader = ({ stateId, variantId }) => {
  const [imagePreview, setImagePreview] = useState("");
  const [imageName, setImageName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageName(file.name);
    }
  };

  return (
    <div className="image_main_container">
      {imagePreview ? (
        <div>
          <img src={imagePreview} alt="Selected" width="150" height="150" />
          <div>{imageName}</div>
        </div>
      ) : (
        <div
          onClick={() =>
            document.getElementById(`${stateId}${variantId}`).click()
          }
          className="image_container"
        >
          <button className="image_btn">
            <AddIcon />
          </button>
          <div
            style={{
              textAlign: "center",
            }}
          >
            Add Design
          </div>

          <input
            id={`${stateId}${variantId}`}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
