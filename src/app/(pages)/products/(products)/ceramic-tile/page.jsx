"use client"
import React from "react";
import { motion } from "framer-motion";

const CeramicTiles = () => {
  const ceramicTiles = [
    { name: "Ceramic tiles", url: "/assets/products/ceramicImg.jpeg" },
    { name: "Ceramic tiles", url: "/assets/products/ceramicImg.jpeg" },
    { name: "Ceramic tiles", url: "/assets/products/ceramicImg.jpeg" },
    { name: "Ceramic tiles", url: "/assets/products/ceramicImg.jpeg" },
    { name: "Ceramic tiles", url: "/assets/products/ceramicImg.jpeg" },
    { name: "Ceramic tiles", url: "/assets/products/ceramicImg.jpeg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-screen">
      <p className="md:text-center text-blue-500 text-2xl pb-8 mt-8">
        Ceramic Tiles
      </p>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 px-4 md:px-0 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {ceramicTiles?.map((img, index) => (
          <motion.div
            className="relative group"
            key={index}
            variants={containerVariants}
          >
            <img
              src={img?.url}
              key={index}
              alt="ceramic tile"
              className="h-[320px] w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CeramicTiles;
