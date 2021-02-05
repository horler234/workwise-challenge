import { Link } from "react-router-dom";
import { Navbar } from "./header/Navbar";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./icons";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <div className="footer-logo-wrapper">
        <div className="footer-logo">dg.</div>

        <p>
          <strong>
            The Office of <br />
            Damir Radmjal Gojak,
          </strong>
          <br />
          Presidential Candidate 2023
        </p>

        <p>
          &#169;2020 <br />
          Privacy Policy
        </p>
      </div>

      <div className="footer-links-wrapper">
        <Navbar isFooter />

        <div className="social-links-wrapper">
          <p>Follow us on social media</p>

          <div className="social-links">
            <Link to="https://facebook.com">
              <FacebookIcon />
            </Link>

            <Link to="https://facebook.com">
              <InstagramIcon />
            </Link>

            <Link to="https://facebook.com">
              <LinkedinIcon />
            </Link>

            <Link to="https://facebook.com">
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
