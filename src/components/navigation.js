import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li className="push-left">
          {" "}
          <i className="fa fa-bars push-left"></i> Categotries
          <ul className="categories">
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
        <Link to="/">
          <li>Contact</li>
        </Link>
      </ul>

      <ul className="cart">
        <li>
          <i className="fa fa-heart"></i>
        </li>
        <li className="push-right">
          <i className="fa fa-shopping-cart"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
