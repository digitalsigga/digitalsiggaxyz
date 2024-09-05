import "../../styles/digitalfashion.css";

function DigitalFashion() {
  // Number of images to display in the gallery
  const numberOfImages = 12;
  const imageUrl =
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/WaningMoon1_lrljga.png";

  return (
    <div className="gallery">
      <h2>Digital Fashion</h2>
      <p>fassjjóóóón</p>
      <div className="gallery-grid">
        {Array.from({ length: numberOfImages }).map((_, index) => (
          <img key={index} src={imageUrl} alt={`Fashion ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default DigitalFashion;
