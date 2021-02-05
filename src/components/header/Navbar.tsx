import { Link } from "react-router-dom";

type NavbarProps = {
  isFooter?: boolean;
};

export const Navbar = ({ isFooter }: NavbarProps) => (
  <ul className={`navbar-list${isFooter ? " footer" : ""}`}>
    <li className="navbar-list-item">
      <Link to="/">Meet Damir</Link>
    </li>
    <li className="navbar-list-item">
      <Link to="/">Our Agenda</Link>
    </li>
    <li className="navbar-list-item">
      <Link to="/">Policies</Link>
    </li>
    <li className="navbar-list-item">
      <Link to="/">Events</Link>
    </li>
    <li className="navbar-list-item">
      <Link to="/">Store</Link>
    </li>
  </ul>
);
