import React from "react";

import search from "../images/svg/search.svg";
import location from "../images/svg/location.svg";

const Search = () => {
  return (
    <>
      <form
        action=""
        className="w-4/5 -my-20 md:-my-9 p-4  mx-auto bg-white shadow-lg flex  flex-col items-center gap-5 md:gap-0 md:flex-row rounded-lg font-gilroyReg ease-in duration-300"
      >
        <div className="w-full md:w-3/5 flex lg:px-6 ">
          <img src={search} alt="" className=" w-5 h-5 mr-3" />
          <input
            type="text"
            name="term"
            id=""
            className="h-full w-full outline-none text-jb-text"
          />
        </div>
        <div className="w-full md:w-3/5 flex items-center md:px-6  md:border-l border-jb-blue-light ">
          <img src={location} alt="" className=" w-5 h-5 mr-3" />
          <input
            type="text"
            name="location"
            id=""
            className="w-full outline-none text-jb-text"
          />
        </div>
        <div className="form-control w-full md:w-1/5">
            <button className="w-full px-3 py-2 bg-jb-red text-white text-base rounded-xl">Search</button>
        </div>
      </form>
    </>
  );
};

export default Search;
