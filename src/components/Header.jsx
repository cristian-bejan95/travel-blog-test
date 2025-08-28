import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="container flex items-center justify-between p-3 mx-auto my-3 rounded-md shadow-md">
      <a className="text-xl font-bold text-green-600" href="#">
        Travel Blog
      </a>
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <a
              className="font-semibold duration-500 ease-in-out hover:text-green-600"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-semibold duration-500 ease-in-out hover:text-green-600 "
              href=""
            >
              Explore
            </a>
          </li>
          <li>
            <a
              className="font-semibold duration-500 ease-in-out hover:text-green-600 "
              href=""
            >
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="dark-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <FaSun className="cursor-pointer" />
        ) : (
          <FaMoon className="cursor-pointer" />
        )}
      </div>
    </header>
  );
}

export default Header;
