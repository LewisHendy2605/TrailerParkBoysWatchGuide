import React from "react";
import "../css/MediaItemOverlay.css";

const MediaItemOverlay = ({ item, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img
          src={`/TrailerParkBoysWatchGuide/images/${item.image_path}`}
          alt={item.image_path}
          className="overlay-img"
        />
        <div className="overlay-info">
          <h2>{item.title}</h2>
          <p>Year: {item.release_year}</p>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaItemOverlay;
