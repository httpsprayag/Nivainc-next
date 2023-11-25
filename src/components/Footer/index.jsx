import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaPhone,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full px-4 py-6 text-white font-merriweather">
      <div className="max-w-5xl mx-auto flex flex-wrap text-justify justify-between md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div>
          <h1 className="text-lg font-semibold mb-2 text-blue-500">
            Quick Links
          </h1>
          <Link href="/">
            <p className="flex items-center mb-2 ">
              <FaHome className="inline mr-2 text-blue-500 text-2xl" />
              Home
            </p>
          </Link>
          <Link href="/about-us">
            <p className="flex items-center mb-2 ">
              <FaInfoCircle className="inline mr-2 text-blue-500  text-2xl mt-2" />
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="flex items-center mb-2">
              <FaCogs className="inline mr-2 text-blue-500  text-2xl mt-2" />
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="flex items-center ">
              <FaPhone className="inline mr-2 text-blue-500  text-2xl mt-2" />
              Contact
            </p>
          </Link>
        </div>
        <div>
          <h1 className="font-semibold mb-2 text-blue-500  text-2xl ">
            Social Media Links
          </h1>
          <div className="flex items-center gap-2 py-1">
            <FaInstagram className="inline box-content text-blue-500  text-2xl hover:text-white transition" />
            <p>Instagram</p>
          </div>
          <div className="flex items-center gap-2 py-1">
            <FaLinkedin className="inline box-content text-blue-500  text-2xl hover:text-white transition" />
            Linkedin
          </div>
          <div className="flex items-center gap-2 py-1">
            <FaWhatsapp className="inline box-content text-blue-500  text-2xl hover:text-white transition" />
            Whatsapp
          </div>
          <div className="flex items-center gap-2 py-1">
            <FaFacebook className="inline box-content text-blue-500 text-2xl hover:text-white transition" />
            Facebook
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2 text-blue-500">
            Contact Information
          </h1>
          <p>
            Corporate Office: Office No 39, Akshar Business center Morbi,
            Gujarat-363642
          </p>
          <p className="mt-3">Factory: At Shapar, Jetpar Rd, Morbi, Gujarat-363642</p>
          <p className="mt-3">Phone: India +91-9537526707, +91-7859916418 USA +1-9452686122</p>
          <div className="mt-3 flex items-center gap-2">
            <MdOutlineEmail className="text-blue-500 text-2xl" />
            <p>Export@nivainc.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
