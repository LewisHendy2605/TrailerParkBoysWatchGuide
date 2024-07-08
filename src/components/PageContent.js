import MediaItem from "./MediaItem";
import "../css/PageContent.css";
import { useEffect, useState } from "react";

const PageContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page-content">
      {data.trailer_park_boys_watch_order.map((item, index) => (
        <div className="item">
          <MediaItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default PageContent;
