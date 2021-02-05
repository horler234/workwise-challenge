import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons";
import philip from "../images/philip-martin.png";

export const AboutSection = () => (
  <div className="about-wrapper">
    <div className="about-text-wrapper">
      <h1>
        About <br />
        Damir Gojak.
      </h1>
      <div className="about-text-content">
        <p>
          Damir Gojak is a lifelong public safety and civil rights leader.
          Elected in 2006, he is the first Zagreb man to serve as Attorney
          General of the state of Croatia.
        </p>

        <Link to="/">
          Read Damir’s agenda
          <ArrowIcon />
        </Link>
      </div>
    </div>

    <div className="about-image-wrapper">
      <img src={philip} alt="Philip" />
    </div>
  </div>
);
