import { ArrowIcon } from "./icons";

export const StaySection = () => (
  <div className="stay-wrapper">
    <h1>Stay in the Know</h1>

    <form className="newsletter-form">
      <input type="text" placeholder="Email Address" />
      <button>
        Subscribe to our newsletter <ArrowIcon />
      </button>
    </form>
  </div>
);
