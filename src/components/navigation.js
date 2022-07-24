import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = ({mobileNav}) => {
  let [showNav, setShowNav] = useState(false);
  const handeleDisplay = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <nav>
      <ul className={` ${ mobileNav ? "no-hamburger" : ""}  main-nav`}>
        <li onClick={handeleDisplay} className="first-child push-left">
          <i className="fa fa-bars push-left"></i> Categotries
          <ul className={` ${showNav ? "" : "none"} categories`}>
            <li>Dresses</li>
            <li>Shirts</li>
            <li>Jeans</li>
            <li>Sleepwear</li>
            <li>Swimwear</li>
            <li>sportswear</li>
            <li>Sleepwear</li>
          </ul>
        </li>
        <Link to="/about" className="push-left">
          <li>Home</li>
        </Link>
        <Link to="/contact">
          <li>Shop</li>
        </Link>
        <Link to="/contact">
          <li>shop Detail</li>
        </Link>
        <li>
          <Dropdown />
        </li>
        <Link to="/">
          <li>Contact</li>
        </Link>
      </ul>

      <ul className="cart">
        <li>
          <i className="fa fa-heart"></i>
          <span>0</span>
        </li>
        <li className="push-right">
          <i className="fa fa-shopping-cart"></i>
          <span>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
