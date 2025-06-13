import React from "react";
import {motion} from "motion/react"
import type { ProductTypes } from "../types/types";

interface ProductProps {
 product: ProductTypes
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
      
        <motion.div
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 1}} 
          className="relative border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden shadow-md cursor-pointer">
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg z-10">
            Shop
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-4 flex flex-col">
            <h3 className="text-lg font-semibold dark:text-white">
              {product.name}
            </h3>
            <p className="text-red-500 font-bold mt-1">{product.price}</p>
            {/* <button className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
              Show Details
            </button> */}
          </div>
        </motion.div>
  );
};

export default ProductCard;
