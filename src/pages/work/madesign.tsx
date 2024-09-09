import "../../styles/digitalfashion.css"; // Import the CSS file

function MaDesign() {
  const imageUrls = [
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555871/MA%20Design/Sigridur_Birna_Filtorial_Rakata_a3k1y1.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555870/MA%20Design/Rakata_Acid_from_Sigri%CC%81%C3%B0ur_Birna_lf9fdv.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555879/MA%20Design/eg_nl05eq.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725701888/MA%20Design/Digitalsiggateaser2_ftwbue.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725701887/MA%20Design/Digitalsiggateaser1_okprvw.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725701888/MA%20Design/Digitalsiggateaser3_tzfqiz.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725700585/MA%20Design/Editorial_6_hcavbw.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725700585/MA%20Design/Editorial_3_oppjsl.jpg",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725700585/MA%20Design/Editorial_2_o0yf6b.jpg",
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
