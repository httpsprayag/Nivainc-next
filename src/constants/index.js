import { Fragment } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import {
  MdPersonAdd,
  MdProductionQuantityLimits,
  MdSpaceDashboard,
} from "react-icons/md";

export const landingImages = [
  "assets/images/landing-image-1.webp",
  "assets/images/landing-image-2.webp",
  "assets/images/landing-image-3.webp",
  "assets/images/landing-image-4.webp",
];

export const products = [
  {
    name: "porcelain-tile",
    href: "porcelain-tile",
    image: "assets/products/porcelain-tile.png",
    id: 1,
  },
  {
    name: "ceramic-tile",
    href: "ceramic-tile",
    image: "assets/products/ceramic-tile.jpg",
    id: 1,
  },
  {
    name: "outdoor-pvers",
    href: "outdoor-pvers",
    image: "assets/products/outdoorPavers.png",
    id: 1,
  },
  {
    name: "Counter Tops & Slabs",
    href: "counter-tops-Slabs",
    image: "assets/products/counterTopsSlabs.png",
    id: 1,
  },
  {
    name: "Subway Tile",
    href: "subway-tile",
    image: "assets/products/SubayTile.jpg",
    id: 1,
  },
  {
    name: "Tile Adhesive & Epoxy",
    href: "adhesive-epoxy",
    image: "assets/products/theAdhesiveaEpoxy.jpg",
    id: 1,
  },
];

export const countingData = [
  {
    title: "Designs",
    count: 1000,
    icon: <MdSpaceDashboard className="text-orange-400" />,
  },
  {
    title: "Clients",
    count: 200,
    icon: <MdProductionQuantityLimits className="text-orange-400" />,
  },
  {
    title: "Countries",
    count: 50,
    icon: <MdPersonAdd className="text-orange-400" />,
  },
];

export const sliderImages = [
  { src: "/assets/images/slider1.jpg" },
  { src: "/assets/images/slider2.jpg" },
  { src: "/assets/images/slider3.jpg" },
  { src: "/assets/images/slider4.jpg" },
  { src: "/assets/images/slider5.jpg" },
]

export const blogData = [
  {
    id: 1,
    blogImage: "https://example.com/image1.jpg",
    title: "Blog Title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in...",
    date: "November 24, 2023",
  },
  {
    id: 2,
    blogImage: "https://example.com/image2.jpg",
    title: "Blog Title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in...",
    date: "November 25, 2023",
  },
  {
    id: 3,
    blogImage: "https://example.com/image3.jpg",
    title: "Blog Title 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in...",
    date: "November 26, 2023",
  },
  {
    id: 4,
    blogImage: "https://example.com/image4.jpg",
    title: "Blog Title 4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in...",
    date: "November 27, 2023",
  },
  {
    id: 5,
    blogImage: "https://example.com/image5.jpg",
    title: "Blog Title 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in...",
    date: "November 28, 2023",
  },
  {
    id: 6,
    blogImage: "https://example.com/image6.jpg",
    title: "Blog Title 6",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in...",
    date: "November 29, 2023",
  },
];
