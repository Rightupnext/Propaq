import { motion } from "framer-motion";
import { products } from "../constants/product";
import roadmap from "../assets/profile-pictures/roadmap.png";

const Product = () => {
  return (

    <>
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-blue-800 text-transparent bg-clip-text">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ amount: 0.5 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

<div className="flex justify-center items-center px-2 py-4 sm:py-8 bg-white">
  <img 
    src="https://res.cloudinary.com/dsgizhhfx/image/upload/v1754743837/ChatGPT_Image_Aug_9__2025__06_19_39_PM-removebg-preview_nmmzcu.png"
    alt="Roadmap"
    className="w-full max-h-[70vh] sm:max-h-[80vh] object-contain"
  />
</div>


    </>
  );
};

export default Product;
