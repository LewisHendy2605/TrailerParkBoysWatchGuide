import React from "react";
import "../css/MediaItem.css";

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  if (typeof text !== "string") {
    return "";
  }

  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
/// NEED TO add alternative path for local set up
const MediaItem = ({ item }) => {
  return (
    <div className="media-item">
      <img
        src={`/TrailerParkBoysWatchGuide/images${item.image_path}`}
        alt={item.image_path}
        className="media-item-img"
      />
      <div className="media-item-info">
        <h2>{item.title}</h2>
        <p>Year: {item.release_year}</p>
        <p>Desc: {truncateText(item.desc, 10)}</p>
      </div>
    </div>
  );
};

export default MediaItem;
