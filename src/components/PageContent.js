import MediaItem from "./MediaItem";
import "../css/PageContent.css";

const PageContent = () => {
  return (
    <div className="page-content">
      <MediaItem imageName="tpb-season-1.jpg" />
      <MediaItem imageName="tpb-season-2.jpg" />
    </div>
  );
};

export default PageContent;
