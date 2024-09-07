import "../../styles/digitalfashion.css"; // Import the CSS file

function DigitalFashion() {
  const imageUrls = [
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon2_ny3vmi.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725554898/Digital%20Fashion/WaningMoon3_od0cdy.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703163/Digital%20Fashion/DSDB1_iumzyg.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703164/Digital%20Fashion/DSDB2_ez7xdj.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703165/Digital%20Fashion/DSDB3_sysd92.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703165/Digital%20Fashion/DSDB4_xsbta5.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703166/Digital%20Fashion/DSDB5_rjjbso.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703167/Digital%20Fashion/DSDB6_pc1t4j.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703167/Digital%20Fashion/DSDB7_lcuzpd.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703168/Digital%20Fashion/DSDB8_llbmgy.png",
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725703169/Digital%20Fashion/DSDB9_j5wjgp.png",

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

export default DigitalFashion;
