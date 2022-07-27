// import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({cartItems, setCartItems}) => {

  const calculateTotal = (arr) => { 
    if (arr.length === 0) return 0.00
    const sum = arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0,
    );
    return sum.toFixed(2)
  }

  return (
    <section className="bg-[#3d464d] h-[75vh] w-[25vw] px-12 py-10 relative">
      <h2 className="text-2xl font-Roboto font-[600] text-proj-yel">
        Order Summary
      </h2>
      <div className="flex flex-col my-12 h-[50vh] space-y-10 overflow-y-auto">
        {cartItems.map((cartItem, index) => {
          return(
            <CartItem
              key={index}
              setCartItems={setCartItems}
              cartItem={cartItem}
              cartItems={cartItems}
              image={cartItem.image}
              itemName={cartItem.name}
              price={cartItem.price}
            /> 
          )
        })}
      </div>  
      <button className="absolute flex flex-col items-center space-y-1 bottom-0 left-0 w-[100%] bg-proj-yel py-3 uppercase text-[#3d464d] hover:bg-yellow-500">
        <h2 className="font-Roboto">Proceed to Checkout Page</h2>
        <h2 className="text-2xl font-Roboto font-[600]">{`${calculateTotal(cartItems)} NGN`}</h2>
      </button>
    </section>
  );
};

export default Cart;
