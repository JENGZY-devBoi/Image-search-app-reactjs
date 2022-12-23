import './ImageShow.css';

function ImageShow({image}) {
  const capTitle = (name) => {
    return name[0].toUpperCase().concat(name.slice(1));
  }

  return (
    <>
      <img 
        src={image.urls.small} 
        alt={image.alt_description} 
      />
    </>
  );
};

export default ImageShow;