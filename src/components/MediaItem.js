import React from "react";
import "../css/MediaItem.css";

const MediaItem = ({ imageName }) => {
  const width = "90px";
  const height = "100px";
  return (
    <div className="media-item">
      <img
        src={`/images/${imageName}`}
        alt={imageName}
        style={{
          width: "90px",
          height: "100px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div>TPB Season</div>
    </div>
  );
};

export default MediaItem;
