import "../../styles/digitalfashion.css"; // Import the CSS file

function MaDesign() {
  const imageUrls = [
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555879/eg_nl05eq.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555871/Sigridur_Birna_Filtorial_Rakata_a3k1y1.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555870/Rakata_Acid_from_Sigri%CC%81%C3%B0ur_Birna_lf9fdv.jpg",
    // Add more image URLs here if needed
  ];

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Fashion ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default MaDesign;
