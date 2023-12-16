import { useState } from "react";
import Logo from "./Logo";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";

// Navigation links component
const NavigationLinks = ({ className }) => (
  <ul className={className}>
    <a href="/" className="hover:text-pink-400">
      <li>Home</li>
    </a>
    <a href="#gallery" className="hover:text-pink-400">
      <li>Gallery</li>
    </a>
    <a href="#about" className="hover:text-pink-400">
      <li>About</li>
    </a>
  </ul>
);

// Desktop navigation links
const NavLinks = () => (
  <NavigationLinks className="hidden text-lg font-bold lg:flex space-x-8" />
);

// Mobile navigation menu
const MobileNav = ({ toggleMobileNav }) => (
  <div className="fixed inset-0 flex flex-col items-center lg:hidden bg-neutral-100">
    <button onClick={toggleMobileNav} className="self-end p-6 text-4xl">
      <IoMdClose />
    </button>
    <NavigationLinks className="flex flex-col items-center text-4xl space-y-2" />
    <div className="pt-6">
      <SocialIcons />
    </div>
  </div>
);

// Social icons component
const SocialIcons = () => (
  <ul className="flex text-lg font-bold space-x-4">
    <a
      target="_blank"
      href="https://www.facebook.com/Flaviasweets/"
      className="hover:text-pink-400"
    >
      <li>
        <FaFacebook className="w-6 h-6" />
      </li>
    </a>
    <a
      target="_blank"
      href="https://www.instagram.com/flavias_sweets/"
      className="hover:text-pink-400"
    >
      <li>
        <FaInstagram className="w-6 h-6" />
      </li>
    </a>
  </ul>
);

// Main navigation component
export default function ReactNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileNav = () => setIsOpen(!isOpen);

  return (
    <header className="px-3 py-10 sm:px-6">
      <div className="flex items-center justify-between max-w-3xl mx-auto lg:max-w-6xl">
        <Logo />
        {/* <NavLinks /> */}
        <div className="flex items-center space-x-4">
          <SocialIcons />
          {/* <button onClick={toggleMobileNav}>
            <TiThMenu className="w-6 h-6 text-pink-400 lg:hidden" />
          </button> */}
          {/* {isOpen && <MobileNav toggleMobileNav={toggleMobileNav} />} */}
        </div>
      </div>
    </header>
  );
}
