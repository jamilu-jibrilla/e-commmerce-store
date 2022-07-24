import Navbar from "./navigation";
import MiddleNav from "./middle-nav";
import TopNav from "./top-nav";
import { useState } from "react";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(true)
  return (
    <header>
      <TopNav />
      <MiddleNav setMobileNav={setMobileNav} />
      <Navbar mobileNav={mobileNav} />
    </header>
  );
};

export default Header;
