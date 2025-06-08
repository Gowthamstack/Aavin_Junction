import React from "react";
import { assests, categories } from "../../assets/assets";

const Categories = () => {
  return (
    <div className="w-[80vw] flex flex-col mx-auto">
      <h1 className="text-2xl font-bold uppercase">Categories</h1>
      <div className="grid grid-cols-6 gap-2 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between items-center py-5 gap-2 cursor-pointer shadow-blue-800 rounded-2xl"
          >
            <img
              src={category.img}
              alt="categoryImage"
              className="w-[200px] h-[200px] object-cover "
            />
            <h4 className="">{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
