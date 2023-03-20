import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="w-full mt-4 mb-4 bg-white">
        <nav
          className="flex px-4 border-b md:shadow-lg items-center relative pb-5"
          id="nav"
        >
          <a
            className="mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mt-0"
            href="#"
          >
            <img
              src={logo}
              alt="img"
              className="pl-24 h-5 logo"
            />
          </a>
          <ul className="md:px-2 ml-auto sm:flex  md:relative top-full left-0 right-0 mr-24">
            {/* <li>
              <a
                href="#nav"
                className="flex lg:text-3xl text-3xl  p-4 items-center hover:bg-gray-50"
              >
                <span>Home</span>
              </a>
            </li> */}
            <li>
              <a
                href="http://spicmacay-nitdgp.s3-website.ap-south-1.amazonaws.com"
                className="flex lg:text-3xl text-3xl md:visible p-4 items-center hover:bg-gray-50 "
              >
                <span>Team</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex lg:text-3xl text-3xl p-4 items-center hover:bg-gray-50"
              >
                <span>About Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <a
        href="http://spicmacay-nitdgp.s3-website.ap-south-1.amazonaws.com"
        target="_blank"
        className="bg-purple-600 p-4 visited:text-neutral-50 visited:no-underline hover:no-underline no-underline cursor-pointer rounded-xl white:hover:text-neutral-400 white:focus:text-neutral-400 text-white fixed right-8 bottom-8 z-20"
        style={{ borderRadius: "100%" }}
      >
      </a>
    </div>
  );
};

export default Navbar;
