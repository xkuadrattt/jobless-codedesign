import React, { useState } from "react";

const Header = function () {
  const [menu, setMenu] = useState(true);

  const handleMenu = function () {
    setMenu(function (prevMenu) {
      return !prevMenu;
    });
  };

  // Hamburger Menu Reposive Styling Toggle
  const hamburgerOff =
    "[&>span]:my-[4px] [&>span]:w-6 [&>span]:h-[2px] [&>span]:bg-black";

  const hamburgerOn =
    "[&>span]:origin-center [&>span:first-child]:rotate-[45deg] [&>span:last-child]:-translate-y-[.25rem] [&>span:first-child]:translate-y-[.5rem] [&>span:nth-child(2)]:opacity-0 [&>span:last-child]:rotate-[-45deg]";

  // End Hamburger Menu Reposive Styling Toggle

  // Navbar Menu Reposive Styling Toggle

  const navMobile =
    "flex flex-col gap-4 absolute top-[3.6rem] w-full h-[90vh] overflow-hidden z-30 left-0 right-0 bg-white/[.95] backdrop-blur md:static md:w-auto md:flex-row md:h-auto md:gap-0";

  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-white/20 backdrop-blur font-primary">
      <div className="container mx-auto p-4 sm:px-0 flex justify-between relative md:static items-center [&>nav]:md:flex [&>nav]:lg:basis-9/12 [&>nav]:xl:basis-[72%] [&>nav]:md:justify-between">
        <a href="/" className="text-xl font-semibold">
          Jobless
        </a>
        <button
          onClick={handleMenu}
          className={`${
            menu ? hamburgerOff : hamburgerOn
          } [&>span]:my-[4px] [&>span]:w-6 [&>span]:h-[2px] [&>span]:bg-black md:hidden [&>span]:flex [&>span]:flex-col [&>span]:duration-300`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${menu ? "hidden" : navMobile}`}>
          <ul className="flex flex-col gap-4 pt-6 text-center md:flex-row md:pt-0 items-center [&>li>a]:block [&>li>a]:w-[8.5rem] [&>li>a]:text-black/80 [&>li>a:hover]:text-black/100 [&>li>a:hover]:font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Post a Job</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button className="px-4 py-2 border border-black/20 max-w-[10rem] self-center hover:bg-white/20 rounded-md">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
