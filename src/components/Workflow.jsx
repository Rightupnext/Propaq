import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import feature from "../assets/profile-pictures/packs.webp";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-10">
      <h2 className="text-sm sm:text-5xl lg:text-5xl text-center mt-6 tracking-wide">
        📦
        <span className="bg-gradient-to-r from-orange-500 to-blue-800 text-transparent bg-clip-text mb-10">
          PROPAQ – From Concept{" "}to Complete Packaging
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 w-full lg:w-1/2">
          <img src= "https://res.cloudinary.com/dsgizhhfx/image/upload/v1754831508/ChatGPT_Image_Aug_10_2025_06_40_45_PM_hutqh9.png" alt="Packaging Process" className="rounded-lg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ amount: 0.5 }}
            >
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <motion.h5
                  className="mt-1 mb-2 text-xl"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  viewport={{ amount: 0.5 }}
                >
                  {item.title}
                </motion.h5>
                <motion.p
                  className="text-md text-neutral-500"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  viewport={{ amount: 0.5 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
