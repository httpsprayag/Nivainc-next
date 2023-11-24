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

export const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full px-4 py-6 text-cyan-300">
      <div className="max-w-5xl mx-auto flex flex-wrap text-justify justify-between md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        <div>
          <h1 className="text-lg font-semibold mb-2 text-orange-500">
            Quick Links
          </h1>
          <Link href="/">
            <p className="flex items-center mb-2 ">
              <FaHome className="inline mr-2 text-orange-500" />
              Home
            </p>
          </Link>
          <Link href="/about-us">
            <p className="flex items-center mb-2 ">
              <FaInfoCircle className="inline mr-2 text-orange-500" />
              About
            </p>
          </Link>
          <Link href="/services">
            <p className="flex items-center mb-2">
              <FaCogs className="inline mr-2 text-orange-500" />
              Services
            </p>
          </Link>
          <Link href="/contact">
            <p className="flex items-center ">
              <FaPhone className="inline mr-2 text-orange-500" />
              Contact
            </p>
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2 text-orange-500">
            Social Media Links
          </h1>
          <p>
            <FaInstagram className="inline mr-2 text-orange-500" />
            Instagram
          </p>
          <p>
            <FaLinkedin className="inline mr-2 text-orange-500" />
            Linkedin
          </p>
          <p>
            <FaWhatsapp className="inline mr-2 text-orange-500" />
            Whatsapp
          </p>
          <p>
            <FaFacebook className="inline mr-2 text-orange-500" />
            Facebook
          </p>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2 text-orange-500">
            Contact Information
          </h1>
          <p>
            Corporate Office: Office No 39, Akshar Business center Morbi,
            Gujarat-363642
          </p>
          <p>Factory: At Shapar, Jetpar Rd, Morbi, Gujarat-363642</p>
          <p>Phone: India +91-9537526707, +91-7859916418 USA +1-9452686122</p>
          <p>Email: Export@nivainc.com</p>
        </div>
      </div>
    </footer>
  );
};
