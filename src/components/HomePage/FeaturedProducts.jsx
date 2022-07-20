import FeaturedProductsCard from "./FeaturedProductsCard"

const FeaturedProducts = () => {
    return (
      <section className="bg-[#f1f2f3] py-11">
        <div className="flex items-center mb-6 sm:px-6">
            <h1 className="text-3xl h-12 uppercase font-Roboto font-[700] text-[#3d464d] pr-4">
              Featured Products
            </h1>
            <div className="h-[0.05rem] bg-gray-400 grow"></div>
        </div>
        <div className="w-screen flex md:flex-row sm:flex-col md:justify-center sm:items-center flex-wrap md:gap-x-10 md:gap-y-8 sm:gap-y-6">
            <FeaturedProductsCard />
            <FeaturedProductsCard />
            <FeaturedProductsCard />
            <FeaturedProductsCard />
            <FeaturedProductsCard />
            <FeaturedProductsCard />
            <FeaturedProductsCard />
            <FeaturedProductsCard />
        </div>
      </section>
    );
  };
  
  export default FeaturedProducts;