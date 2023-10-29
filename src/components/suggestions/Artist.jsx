import React from "react";

const Artist = ({ profile, name, username, photo }) => {
  return (
    <div className="h-fit w-fit relative my-4 rounded-lg">
      <img src={photo} alt="pic" />
      <div className="absolute h-full w-full top-0 bg-gradient-to-t from-black to-white opacity-20 rounded-lg"></div>
      <div className="flex gap-3 absolute bottom-3 left-3 drop-shadow-lg">
        <img
          src={profile}
          alt="artist"
          className="border-2 border-white rounded-xl"
        />
        <span className="text-white">
          <p className=" text-lg">{name}</p>
          <p className="text-sm">@{username}</p>
        </span>
      </div>
    </div>
  );
};

export default Artist;
