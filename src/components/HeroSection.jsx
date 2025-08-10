"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 1000; // Adjust scale factor
      setScale(Math.min(newScale, 1.5)); // Limit max scale
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-28 overflow-hidden">
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        style={{ transform: `scale(${scale})` }}
      >
     PROPAQ  Protects{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-blue-800 text-transparent bg-clip-text">
             your Products 
        </span>
      </motion.h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We craft high-quality cardboard packaging solutions designed to
        safeguard your products with precision and reliability. From custom
        packaging to bulk orders, we deliver sturdy, sustainable, and
        cost-effective boxes that protect what matters most.
      </p>
     

     <div className="flex flex-col sm:flex-row justify-center mt-8 sm:mt-12 gap-4">
        <a
          href="https://wa.me/+919789551204" target="_blank"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-6 rounded-md text-white text-center"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-6 rounded-md border border-neutral-500 text-black text-center"
        >
          Documentation
        </a>
      </div>


      {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;
