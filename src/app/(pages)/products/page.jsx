import Link from "next/link";
import React from "react";

const ProductList = [
  {
    name: "Adhesive Epoxy",
    id: "/adhesive-epoxy",
  },
  {
    name: "Ceramic Tile",
    id: "/ceramic-tile",
  },
  {
    name: "Counter Tops Slabs",
    id: "/counter-tops-Slabs",
  },
  {
    name: "Outdoor Pvers",
    id: "/outdoor-pvers",
  },
  {
    name: "Porcelain Tile",
    id: "porcelain-tile",
  },
  {
    name: "Subway Tile",
    id: "subway-tile",
  },
];

const ProductsPage = () => {
  return (
    <div className="h-screen">
      <div className="mt-4">
        <h1>Products</h1>
        <div className="mt-4 md:container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {ProductList.map((product) => {
            return (
              <div className="grid place-items-center p-12 border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-md lg:w-auto  lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
