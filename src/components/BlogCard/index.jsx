"use client";
// BlogCard.js
import React, { useState } from "react";
import { BlogModal } from "../BlogModal";

export const BlogCard = ({ title, blogImage, date, content }) => {
  const [visible, setVisible] = useState(false);
  const previewContent = content.split('\n').slice(0, 3).join('\n');

  return (
    <>
      <BlogModal visible={visible} content={content} handleClose={() => setVisible(false)} />
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-xl shadow-gray-500">
        <img
          className="w-full h-40 object-cover object-center"
          src={blogImage}
          alt="Blog"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
          <p className="text-black">{previewContent} {content.length > 200 && '...'}</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <p className="text-gray-600">{date}</p>
          <button
            onClick={() => setVisible(true)}
            className="text-blue-500 border border-blue-400 hover:bg-blue-400 hover:text-white transition px-4 py-2 rounded-md"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

