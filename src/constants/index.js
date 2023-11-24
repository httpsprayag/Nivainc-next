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
