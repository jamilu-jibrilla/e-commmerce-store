import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav">
      <ul className="about">
        <Link to="/about" className="push-left">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/contact">
          <li>Help</li>
        </Link>
        <Link to="/">
          <li>FAQs</li>
        </Link>
      </ul>
      <ul className="auth">
        <Link to="/about">
          <li>Sign in</li>
        </Link>
        <Link to="/about" className="push-right">
          <li>Sign up</li>
        </Link>
      </ul>
    </div>
  );
};

export default TopNav;
