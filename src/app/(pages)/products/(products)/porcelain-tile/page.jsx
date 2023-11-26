"use client";
import React from "react";
import { motion } from "framer-motion"
const porcelineImages = [
  {
    name: "Azuvi Silver",
    url: "/assets/products/Azuvi-silver.jpg",
    size: "600 x 600",
  },
  {
    name: "Onyx Carlo Beige",
    url: "/assets/products/onyx-carlo.jpg",
    size: "800 x 1600",
  },
  {
    name: "Calacatta-Marble",
    url: "/assets/products/CALACATTA MARBLE-3D.jpg",
    size: "600 x 1200",
  },
  {
    name: "porceline product-4",
    url: "/assets/products/proceline-4.jpeg",
    size: "1200 x 1200",
  },
  {
    name: "BAITA-WOOD",
    url: "/assets/products/BAITA-WOOD.jpg",
    size: "200 x 1200",
  },
  {
    name: "Bali Grey",
    url: "/assets/products/BALI-GREY.jpg",
    size: "3000 x 3000",
  },
];

const PorcelainTile = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7 },
  };

  return (
    <div className="w-full pb-8 mt-20">
      <p className="md:text-center text-xl text-blue-400 mb-14">Porcelain Tiles</p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto gap-4 px-4 md:px-0 md:gap-10"
      >
        {porcelineImages?.map((img, index) => (
          <motion.div
            key={index}
            className="relative group"
            variants={tileVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div >
              <img
                className="h-[250px] w-full object-cover rounded-t-lg"
                src={img.url}
                alt={img.name}
              />
              <motion.div
                className="absolute inset-0 bg-black rounded-t-lg opacity-0"
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
              >
              </motion.div>
                <p className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {img.name}
                </p>

              <div className="absolute bottom-0 rounded-b-lg w-full bg-blue-500 text-white p-2 text-center">
                {img.size}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PorcelainTile;
