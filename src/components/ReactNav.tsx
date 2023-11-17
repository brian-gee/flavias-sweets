import { useState } from 'react';
import Logo from './Logo';

const NavLinks = () => {
  return (
    <ul className="flex space-x-8 font-bold">
      <a href="/" className="hover:text-blue-100">
        <li>Home</li>
      </a>
      <a href="/about" className="hover:text-blue-100">
        <li>About</li>
      </a>
      <a href="/gallery" className="hover:text-blue-100">
        <li>Gallery</li>
      </a>
      <a href="/meet" className="hover:text-blue-100">
        <li>Meet Flavia</li>
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
        <div>Nav logos</div>
      </div>
    </header>
  );
}
