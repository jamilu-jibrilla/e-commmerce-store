import Footer from "../components/footer";
import Header from "../components/header";

import FeaturedProducts from "../components/HomePage/FeaturedProducts";
import Categories from "../components/HomePage/Categories";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home;
