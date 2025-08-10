import React, { useEffect, useState } from "react";
import { FaRecycle, FaTree, FaIndustry, FaHistory } from "react-icons/fa";

const WoodPalletParallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "The Heritage of Wood Pallets",
      icon: <FaHistory className="text-4xl mb-4" />,
      content: "Dating back to ancient civilizations, wood pallets have evolved from simple platforms to essential logistics tools. Their journey mirrors the growth of global trade and industrialization.",
      image: "https://images.unsplash.com/photo-1504283165217-08ba8948d2c3"
    },
    {
      title: "Industrial Applications",
      icon: <FaIndustry className="text-4xl mb-4" />,
      content: "Modern industries rely heavily on wood pallets for material handling and storage. Their versatility and durability make them indispensable in warehouses and shipping facilities worldwide.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec"
    },
    {
      title: "Sustainable Solutions",
      icon: <FaTree className="text-4xl mb-4" />,
      content: "Wood pallets represent a renewable resource in the logistics chain. Sourced from managed forests, they contribute to environmental sustainability while supporting global commerce.",
      image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda"
    },
    {
      title: "Recycling Innovation",
      icon: <FaRecycle className="text-4xl mb-4" />,
      content: "The lifecycle of wood pallets extends beyond their primary use. Through innovative recycling programs, they find new life in furniture, art, and construction materials.",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollPosition * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="text-6xl md:text-8xl font-bold text-white relative z-10 text-center px-4">
          The Art of Wood Pallets
        </h1>
      </div>

      {sections.map((section, index) => (
        <div 
          key={index}
          className="min-h-screen relative flex items-center"
          style={{
            transform: `translateY(${(scrollPosition - (index + 1) * window.innerHeight) * 0.1}px)`
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
              style={{
                backgroundImage: `url('${section.image}')`,
                transform: `translateY(${(scrollPosition - (index + 1) * window.innerHeight) * 0.2}px)`
              }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="flex flex-col items-center mb-8 transform transition-all duration-500 hover:scale-105">
                {section.icon}
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">{section.title}</h2>
              </div>
              <p className="text-xl md:text-2xl text-center leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WoodPalletParallax;