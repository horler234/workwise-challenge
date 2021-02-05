import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons";

export const DevelopmentSection = () => (
  <div className="development-section-wrapper">
    <div className="development-title">
      <p>My mission</p>
      <h1>Development from the grassroots.</h1>
    </div>

    <div className="development-content">
      <p>
        Damir Gojak has proposed an agenda with solutions that will have a
        direct and immediate effect on people’s lives, from the most elite to
        the bottom line of the society. Everyone would be involved.
      </p>

      <Link to="/">
        Read Damir’s agenda
        <ArrowIcon />
      </Link>
    </div>
  </div>
);
