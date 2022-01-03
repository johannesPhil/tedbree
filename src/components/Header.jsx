import React, { useState } from "react";

import logo from "../images/Logo.png";
import Search from "./Search";

const Header = ({ guest }) => {
  const [showNav, setShowNav] = useState(false);

  const toggleMobileNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <header
        className={` ${
          !guest && "relative"
        } w-full px-10 py-4 lg:px-28 bg-jb-blue transition-all duration-500 font-gilroy`}
      >
        <nav className="flex items-center justify-between flex-wrap  p-6">
          <div className="flex flex-col items-start flex-shrink-0 text-white mr-6">
            <img src={logo} className="block" />
            {!guest && (
              <p className="block text-sm text-white">for employers</p>
            )}
          </div>
          {!guest && (
            <span className=" top-32 bigRing before:ringRed after:ringBlue"></span>
          )}
          {guest && (
            <>
              <div className="block lg:hidden">
                <button
                  onClick={toggleMobileNav}
                  className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div
                className={`w-full ${
                  showNav ? "block" : "hidden"
                } lg:flex lg:items-center lg:w-auto text-white`}
              >
                <div className="text-sm lg:flex-grow">
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
                  >
                    Jobs
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
                  >
                    Company Review
                  </a>
                  <a
                    href="#responsive-header"
                    className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
                  >
                    Find Salaries
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-block text-sm px-4 py-2 bg-jb-pink leading-none border rounded text-jb-blue border-white hover:border-transparent hover:text-jb-blue hover:bg-white mt-4 lg:mt-0"
                  >
                    Post Job
                  </a>
                </div>
              </div>
            </>
          )}
        </nav>
        <div className="header-text">
          {guest ? (
            <p className=" my-14 text-2xl text-white">Find Your Dream Job</p>
          ) : (
            <p className=" my-14 text-2xl text-white">Jobs</p>
          )}
        </div>
      </header>
      {guest && <Search />}
    </>
  );
};

export default Header;
