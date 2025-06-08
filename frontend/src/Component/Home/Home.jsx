import React from "react";
import Banner from "./Banner";
import SampleProduct from "./SampleProduct";
import Categories from "./Categories";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <Categories />
      <SampleProduct />
    </div>
  );
};

export default Home;
