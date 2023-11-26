// BlogPage.js
import { BlogCard } from "@/components";
import React from "react";

// constants.js
// constants.js
export const blogData = [
  {
    id: 1,
    title: "Niva Inc: Where Elegance Meets Sustainability",
    blogImage: "path/to/image1.jpg",
    date: "November 1, 2023",
    content: `Welcome to Niva Inc, the epitome of elegance and sustainability in tile manufacturing. Our commitment goes beyond creating tiles; we craft timeless spaces that blend artistry with responsibility.
1. Artisan Excellence:
   • Niva Inc tiles embody meticulous craftsmanship and design ingenuity.
   • Signature designs reflect aesthetic appeal and adaptability to diverse styles.
2. Quality Assurance:
   • Rigorous quality control measures ensure tiles meet the highest standards.
   • Niva Inc holds certifications, emphasizing durability and sustainability.
3. Global Presence:
   • Niva Inc tiles grace projects globally, catering to varied international tastes.
   • Success stories and case studies showcase the widespread application of our tiles.
4. Sustainability Focus:
   • Niva Inc is committed to environmental responsibility in tile production and export.
   • Eco-friendly initiatives underscore our dedication to sustainable business practices.
5. Efficient Export Process:
   • Niva Inc follows a streamlined export procedure, ensuring compliance with international regulations.
   • Our logistics ensure timely and secure delivery, establishing a reputation for reliability.`,
  },
  {
    id: 2,
    title: "History of Morbi Ceramic Industries",
    blogImage: "path/to/image2.jpg",
    date: "November 5, 2023",
    content: `Morbi, Gujarat, evolved from traditional pottery to a major hub for ceramic production in the late 20th century. Abundant natural resources fueled technological advancements, making Morbi a global exporter of ceramic tiles and sanitary ware. The industry faced challenges, including environmental concerns, but adapted through diversification and sustainable practices. Morbi's ceramic sector significantly impacted the regional economy, providing employment and contributing to economic growth.`,
  },
  {
    id: 3,
    title: "Ceramic vs. Porcelain Tiles: Quick Guide to Your Perfect Choice",
    blogImage: "path/to/image3.jpg",
    date: "November 10, 2023",
    content: `Choosing between ceramic and porcelain tiles? Here's a brief breakdown:
Material:
  • Ceramic: Clay, minerals, water; kiln-fired at lower temps.
  • Porcelain: High-temperature-fired ceramic, denser and less porous.
Durability:
  • Ceramic: Durable but softer, may chip in high-traffic areas.
  • Porcelain: Highly durable, resistant to wear and tear.
Water Absorption:
  • Ceramic: More porous, best for indoor use.
  • Porcelain: Low water absorption, suitable for wet areas and outdoors.
Application:
  • Ceramic: Indoor use, low-traffic areas.
  • Porcelain: Versatile, ideal for both indoor and outdoor spaces.
Design Options:
  • Ceramic: Budget-friendly, diverse colors and patterns.
  • Porcelain: Mimics natural materials, sophisticated aesthetic.`,
  },
];


const BlogPage = () => {
  return (
    <div className="px-4 w-full">
      <p className="text-center text-xl py-8 text-orange-500"> Our Blogs</p>
      <div className="mt-4 pb-10 mx-auto max-w-6xl gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogData?.map((blog) => (
          <BlogCard
            title={blog?.title}
            blogImage={blog?.blogImage}
            date={blog?.date}
            content={blog?.content}
            key={blog?.id}
          />
        ))}
      </div>
    </div>
  );
};


export default BlogPage;

