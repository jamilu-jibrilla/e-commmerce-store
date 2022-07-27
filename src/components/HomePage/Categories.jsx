import CategoriesCard from "./CategoriesCard";
import { useState, useEffect } from "react";
import Loader from "../Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    fetch("https://fakestoreapi.com/products/categories", { method: "get" })
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <section className="bg-[#f1f2f3] py-11 sm:mt-24 md:mt-0">
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
