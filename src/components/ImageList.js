import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />
  });

  return (
    <>
      <h4>image: {images.length} items</h4>
      <div className="image-list">
        {renderedImages}
      </div>
    </>
  );
};

export default ImageList;