import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHandshake, FaRocket, FaBalanceScale, FaUsers, FaCrown } from "react-icons/fa";
import ScrollToTop from "./ScrollToTop";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      title: "Excellence in Every Layer",
      desc: "We pursue precision and consistency in everything we do—from raw material sourcing to final delivery—ensuring world-class quality at every stage.",
      icon: <FaCrown className="text-yellow-500 text-4xl mb-4" />,
    },
    {
      title: "Sustainable Innovation",
      desc: "We embrace innovation not just for progress, but with purpose—driving eco-conscious solutions that contribute to a more sustainable and circular packaging economy.",
      icon: <FaLeaf className="text-yellow-500 text-4xl mb-4" />,
    },
    {
      title: "Customer Partnership",
      desc: "Our clients are at the center of everything we build. We collaborate, adapt, and grow alongside them—offering proactive solutions that go beyond expectations.",
      icon: <FaHandshake className="text-yellow-500 text-4xl mb-4" />,
    },
    {
      title: "Agility & Growth Mindset",
      desc: "We operate with agility, embracing change and continuously evolving to meet emerging market needs and industry shifts.",
      icon: <FaRocket className="text-yellow-500 text-4xl mb-4" />,
    },
    {
      title: "Integrity & Ownership",
      desc: "We act with honesty, accountability, and ethical responsibility in all areas of our operations—fostering trust with every stakeholder.",
      icon: <FaBalanceScale className="text-yellow-500 text-4xl mb-4" />,
    },
    {
      title: "Empowering People",
      desc: "We believe that our people are our greatest strength. We invest in talent, training, and a culture of collaboration to drive innovation and collective success.",
      icon: <FaUsers className="text-yellow-500 text-4xl mb-4" />,
    },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 flex flex-col items-center justify-center px-6 py-16 space-y-20">
        
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-white"
        >
          About <span className="text-yellow-500">Propaq</span>
        </motion.h1>

        {/* Paragraphs */}
        {[
          `Propaq is a forward-thinking carton box manufacturer dedicated to providing innovative, sustainable, and customized packaging solutions. In an industry driven by efficiency, branding, and environmental responsibility, we stay ahead by blending modern technology with trusted manufacturing practices.`,
          `From corrugated cartons to die-cut and printed boxes, we design packaging that not only protects your product but also enhances your brand identity. Our production facilities are equipped with advanced automation and precision machinery, ensuring consistent quality, faster turnaround times, and scalability.`,
          `With increasing demand for eco-friendly packaging, we are proud to use recyclable materials and processes that reduce environmental impact. Our solutions are tailored to diverse industries such as e-commerce, FMCG, textiles, and electronics—delivering cost-effective packaging that meets both functional and aesthetic needs.`,
          `At Propaq, we don’t just make boxes—we create packaging that supports your supply chain, elevates your product, and aligns with the values of today’s conscious consumers.`
        ].map((text, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + idx * 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 text-center max-w-3xl"
          >
            {text}
          </motion.p>
        ))}

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              title: "Sustainable Packaging",
              desc: "We proudly use recyclable materials and eco-friendly processes that reduce environmental impact while supporting green initiatives."
            },
            {
              title: "Advanced Manufacturing",
              desc: "Our state-of-the-art facilities with automation and precision machinery ensure consistent quality, faster turnaround, and scalability."
            },
            {
              title: "Tailored Solutions",
              desc: "Serving e-commerce, FMCG, textiles, and electronics industries with cost-effective, functional, and aesthetic packaging solutions."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
              className="bg-gray-900 border border-yellow-500 rounded-2xl p-6 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,160,23,0.5)] transition-transform duration-300"
            >
              <h2 className="text-2xl font-semibold text-yellow-500 mb-4">{item.title}</h2>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="max-w-5xl w-full px-6"
        >
          <div className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-black rounded-2xl shadow-2xl p-10 text-center overflow-hidden">
            <h2 className="text-3xl font-extrabold mb-4">Our Mission</h2>
            <p className="text-lg font-medium max-w-3xl mx-auto">
              "To empower our clients with innovative, sustainable, and cost-effective 
              packaging solutions that protect their products, strengthen their brand 
              identity, and contribute meaningfully to a more sustainable global future."
            </p>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-yellow-200 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-200 opacity-30 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="max-w-7xl w-full px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold text-center text-yellow-500 mb-12"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gray-900 border border-yellow-500 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-[0_0_20px_rgba(212,160,23,0.5)] transition-transform duration-300"
              >
                {value.icon}
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </>
  );
}
