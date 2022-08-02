import CategoriesCard from "./CategoriesCard";
import { useEffect } from "react";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../redux/actions/productActions";


const Categories = () => {
  const categories = useSelector(state => state.allCategories.categories)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(setCategories())
  }, [dispatch])  
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <section className="bg-[#f1f2f3] py-11 sm:mt-24">
      <div className="flex items-center mb-6 sm:px-6">
        <h1 className="text-3xl h-12 uppercase font-Roboto font-[700] text-[#3d464d] pr-4">
          Categories
        </h1>
        <div className="h-[0.05rem] bg-gray-400 grow"></div>
      </div>
      <div className="w-screen overflow-hidden flex md:flex-row sm:flex-col md:justify-center sm:items-center flex-wrap md:gap-x-10 md:gap-y-6 sm:gap-y-6">
        {categories.length > 1 ? categories.map((category, index) => {
          return (
            <CategoriesCard
              key={index}
              categoryName={
                category.charAt(0).toUpperCase() + category.slice(1)
              }
              categoryNumber={`${index * getRandomInt(2, 6)} products`}
            />
          );
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

export default Categories;
