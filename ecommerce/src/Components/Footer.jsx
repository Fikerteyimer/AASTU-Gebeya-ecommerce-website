import { Link } from "react-router-dom";
import { navLinks } from "../data";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Campus Gebeya</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            A smart campus marketplace where students can buy, sell, and explore
            products and services built for speed, trust, and convenience.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Categories</h3>

          <span className="text-gray-200 text-sm">Electronics</span>
          <span className="text-gray-200 text-sm">Fashion</span>
          <span className="text-gray-200 text-sm">Books</span>
          <span className="text-gray-200 text-sm">Services</span>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>

          <p className="text-gray-200 text-sm">Addis Ababa, Ethiopia</p>
          <p className="text-gray-200 text-sm">campus@gebeya.com</p>

          <div className="flex gap-4 mt-3">
            <FaFacebook className="text-xl cursor-pointer hover:text-gray-300" />
            <FaTwitter className="text-xl cursor-pointer hover:text-gray-300" />
            <FaInstagram className="text-xl cursor-pointer hover:text-gray-300" />
          </div>
        </div>

      </div>
      <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Campus Gebeya. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;