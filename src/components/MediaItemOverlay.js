import React from "react";
import "../css/MediaItemOverlay.css";
import { IoCloseCircleSharp } from "react-icons/io5";

const MediaItemOverlay = ({ item, onClose }) => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          <IoCloseCircleSharp />
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
          {item.watch_location && (
            <a
              href={item.watch_location}
              target="_blank"
              rel="noopener noreferrer"
            >
              Where to watch
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaItemOverlay;
