// import { useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {

  return (
    <section className="bg-[#3d464d] h-[75vh] w-[25vw] px-12 py-10 relative">
      <h2 className="text-2xl font-Roboto font-[600] text-proj-yel">
        Order Summary
      </h2>
      <div className="flex flex-col my-12 space-y-10">
        <CartItem />  
      </div>  
      <button className="absolute bottom-0 left-0 w-[100%] bg-proj-yel py-5 uppercase font-[600] text-[#3d464d] hover:bg-yellow-500">Proceed to Checkout(Total Cost)</button>
    </section>
  );
};

export default Cart;
