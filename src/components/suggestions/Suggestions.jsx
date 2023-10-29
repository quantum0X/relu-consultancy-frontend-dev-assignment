import React from "react";
import Artist from "./Artist";
import {
  Artist1,
  Artist2,
  Artist3,
  Artist4,
  Artist5,
  UserDP1,
  UserDP2,
  UserDP3,
  UserDP4,
} from "../../utils/ImageImport";

const data = [
  {
    profile: UserDP2,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist1,
  },
  {
    profile: UserDP3,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist2,
  },
  {
    profile: UserDP4,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist3,
  },
  {
    profile: UserDP2,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist4,
  },
  {
    profile: UserDP3,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist5,
  },
  {
    profile: UserDP3,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist3,
  },
  {
    profile: UserDP3,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist2,
  },
  {
    profile: UserDP4,
    name: "Thomas Edward",
    username: "thewildwithyou",
    photo: Artist5,
  },
];

const Suggestions = () => {
  return (
    <div className="h-full flex flex-col gap-8 ">
      {/* become a seller */}
      <div className="bg-sellerBtn px-12 py-5 text-white rounded-md">
        Become a Seller
      </div>
      {/* other catagories */}
      <div className="">
        <div className="flex gap-6 font-semibold">
          <span className="text-mainBlack">Artists</span>
          <span className="text-midBlack">Photographers</span>
        </div>
        <div id="artist" className="h-[73vh] my-2 pr-2 overflow-y-scroll">
          {data.map((ele, i) => (
            <Artist key={i} {...ele} />
          ))}
        </div>
      </div>

      <div className="flex justify-around text-xs -mt-4">
        <div>Privacy</div>
        <div>Terms of Service</div>
        <div>Cookie Notice</div>
      </div>
    </div>
  );
};

export default Suggestions;
