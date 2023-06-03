import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import Socialtiles from "./Socialtiles";

const Post = forwardRef(({ name, followers, time, message, photoUrl }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white py-2 my-2 sm:w-[35rem] sm:rounded-[10px] shadow-sm "
    >
      <div className="flex mx-3 pt-[2px] cursor-pointer">
        <Avatar sx={{ height: "49px", width: "52px" }} variant="square">
          {name[0]}
        </Avatar>
        <div className="ml-1">
          <div className="flex justify- items-center mt-[-4px] w-[100%]">
            <h2 className="font-bold text-[14px] hover:underline hover:text-blue-500">
              {name}
            </h2>
          </div>
          <p className="text-[12px] text-gray-500 mt-[-2px]">
            {followers} followers
          </p>
          <p className="text-[12px] text-gray-500 ">{time}</p>
        </div>
      </div>
      <div className="mx-2 ">
        <div className="my-2 text-[14px]">
          <p>{message}</p>
        </div>
        <img className="w-[100%] object-contain" src={photoUrl} alt="" />
      </div>
      <div className="flex items-center justify-between mx-3">
        <div className="flex items-center">
          <Avatar sx={{ height: "13px", width: "13px" }} className="mt-[4px]" />
          <Avatar
            sx={{ height: "13px", width: "13px" }}
            className="absolute left-[-8%] top-[2px]"
          />
          <Avatar
            sx={{ height: "13px", width: "13px" }}
            className="absolute left-[-16%] top-[2px]"
          />
          <p className="text-[13px] pt-1 text-gray-500 ">230</p>
        </div>
        <div className="flex items-center">
          <p className="text-[13px] pt-1 text-gray-500">23 comments</p>
          <p className="h-[2px] mt-[-5px] mx-[2px] rounded-md opacity-0">-</p>
          <p className="text-[13px] pt-1 text-gray-500">2 replies</p>
        </div>
      </div>
      {/*============
                Socialtiles section
            =====================*/}
      <Socialtiles />
    </div>
  );
});

export default Post;
