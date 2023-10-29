import React from "react";
import { Filter, Search } from "../../utils/Icon";
import { Post1, UserDP1 } from "../../utils/ImageImport";
import Post from "./Post";

const data = [
  {
    profile: UserDP1,
    name: "Lara Leones",
    username: "thewallart",
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    postImage: Post1,
    likes: "9.8k",
    comments: "8.6k",
    share: "7.2k",
  },
  {
    profile: UserDP1,
    name: "Lara Leones",
    username: "thewallart",
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    postImage: Post1,
    likes: "9.8k",
    comments: "8.6k",
    share: "7.2k",
  },
  {
    profile: UserDP1,
    name: "Lara Leones",
    username: "thewallart",
    caption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    postImage: Post1,
    likes: "9.8k",
    comments: "8.6k",
    share: "7.2k",
  },
];
const Feed = () => {
  return (
    <div
      id="post"
      className="h-full flex flex-col w-1/2 gap-4 overflow-y-scroll"
    >
      <div className="flex justify-between px-8 py-5 bg-white rounded-xl sticky top-0 ">
        {/* search */}
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
      {/* posts */}
      <div className="h-full"></div>
      {data.map((ele, i) => (
        <Post key={i} {...ele} />
      ))}
    </div>
  );
};

export default Feed;
