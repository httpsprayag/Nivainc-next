"use client"
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion"
const adhesiveEpoxyImages = [
  {
    name: "Adhesive Epoxy",
    url: "/assets/products/adhesive.jpg",
    size: "600 x 600",
  },
]
const AdhesiveEpoxy = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.8 },
  };

  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <div className="h-screen">
      <p className="md:text-center text-blue-500 text-2xl pb-8 mt-8">
        Adhesive Epoxy
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 px-4 md:px-0 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {adhesiveEpoxyImages?.map((img, index) => (
          <motion.div
            className="relative group"
            key={index}
            variants={containerVariants}
            onHoverStart={() => setIsLinkHovered(true)}
            onHoverEnd={() => setIsLinkHovered(false)}
          >
            <motion.img
              src={img?.url}
              key={index}
              alt="ceramic tile"
              className="h-[320px] w-full object-cover rounded-md"
              whileHover={{ scale: 1.05 }}
            />
            {isLinkHovered && (
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-300"
                variants={textOverlayVariants}
              >
                <p className="text-white text-lg font-bold">{img.name}</p>
              </motion.div>
            )}
            <div className="absolute bottom-0 rounded-b-lg w-full bg-blue-500 text-white p-2 text-center">
              {img.size}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default AdhesiveEpoxy;
