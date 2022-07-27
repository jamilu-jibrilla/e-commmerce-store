import { GrClose } from "react-icons/gr";

const CartItem = (props) => {

    const deleteCartItem = ()=> {
        props.setCartItems(props.cartItems.filter(item => item.price !== props.cartItem.price))
    }

    return (
        <div className="flex justify-between items-center w-[100%] cursor-pointer hover:border-b-[0.002rem] hover:border-b-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.3)] backdrop-blur-[24px]">
            <img src={props.image} alt="product-avatar" 
                className="w-[5rem] aspect-square rounded-full"/>
            <h2 className="font-Roboto font-[600] truncate w-[30%]">{props.itemName}</h2>
            <h2 className="font-Roboto font-[600]">{props.price}</h2>
            <GrClose className="text-[#FFFFFF] text-[20px]" onClick={deleteCartItem}/>
        </div>
    );
};
  
export default CartItem;
  