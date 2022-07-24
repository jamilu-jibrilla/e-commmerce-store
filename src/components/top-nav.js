import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";

const TopNav = () => {
  return (
    <div className="top-nav">
      <ul className="about">
        <Link to="/about" className="push-left">
          About
        </Link>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/contact">
          Help
        </Link>
        <Link to="/">
          FAQs
        </Link>
      </ul>
      <ul className="auth">
        <Link to="/about">
          Sign in
        </Link>
        <Link to="/about" className="push-right">
          Sign up
        </Link>
      </ul>
    </div>
  );
};

export default TopNav;
