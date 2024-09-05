import "../styles/work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <div className="workContainer">
        <div className="card">
          <Link to="/work/digitalfashion">
            <div className="card1">
              <div className="card1text">
                <h2>Digital Fashion</h2>
                <p>CLO 3D</p>
                <p>2020-2024</p>
              </div>
              <div className="card1img">
                <img
                  src="https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/WaningMoon1_lrljga.png"
                  alt="Woman wearing digital design with a moon sculpture on top of her head"
                ></img>
              </div>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/work/madesign">
            <div className="card2">
              <h2>MA Design</h2>
              <p>MA project work</p>
              <p>2017-2019</p>
            </div>
          </Link>
        </div>
        <div className="card">
          <h2>✯</h2>
        </div>
        <div className="card">
          <h2>♤</h2>
        </div>
        <div className="card">
          <h2>♡</h2>
        </div>
        <div className="card">
          <h2>☂</h2>
        </div>
        <div className="card">
          <h2>♜</h2>
        </div>
        <div className="card">
          <h2>♡</h2>
        </div>
        <div className="card">
          <h2>☂</h2>
        </div>
      </div>
    </div>
  );
}

export default Work;
