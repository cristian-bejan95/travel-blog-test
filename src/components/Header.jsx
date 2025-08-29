import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Login from "./Login";

function Header({ darkMode, setDarkMode }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
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
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => setShowLogin(true)} className="login-btn">
            Login
          </button>
          <div className="dark-mode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <FaSun className="cursor-pointer" />
            ) : (
              <FaMoon className="cursor-pointer" />
            )}
          </div>
        </div>
      </header>
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
}

export default Header;
