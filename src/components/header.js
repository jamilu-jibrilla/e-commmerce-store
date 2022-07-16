import Navbar from "./navigation";
import MiddleNav from "./middle-nav";
import TopNav from "./top-nav";

const Header = () => {
  return (
    <header>
      <TopNav />
      <MiddleNav />
      <Navbar />
    </header>
  );
};

export default Header;
