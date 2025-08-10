import React from 'react';
import pic1 from "../clients/pics/1.png";
import pic2 from "../clients/pics/2.png";
import pic3 from "../clients/pics/3.jpg";
import pic4 from "../clients/pics/4.png";
import pic5 from "../clients/pics/5.png";
import pic6 from "../clients/pics/6.png";
import pic7 from "../clients/pics/7.png";
import pic8 from "../clients/pics/8.png";
import pic9 from "../clients/pics/logo.png";
import pic10 from "../clients/pics/10.png";

const Clients = () => {
  const clientLogos = [
    // height | move up/down | move left/right
    { src: pic1,  className: "h-[270px] translate-y-[10px] translate-x-[0px]" },
    { src: pic3,  className: "h-[45px] translate-y-[10px] translate-x-[3px]" },
    { src: pic2,  className: "h-[50px] translate-y-[10px] translate-x-[-2px]" },
    { src: pic4,  className: "h-[48px] translate-y-[14px] translate-x-[0px]" },
    { src: pic5,  className: "h-[55px] translate-y-[8px] translate-x-[0px]" },
    { src: pic6,  className: "h-[50px] translate-y-[3px] translate-x-[5px]" },
    { src: pic7,  className: "h-[70px] translate-y-[-1px] translate-x-[0px]" },
    { src: pic8,  className: "h-[52px] translate-y-[14px] translate-x-[-2px]" },
    { src: pic9,  className: "h-[50px] translate-y-[1px] translate-x-[0px]" },
    { src: pic10, className: "h-[47px] translate-y-[8px] translate-x-[0px]" }
  ];

  return (
    <div className="mx-auto max-w-screen-lg px-8 pt-20 pb-16 text-gray-700 md:pt-24 md:pb-20">
      <div className="flex flex-wrap">

        {/* Left Side */}
        <div className="w-full lg:w-1/3">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500 xl:text-base">
            Our Clients
          </h2>
          <h3 className="mb-3 font-bold text-gray-800 sm:text-2xl xl:text-4xl">
            Trusted by over 200+ clients
          </h3>
          <p>We bring solutions to make life easier for our customers.</p>
        </div>

        {/* Right Side Logo Grid */}
        <div className="w-full lg:w-2/3 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center h-20 relative">
                <img
                  src={logo.src}
                  alt={`Client ${index + 1}`}
                  className={`${logo.className} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Clients;
