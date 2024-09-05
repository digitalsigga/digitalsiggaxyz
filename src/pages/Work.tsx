import "../styles/work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <div className="workContainer">
        <div className="card">
          <Link to="/work/madesign">
            <div className="card1">
              <h2>MA Design</h2>
              <p>MA project work</p>
              <p>2017-2019</p>
              <img></img>
            </div>
          </Link>
        </div>
        <div className="card">
          <Link to="/work/digitalfashion">
            <h2>Digital Fashion</h2>
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
