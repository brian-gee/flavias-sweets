import { useState } from 'react';
import Logo from './Logo';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex space-x-8 font-bold text-lg">
      <a href="/" className="hover:text-pink-500">
        <li>Home</li>
      </a>
      <a href="/about" className="hover:text-pink-500">
        <li>About</li>
      </a>
      <a href="/gallery" className="hover:text-pink-500">
        <li>Gallery</li>
      </a>
      <a href="/meet" className="hover:text-pink-500">
        <li>Meet Flavia</li>
      </a>
    </ul>
  );
};

const NavIcons = () => {
  return (
    <ul className="flex space-x-4 font-bold text-lg">
      <a
        href="https://www.facebook.com/Flaviasweets/"
        className="hover:text-pink-500">
        <li>
          <FaFacebook className="w-6 h-6" />
        </li>
      </a>
      <a
        href="https://www.instagram.com/flavias_sweets/"
        className="hover:text-pink-500">
        <li>
          <FaInstagram className="w-6 h-6" />
        </li>
      </a>
    </ul>
  );
};

const MobileNav = ({ toggleMobileNav }) => {
  return (
    <ul className="lg:hidden fixed inset-0 bg-white flex flex-col items-center space-y-2 p-6">
      <button onClick={toggleMobileNav} className="self-end px-4 py-2 text-lg">
        <IoMdClose />
      </button>
      <a href="/" className="hover:text-pink-500">
        <li>Home</li>
      </a>
      <a href="/about" className="hover:text-pink-500">
        <li>About</li>
      </a>
      <a href="/gallery" className="hover:text-pink-500">
        <li>Gallery</li>
      </a>
      <a href="/meet" className="hover:text-pink-500">
        <li>Meet Flavia</li>
      </a>
    </ul>
  );
};

export default function ReactNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-3 sm:px-6 py-10">
      <div className="sticky top-0 z-[20] mx-auto flex max-w-3xl lg:max-w-6xl items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center space-x-4">
          <NavIcons />

          <button onClick={toggleMobileNav}>
            <TiThMenu className="lg:hidden text-pink-500 w-6 h-6" />
          </button>
          {isOpen && <MobileNav toggleMobileNav={toggleMobileNav} />}
        </div>
      </div>
    </header>
  );
}
