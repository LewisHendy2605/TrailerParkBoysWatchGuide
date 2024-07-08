import MediaItem from "./MediaItem";
import "../css/PageContent.css";
import { useEffect, useState } from "react";

const PageContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/TrailerParkBoysWatchGuide/data.json");
        if (!response.ok) throw new Error("First URL failed");
        let data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching from first URL:", error);
        try {
          let response = await fetch("/data.json");
          if (!response.ok) throw new Error("Second URL failed");
          let data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching from second URL:", error);
          // Handle the error appropriately here, e.g., show a message to the user
        }
      }
    };

    fetchData();
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
