import Navbar from "./navigation";
import MiddleNav from "./middle-nav";
import TopNav from "./top-nav";
import { useState } from "react";

const Header = ({cartItems, setCartItems}) => {
  const [mobileNav, setMobileNav] = useState(true)
  return (
    <header className="header">
      <TopNav />
      <MiddleNav setMobileNav={setMobileNav} />
      <Navbar mobileNav={mobileNav} cartItems={cartItems} setCartItems={setCartItems}/>
    </header>
  );
};

export default Header;
