import React from "react";
import { Rating } from "../../utils/Icon";

const ScrollElement = ({ photo, title, price, rating }) => {
  let originalRating = [];

  for (let index = 0; index < rating; index++) {
    originalRating.push(<Rating />);
  }

  return (
    <div className="flex-shrink-0 mx-2">
      <img
        src={photo}
        alt={title}
        className="w-[250px] h-40 bg-cover rounded-xl"
      />
      <p className="text-sm my-4 font-semibold">{title}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${price}</span>
        <span className="flex text-yellow-400">{originalRating}</span>
      </div>
    </div>
  );
};

export default ScrollElement;
