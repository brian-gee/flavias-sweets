import { useState } from 'react';
import Logo from './Logo';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const NavLinks = () => {
  return (
    <ul className="flex space-x-8 font-bold text-lg">
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
      <a href="/" className="hover:text-pink-500">
        <li>
          <FaFacebook className="w-7 h-7" />
        </li>
      </a>
      <a href="/" className="hover:text-pink-500">
        <li>
          <FaInstagram className="w-7 h-7" />
        </li>
      </a>
    </ul>
  );
};

export default function ReactNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="xl:px-2">
      <div className="sticky top-0 z-[20] mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <NavLinks />
        <NavIcons />
      </div>
    </header>
  );
}
