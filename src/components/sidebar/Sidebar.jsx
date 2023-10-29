import React, { useState } from "react";
import Item from "./Item";
import {
  Home,
  Notification,
  Shop,
  Message,
  Wallet,
  Subscription,
  Profile,
  Setting,
  Logout,
} from "../../utils/Icon";

const data = [
  {
    Icon: <Home />,
    title: "Home",
    isActive: true,
  },
  {
    Icon: <Notification />,
    title: "Notifications",
    isActive: false,
  },
  {
    Icon: <Shop />,
    title: "Shop",
    isActive: false,
  },
  {
    Icon: <Message />,
    title: "Conversation",
    isActive: false,
  },
  {
    Icon: <Wallet />,
    title: "Wallet",
    isActive: false,
  },
  {
    Icon: <Subscription />,
    title: "Subscription",
    isActive: false,
  },
  {
    Icon: <Profile />,
    title: "My Profile",
    isActive: false,
  },
  {
    Icon: <Setting />,
    title: "Settings",
    isActive: false,
  },
];
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0); // change this for different menu
  return (
    <div className="flex flex-col gap-8 pb-4 ">
      {/* logo */}
      <div className="px-6 py-3 flex text-center items-center bg-white text-2xl rounded-md">
        LOGO
      </div>
      <div className="bg-white flex flex-col justify-between h-full py-4 rounded-xl text-midBlack">
        <div>
          {data.map((ele, i) => (
            <Item key={i} {...ele} isActive={activeTab === i} />
          ))}
        </div>

        <div className="px-8 flex items-center gap-2 text-blue-400 text-xl cursor-pointer">
          <Logout /> logout
        </div>
      </div>
      <div className="flex justify-between p-1">
        <span className="text-xs text-midBlack">2022</span>
        <span className="text-xs text-midBlack">Developed by Vishal Singh</span>
      </div>
    </div>
  );
};

export default Sidebar;
