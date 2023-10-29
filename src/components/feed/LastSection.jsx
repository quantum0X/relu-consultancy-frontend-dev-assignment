import React from "react";
import ScrollElement from "./ScrollElement";
import { Scroll1, Scroll2, Scroll3 } from "../../utils/ImageImport";

const data = [
  {
    photo: Scroll1,
    title: "Modern Wall Decor Framed Painting",
    price: "199.99",
    rating: 5,
  },
  {
    photo: Scroll2,
    title: "Modern Wall Decor Framed Painting",
    price: "199.99",
    rating: 4,
  },
  {
    photo: Scroll3,
    title: "Modern Wall Decor Framed Painting",
    price: "199.99",
    rating: 5,
  },
  {
    photo: Scroll1,
    title: "Modern Wall Decor Framed Painting",
    price: "199.99",
    rating: 2,
  },
  {
    photo: Scroll2,
    title: "Modern Wall Decor Framed Painting",
    price: "199.99",
    rating: 4,
  },
  {
    photo: Scroll3,
    title: "Modern Wall Decor Framed Painting",
    price: "199.99",
    rating: 3,
  },
];

const LastSection = () => {
  return (
    <div className="py-2">
      <div id="last-section" className=" flex flex-row  overflow-x-scroll">
        {data.map((ele, i) => (
          <ScrollElement {...ele} />
        ))}
      </div>
    </div>
  );
};

export default LastSection;
