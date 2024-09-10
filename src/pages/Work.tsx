import "../styles/work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <div className="workContainer">
        <div className="card">
          <Link to="/work/digitalfashion">
            <div>
              <img
                src="https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png"
                alt="Woman wearing digital design with a moon sculpture on top of her head"
              ></img>
              <h2>Digital Fashion</h2>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/work/pastwork">
            <div>
              <img
                src="https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555871/MA%20Design/Sigridur_Birna_Filtorial_Rakata_a3k1y1.jpg"
                alt="Woman laying in the grass, with weird eyes"
              ></img>
              <h2>Past</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
