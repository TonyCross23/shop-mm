import type React from "react";
import type { CategoryTypes } from "../types/types";

interface CategoryProps {
    category: CategoryTypes
    setSelectedCategory: (categoryId: string) => void;
    selectedCategory: string;
}

const CategoriesButton: React.FC<CategoryProps>  = ({ category, setSelectedCategory, selectedCategory }) => {
  return (
    <div>
      <button
        onClick={() => setSelectedCategory(category.id)}
        className={`px-5 py-2 border font-medium transition duration-300 cursor-pointer
                ${
                  selectedCategory === category.id
                    ? "bg-red-500 text-white border-transparent"
                    : "text-red-500 border-red-500"
                }`}
      >
        {category.name}
      </button>
    </div>
  );
};

export default CategoriesButton;
