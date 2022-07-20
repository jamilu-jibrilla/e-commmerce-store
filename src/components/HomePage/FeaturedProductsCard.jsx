// import sneaker from "./sneaker.png"
import { FaShoppingCart, FaSearch } from "react-icons/fa"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { GoSync } from "react-icons/go"
import React, { useState } from 'react';


const FeaturedProductsCard = (props) => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="relative flex flex-col items-center text-center w-[22rem] h-[30rem] bg-white cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {/* shopping card icons start*/}
            <div className={`absolute items-center justify-center left-0 top-0 w-[22rem] h-[22rem] bg-none duration-500 ease-in ${isShown ? "flex overflow-hidden" : "hidden"}`}>
                <div className="flex gap-x-[0.375rem] z-10 duration-200 ease-in">
                    <FaShoppingCart className={iconStyle}/>
                    <MdOutlineFavoriteBorder className= {iconStyle}/>
                    <GoSync className= {iconStyle}/>
                    <FaSearch className= {iconStyle}/>
                </div>
            </div>
            {/* shopping card icons end*/}
            <div className="flex justify-center items-center w-[22rem] aspect-square">
                <img src={props.image} alt="item" className={`w-[75%] aspect-square object-cover duration-200 ease-in ${isShown ? "scale-110 opacity-50" : ""}`}/>
            </div>
            <div className="py-[1.31rem]">
                <h2 className={`text-[#3d464d] text-[1rem] font-Roboto font-[700] duration-200 ease-in ${isShown ? "text-proj-yel" : ""}`}>{props.productName}</h2>
                <div className="flex justify-center items-center gap-x-4">
                    <h2 className="text-[#3d464d] text-[1.2rem] font-Roboto font-[700]">{props.price}</h2>
                    <h2 className="text-[#3d464d] text-[0.9rem] font-Roboto line-through">{props.oldPrice}</h2>
                </div>
            </div>
        </div>
    );
};

const iconStyle = `text-[#3d464d] text-[36px] cursor-pointer p-[0.6rem] border-[1px] border-[#3d464d] z-10 hover:bg-[#3d464d] hover:text-proj-yel duration-200 ease-in`
export default FeaturedProductsCard;