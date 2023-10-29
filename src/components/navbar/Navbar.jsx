import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      {/* logo */}
      <div className="px-6 py-3 flex text-center items-center bg-white text-2xl rounded-md">
        LOGO
      </div>
      {/* search */}
      <div className="flex justify-between w-1/2 py-5 px-8 gap-4 bg-white rounded-md">
        <span className="flex items-center gap-2">
          <FiSearch />
          <input
            type="search"
            placeholder="Search here..."
            className="outline-none"
          />
        </span>
        <span className="flex items-center gap-2">
          <LuSettings2 />
          Filters
        </span>
      </div>
      {/* become a seller */}
      <div>
        <div className="bg-sellerBtn px-12 py-5 text-white rounded-md">
          Become a Seller
        </div>
      </div>
    </div>
  );
};

export default Navbar;
