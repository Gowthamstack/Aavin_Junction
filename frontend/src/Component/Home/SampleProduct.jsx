import React from "react";
import { Sample_products } from "../../assets/assets";

export default function SampleProduct() {
  return (
    <div className="w-[80vw] flex flex-col mx-auto">
      <h1 className="text-2xl font-bold  capitalize md:lowercase  lg:uppercase  ">
        Here Some Products
      </h1>
      <div className="grid grid-cols-4 gap-4 shadow-2xs cursor-pointer pt-5 rounded-2xl">
        {Sample_products.map((product, index) => (
          <div key={index}>
            <img
              src={product.img}
              alt="ProductImage"
              className=" w-[250px] h-[250px] object-cover"
            />
            <h2 className="">Name:{product.product}</h2>
            <h3>Price:{product.price}</h3>
            <h6>Ratings:{product.rating}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
