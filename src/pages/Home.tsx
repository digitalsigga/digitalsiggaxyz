import "../styles/home.css";

const images = [
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148226/Digital%20Fashion/wanderingmoon/WaningMoon1_j1is57.png",
    alt: "Waning Moon 1",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148231/Digital%20Fashion/wanderingmoon/WaningMoon2_cysngy.png",
    alt: "Waning Moon 2",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148222/Digital%20Fashion/wanderingmoon/WaningMoon3_gn0mbo.png",
    alt: "Waning Moon 3",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148483/Digital%20Fashion/DSDB/DSDB6_xpe8se.png",
    alt: "DSDB 6",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB3_qfbsg5.png",
    alt: "DSDB 3",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148483/Digital%20Fashion/DSDB/DSDB1_wvfqga.png",
    alt: "DSDB 1",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB7_dlv4jb.png",
    alt: "DSDB 7",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB4_uqpdf1.png",
    alt: "DSDB 4",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB5_dwqu4z.png",
    alt: "DSDB 5",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB9_bxbdzp.png",
    alt: "DSDB 9",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148482/Digital%20Fashion/DSDB/DSDB2_t6pm7l.png",
    alt: "DSDB 2",
  },
  {
    src: "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB8_l4wnbc.png",
    alt: "DSDB 8",
  },
];

function Home() {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <img
          key={index}
          className="gallery__item"
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

export default Home;
