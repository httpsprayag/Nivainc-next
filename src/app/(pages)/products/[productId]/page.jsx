"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Product = ({ params }) => {
  const router = useRouter();
  console.log({ params });
  return (
    <div className="grid border border-gray-600 mx-auto p-20 rounded-lg">
      <p>Product-{params.productId}</p>
    </div>
  );
};

export default Product;
