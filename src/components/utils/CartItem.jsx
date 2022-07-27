import { GrClose } from "react-icons/gr";

const CartItem = () => {

    return (
        <div className="flex justify-between items-center w-[100%] cursor-pointer hover:border-b-[0.002rem] hover:border-b-[rgba(255,255,255,0.5)] hover:bg-[rgba(255,255,255,0.3)] backdrop-blur-[24px]">
            <img src="https://bafybeictmou2ss2qafyhoxr27nbkodfvs7qf6ogmb7e55fh52tbvtkqe5y.ipfs.infura-ipfs.io/" alt="product-avatar" 
                className="w-[5rem] aspect-square rounded-full"/>
            <h2 className="font-Roboto font-[600] truncate w-[30%]">Product NameProduct NameProduct NameProduct Name</h2>
            <h2 className="font-Roboto font-[600]">Prouct Price</h2>
            <GrClose className="text-[#FFFFFF] text-[20px]"/>
        </div>
    );
};
  
export default CartItem;
  