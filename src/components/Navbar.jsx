import { useState } from "react";
import Glogo from "../assets/fancy-letter-g-icon.svg";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export default function Navbar({ handleTheme, theme, handleSearch, carts }) {
  const [isMenu, setIsMenu] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);
  const totalItems = carts.reduce((sum, item) => sum + item.quantity, 0);

  function handleMenu() {
    setIsMenu(!isMenu);
  }

  const onThemeClick = () => {
    setIsVibrating(true);
    handleTheme();
    setTimeout(() => {
      setIsVibrating(false);
    }, 400);
  };

  const navLinks = [
    { name: "Men" },
    { name: "Women" },
    { name: "Technology" },
    { name: "Beauty" },
    { name: "Decoration" },
    { name: "Sport" },
  ];

  return (
    <>
      <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 py-3 px-3 sm:px-5 sticky top-0 z-40">
        <div className="cursor-pointer flex">
          <NavLink to="/">
            <h1 className="hidden sm:block font-bold text-3xl font-sans uppercase text-zinc-900 dark:text-zinc-100">
              Genius
            </h1>
            <img
              src={Glogo}
              alt="Genius"
              className={`w-8 sm:w-10 sm:hidden hover:scale-105 ${theme === "dark" ? "svg-white" : ""}`}
            />
          </NavLink>
        </div>

        {/* Desktop Links (Hidden on mobile/tablet, shown on lg screens) */}
        <ul className="hidden lg:flex gap-3 lg:gap-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={`/${link.name.toLowerCase()}`}
                className={({ isActive }) =>
                  `cursor-pointer  text-zinc-900 dark:text-zinc-100 hover:scale-105 inline-block hover:font-bold transition-transform ${isActive ? "scale-110 font-bold" : "font-semibold"}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center relative">
            <button
              title="search"
              onClick={handleSearch}
              className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center lg:absolute left-0 top-0 bottom-0 hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer"
            >
              <CiSearch className="font-extralight text-zinc-800 dark:text-zinc-100 text-xl sm:text-2xl" />
            </button>
            <input
              onFocus={handleSearch}
              type="text"
              placeholder="Search"
              className="bg-gray-200 dark:bg-gray-600 h-10 w-45 pl-11 outline-none rounded-3xl font-semibold hidden lg:block placeholder:text-zinc-900 dark:placeholder:text-zinc-100"
            />
          </div>

          <button
            title="cart"
            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer relative"
          >
            <NavLink to="/cart">
              <IoBagOutline className="text-xl sm:text-2xl  hover:scale-105 transition-transform" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[8px] sm:text-[10px] font-bold pt-1">
                  {totalItems}
                </span>
              </div>
            </NavLink>
          </button>
          {/* Order */}
          <button
            title="orders"
            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer"
          >
            <NavLink to="/orders">
              <TbTruckDelivery
                className={`text-xl sm:text-2xl ${theme === "dark" ? "text-zinc-50" : "text-zinc-950"}`}
              />
            </NavLink>
          </button>
          {/* Theme Toggle */}
          <button
            title="theme"
            onClick={onThemeClick}
            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer"
          >
            <MdDarkMode
              className={`text-xl sm:text-2xl ${theme === "dark" ? "text-zinc-50" : "text-zinc-950"} ${
                isVibrating ? "animate-rotate" : ""
              }`}
            />
          </button>
          {/* Hamburger Icon */}
          <button
            title="menu"
            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full flex lg:hidden items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 cursor-pointer relative"
          >
            <FiMenu
              onClick={handleMenu}
              className="text-xl sm:text-2xl cursor-pointer lg:hidden hover:scale-105 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer & Backdrop */}
      {isMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay to dim background content */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleMenu}
          ></div>

          {/* Slide-over Drawer */}
          <div className="absolute top-0 right-0 w-[70%] sm:w-[50%] h-full bg-gray-100 dark:bg-gray-900 p-6 flex flex-col shadow-2xl">
            <HiX
              className="ml-auto text-3xl cursor-pointer hover:scale-110 text-zinc-900 dark:text-zinc-100 mb-8"
              onClick={handleMenu}
            />
            <ul className="flex flex-col items-start gap-6 text-xl">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  onClick={handleMenu}
                  className="cursor-pointer font-semibold text-zinc-900 dark:text-zinc-100 hover:scale-105 hover:underline"
                >
                  <NavLink to={`/${link.name.toLowerCase()}`}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
