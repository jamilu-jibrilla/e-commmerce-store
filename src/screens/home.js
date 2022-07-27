import Footer from "../components/footer";
import Header from "../components/header";

import FeaturedProducts from "../components/HomePage/FeaturedProducts";
import Categories from "../components/HomePage/Categories";

import { useState } from "react";

const Home = () => {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="home">
      <Header cartItems={cartItems} setCartItems={setCartItems}/>
      <Categories />
      <FeaturedProducts setCartItems={setCartItems} cartItems={cartItems}/>
      <Footer />
    </div>
  );
};

export default Home;
