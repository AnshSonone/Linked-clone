import React, {useState} from "react";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {auth} from '../Config/firebase'
import { signOut } from "firebase/auth";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { selectUser } from "../features/userSlice";


const Header = () => {
  const user = useSelector(selectUser)
  const [enable, setEnable] = useState(false)
  const dispatch = useDispatch()

  const handleSignout = () => {
    try{
      dispatch(signOut(auth))
    }catch(err){
      console.error(err)
    } 
  }

  return (
    <>
      <div className="flex items-center sm:justify-between justify-center  shadow-md bg-white sticky top-0 z-10 overflow-y-hidden">
        <div className="flex items-center py-2 ml-6 sm:ml-12">
          <img
            className="h-8 object-contain"
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="Linkedin"
          />
          <div className="flex items-center md:shadow-sm sm:mx-4">
            <SearchOutlinedIcon
              className=" px-[7px] md:py-2 text-5xl md:bg-blue-50 "
              style={{ fontSize: 36 }}
            />
            <input
              className="hidden md:block px-3 py-[6px] outline-none bg-blue-50 w-52"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/*==============
                    Icon section
        ================= */}
        <div className="flex items-center space-x-6 sm:space-x-4 flex-nowrap cursor-pointer sm:mr-12 md:mr-16">
          <div className="flex flex-col items-center md:text-gray-600 md:hover:text-black hover:underline font-semibold">
            <HomeRoundedIcon />
            <p className="hidden sm:block text-xs md:text-gray-600 md:hover:text-black">
              Home
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline font-semibold">
            <PeopleIcon />
            <p className="hidden sm:block text-xs md:text-gray-600 md:hover:text-black">
              My network
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline font-semibold">
            <WorkIcon />
            <p className="hidden sm:block text-xs md:text-gray-600 md:hover:text-black">
              Jobs
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline font-semibold">
            <MessageRoundedIcon />
            <p className="hidden sm:block text-xs md:text-gray-600 md:hover:text-black">
              Messaging
            </p>
          </div>
          <div className="flex flex-col items-center hover:underline font-semibold">
            <NotificationsIcon />
            <p className="hidden sm:block text-xs">Notification</p>
          </div>
          <div className="sm:hidden" >
            <MoreVertOutlinedIcon onClick={()=>setEnable(!enable)}/>
          </div>
          <div>
          <div className="hidden sm:flex flex-col items-center border-r border-gray-300 pr-5 font-semibold" onClick={handleSignout}>
          <Avatar src={user.photoUrl} sx={{ height: '25px', width: '25px'}}>{user.displayName[0]}</Avatar>
            <div className="flex items-center hover:underline ">
              <p className="text-xs">Me</p>
              <ArrowDropDownIcon style={{ fontSize: 20 }} />
            </div>
          </div>
          <button className={`${enable ? "top-[20%] " : "top-[100%] "} absolute bg-gray-100 px-1 py-1 rounded-md shadow-sm outline-none left-[81%] sm:hidden`} onClick={handleSignout}>Signout</button>
          </div>
          {/*==============
                    For bussiness
                    =================*/}
          <div className="hidden sm:flex items-center">
            <div className="hidden sm:flex flex-col items-center hover:underline font-semibold">
              <AppsOutlinedIcon
                className="absolute top-[4px]"
                style={{ fontSize: 27 }}
              />
              <div className="flex items-center mt-[24px]">
                <p className="text-xs">For Bussines</p>
                <ArrowDropDownIcon style={{ fontSize: 20 }} />
              </div>
            </div>
            <p className="text-xs text-center text-yellow-800 hover:text-yellow-900 cursor-pointer underline">
              Try premium for <br />
              free
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
