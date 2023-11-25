import { BlogCard } from "@/components";
import { blogData } from "@/constants";
import React from "react";

const BlogPage = () => {
  return (
    <div className="px-4 w-full">
      <p className="text-center text-xl py-8 text-blue-500"> Our Blogs</p>
      <div className="mt-4 pb-10 mx-auto max-w-6xl gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogData?.map((blog) => (
          <BlogCard
            title={blog?.title}
            blogImage={blog?.blogImage}
            date={blog?.date}
            text={blog?.text}
            key={blog?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
