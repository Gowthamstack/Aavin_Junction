import React from "react";
import Desktop_banner from "../../assets/Aavin_Banner.jpg";
import Mobile_banner from "../../assets/Mobile_banners.jpg";

const Banner = () => {
  return (
    <div className="relative flex items-start justify-center min-h-[80vh]">
      <img
        src={Mobile_banner}
        alt="MobileImage"
        className="block md:hidden w-[80%] h-[80vh]"
      />
      <img
        src={Desktop_banner}
        alt="DesktopImage"
        className=" hidden md:block w-[80%] h-[80vh] object-cover"
      />
    </div>
  );
};

export default Banner;
