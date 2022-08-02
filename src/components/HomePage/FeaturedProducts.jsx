import FeaturedProductsCard from "./FeaturedProductsCard"
import { useEffect } from "react";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { setFeaturedProducts } from "../../redux/actions/productActions";

const FeaturedProducts = ({setCartItems, cartItems}) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.allProducts.products)

  useEffect( () => {
    dispatch(setFeaturedProducts())
  }, [dispatch])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <section className="bg-[#f1f2f3] py-11">
      <div className="flex items-center mb-6 sm:px-6">
          <h1 className="text-3xl h-12 uppercase mb-5 md:mb-0 font-Roboto font-[700] text-[#3d464d] pr-4">
            Featured Products
          </h1>
          <div className="h-[0.05rem] bg-gray-400 grow"></div>
      </div>
      <div className="w-screen flex md:flex-row sm:flex-col md:justify-center sm:items-center flex-wrap md:gap-x-10 md:gap-y-8 sm:gap-y-6">

        {products.length > 1 ? products.map((product) => {
          return(
            <FeaturedProductsCard
              setCartItems={setCartItems}
              cartItems={cartItems}
              key={product.id}
              id={product.id}
              image={product.image}
              productName={product.title}
              price={product.price}
              oldPrice={product.price - (getRandomInt(3, 7))}
            />
          )
        })
      :
        <div className="flex flex-wrap items-center mb-6 ">
          <Loader />
          <Loader />
          <Loader />
        </div>
      
      }  
          
      </div>
    </section>
  );
};
  
  export default FeaturedProducts;