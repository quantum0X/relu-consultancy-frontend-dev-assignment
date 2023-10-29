import React from "react";
import { Filter, Search } from "../../utils/Icon";

const Feed = () => {
  return (
    <div>
      {/* search */}
      <div className="flex justify-between w-1/2 py-5 px-8 gap-4 bg-white rounded-md">
        <span className="flex items-center gap-2">
          <Search />
          <input
            type="search"
            placeholder="Search here..."
            className="outline-none"
          />
        </span>
        <span className="flex items-center gap-2">
          <Filter />
          Filters
        </span>
      </div>
      Feed
    </div>
  );
};

export default Feed;
