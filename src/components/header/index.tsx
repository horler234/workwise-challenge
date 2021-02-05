import { Navbar } from "./Navbar";
import { ArrowIcon } from "../icons";
import { HeaderCard } from "./HeaderCard";

export const Header = () => (
    <>
  <div className="header-banner">
    <Navbar />
    <div className="header-title">
      <p>Make Croatia Great Again.</p>
      <button>
        <ArrowIcon />
        <span>Click here to get involved</span>
      </button>
    </div>
  </div>

  <HeaderCard />
  </>
);
