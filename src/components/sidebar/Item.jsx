import React from "react";

const Item = ({ Icon, title, isActive }) => {
  return (
    <div
      className={
        "pl-8 pr-16 py-1 my-4 flex justify-start gap-3 items-center border-l-2 cursor-pointer font-medium " +
        (isActive ? " border-blue-400 text-mainBlack " : " border-transparent ")
      }
    >
      <span className="text-xl">{Icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default Item;
