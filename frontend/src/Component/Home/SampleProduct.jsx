import React from "react"
import { Sample_products } from "../../assets/assets"

export default function SampleProduct(){
    return<div className="w-[80vw] flex flex-col mx-auto">
    <h1 className="lg:uppercase md:lowercase sm:capitalize ">Here Some Products</h1>
    <div className="grid grid-cols-4 gap-4 shadow-2xs cursor-pointer">
    {Sample_products.map((product,index)=>(
        <div key={index} >
            <img src={product.img} alt="ProductImage" className=" w-[200px] h-[200px] lg:w-[400px] h-[350px] object-cover "/>
            <h2 className="">Name:{product.product}</h2>
            <h3>Price:{product.price}</h3>
            <h6>Ratings:{product.rating}</h6>
        </div>
    ))}
    </div>
    </div>
}