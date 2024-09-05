import "../styles/work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <h1>This is portfolio</h1>
      <div className="workContainer">
        <div className="card">
          <Link to="/work/digitalfashion" className="card">
            <p>Here comes art & design</p>
          </Link>
        </div>
        <div className="card">
          <p>Another design</p>
        </div>
        <div className="card">
          <p>Another design</p>
        </div>
        <div className="card">
          <p>Another design</p>
        </div>
        <div className="card">
          <p>Another design</p>
        </div>
        <div className="card">
          <p>Another design</p>
        </div>
        <div className="card">
          <p>Another design</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
