import { Avatar } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Slidebar = () => {

  const user = useSelector(selectUser)

  return (
    <div>
      {/* ===========
        Profile section
        ============== */}
      <div className="sm:mt-2 sm:rounded-b-md shadow-sm sm:w-[220px] bg-white h-fit sm:border-[1px] border-gray-200">
        <img
          className="object-cover rounded-t-md w-full "
          src={"https://static.vecteezy.com/system/resources/thumbnails/007/885/497/small/mountain-desert-line-art-print-wallpaper-design-for-cover-background-abstract-contemporary-aesthetic-backgrounds-landscapes-illustrations-vector.jpg"}
          alt="cover-background"
        />
        {/* ===========
        avatar pictue section
        ============== */}
        <div className="grid grid-flow-row justify-items-center border-b-[1px] border-gray-200 mt-[-22px]">
          <Avatar src={user.photo} className="mb-2 ">
            {user.displayName[0]}
          </Avatar>
          <h1 className="font-bold hover:underline cursor-pointer">{user.displayName}</h1>
          <p className="text-[12px] text-center text-gray-500 mb-4">
            {user.email}
          </p>
        </div>
        <div className="flex items-center justify-between mx-2 mt-2 hover:bg-gray-200 cursor-pointer">
          <p className="text-xs text-gray-700 font-bold">Connection</p>
          <PersonAddAltRoundedIcon />
        </div>
        <div className="mx-2 mb-2 pd-2 border-b-[1px] border-gray-200 hover:bg-gray-200 cursor-pointer">
          <p className="text-xs font-bold">Grow your network</p>
        </div>
        <div className="my-2 mx-2 pb-2 border-b-[1px] border-gray-200 hover:bg-gray-200 cursor-pointer">
          <p className="text-xs text-gray-700">
            Access exclusive tools & inslights
          </p>
          <p className="text-xs font-bold underline">Try premium for free</p>
        </div>
        <div className="flex items-center my-2 mx-2 hover:bg-gray-200 cursor-pointer">
          <BookmarkIcon className="text-gray-400" style={{ fontSize: 20 }} />
          <p className="text-xs font-bold ml-2">My items</p>
        </div>
      </div>
      {/* ==============
        Discover more part
        ================ */}
      <div className="mt-2 bg-white sm:rounded-md px-2 py-3 sm:w-[220px] border-[1px] border-gray-200 shadow-sm" id="group">
        <p className="text-xs font-bold text-blue-500 hover:underline cursor-pointer">
          Group
        </p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs font-bold text-blue-500 hover:underline cursor-pointer">
            Events
          </p>
          <AddIcon />
        </div>
        <p className="text-xs font-bold text-blue-500 hover:underline cursor-pointer my-2">
          Followed Hashtags
        </p>
        <div className="border-t-[1px] border-gray-200 py-2 cursor-pointer">
          <p className="text-gray-600 text-center text-[14px] font-bold">
            Discover more
          </p>
        </div>
      </div>
      {/* ==============
        Show part
        ================ */}
      <div className="sm:hidden flex items-center py-2 justify-center">
        <p className="text-sm text-gray-600 font-bold">Show more</p>
        <ExpandMoreIcon className="text-gray-700" />
      </div>
    </div>
  );
};

export default Slidebar;
