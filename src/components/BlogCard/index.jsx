import React from "react";

export const BlogCard = ({ blogImage, title, text, date }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-xl shadow-gray-500">
      <img
        className="w-full h-40 object-cover object-center"
        src={blogImage}
        alt="Blog"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
        <p className="text-black">{text}</p>
      </div>
      <div className="flex justify-between items-center p-4 bg-orange-500">
        <p className="text-white">{date}</p>
        <button className="bg-orange-400 text-white px-4 py-2 rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};
