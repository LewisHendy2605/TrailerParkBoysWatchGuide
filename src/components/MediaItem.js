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
        <div>{item.title}</div>
        <div>Year: {item.release_year}</div>
        <div>Desc: {truncateText(item.desc, 10)}</div>
      </div>
    </div>
  );
};

export default MediaItem;
