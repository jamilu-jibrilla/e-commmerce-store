import sneaker from "./sneaker.png"
import React, { useState } from 'react';


const CategoriesCard = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="flex w-[22rem] h-[7.65rem] bg-white cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div className="flex justify-center items-center w-[7.65rem] aspect-square object-cover overflow-hidden">
                <img src={sneaker} alt="" className={`w-[90%] aspect-square object-cover duration-300 ease-in ${isShown ? "scale-125 rotate-[6deg]" : ""}`}/>
            </div>
            <div className={`px-[2rem] flex flex-col justify-center gap-y-[0.6rem] grow duration-200 ease-in ${isShown ? "bg-proj-yel" : ""}`}>
                <h2 className="text-[#3d464d] text-[1rem] font-Roboto font-[700]">Category Name</h2>
                <p className="text-[#3d464d] text-[0.9rem] font-Roboto">100 products</p>
            </div>
        </div>
    );
};

export default CategoriesCard;