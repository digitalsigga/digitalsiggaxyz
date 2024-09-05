import React from "react";
import "../../styles/digitalfashion.css"; // Import the CSS file

function DigitalFashion() {
  const imageUrls = [
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/WaningMoon1_lrljga.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/WaningMoon2_ny3vmi.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/WaningMoon3_uqsbwr.png",
    // Add more image URLs here if needed
  ];

  return (
    <div className="gallery">
      <h2>Digital Fashion</h2>
      <p>fassjjóóóón</p>
      <div className="gallery-grid">
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Fashion ${index}`} />
        ))}
      </div>
    </div>
  );
}

export default DigitalFashion;
