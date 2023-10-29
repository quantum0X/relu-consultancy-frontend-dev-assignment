import React from "react";
import { Comment, Share, Shop, VerticalMenu } from "../../utils/Icon";

const Post = ({
  profile,
  name,
  username,
  caption,
  postImage,
  likes,
  comments,
  share,
}) => {
  return (
    <div className="bg-white p-5 rounded-md">
      {/* head  */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={profile} alt="profile" />
          <div>
            <p className="text-lg text-mainBlack font-extrabold">{name}</p>
            <p className="text-sm font-semibold text-midBlack">@{username}</p>
          </div>
        </div>
        <div>
          <VerticalMenu />
        </div>
      </div>
      {/* caption */}
      <div className="py-5 font-semibold text-gray-600">
        {caption.length > 100 ? (
          <>
            {caption.slice(0, 99)}{" "}
            <span className="text-sm text-pink-400">Read More</span>
          </>
        ) : (
          <>{caption}</>
        )}
      </div>
      {/* image */}
      <div className="relative">
        <img src={postImage} alt="post" />
        <div className="absolute top-3 right-3 text-white text-2xl font-extrabold ">
          <Shop />
        </div>
      </div>
      {/* hr line */}
      <hr className="border-1 border-gray-200 my-4" />
      {/* other section */}
      <div className="flex gap-5 text-2xl py-2">
        <span className="flex gap-1 font-bold">
          <Shop />
          <p className="text-base">{likes}</p>
        </span>
        <span className="flex gap-1 font-bold">
          <Comment />
          <p className="text-base">{comments}</p>
        </span>
        <span className="flex gap-1 font-bold">
          <Share />
          <p className="text-base">{share}</p>
        </span>
      </div>
    </div>
  );
};

export default Post;
