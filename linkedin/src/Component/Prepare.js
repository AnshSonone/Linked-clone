import React, { useState, useEffect } from "react";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Avatar } from "@mui/material";
import Feed from "./Feed";
import Post from "./Post";
import { db } from "../Config/firebase";
import {
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const Prepare = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [close, setClose] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    const getPost = async () => {
      try {
        const getCollectionRef = collection(db, "posts");
        const q = await query(getCollectionRef, orderBy("time", "desc"));
        await onSnapshot(q, (snapshot) => {
          const newdata = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }));
          setPosts(newdata);
        });
      } catch (err) {
        console.error(err);
      }
    };
    getPost();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    if (input !== "") {
      try {
        const collectionRef = collection(db, "posts");
        await addDoc(collectionRef, {
          name: user.displayName,
          followers: 2333,
          time: serverTimestamp(),
          message: input,
          photoUrl: "",
        });
        setInput("");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handelClose = () => {
    let closeIcon = document.getElementById("closeIcon");
    if (close !== true) {
      closeIcon.style.display = "none";
    } else {
      closeIcon.style.display = "block";
    }
  };

  return (
    <div className="sm:w-fit overflow-y-hidden">
      <div
        className="bg-white mt-2 py-4 sm:rounded-md sm:w-[35rem] shadow-sm md:border-[1px] border-gray-200 "
        id="closeIcon"
      >
        <div className="flex items-cente justify-between  mx-3 my-2">
          <p className="font-bold text-xl">People for you job search</p>
          <ClearOutlinedIcon
            className="cursor-pointer"
            onClick={() => handelClose(setClose(true))}
          />
        </div>
        <div className=" my-2 mx-3 flex items-center space-x-3">
          <div className="bg-gray-300 h-[8px] w-[75%] rounded-md"></div>
          <span className="text-[12px] text-gray-500">0/3 complete</span>
        </div>
        <div className="mx-3">
          <img
            className="rounded-md"
            src={`https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACwog6StkzhzSlK17m4iY5d_Xg.png`}
            alt="linekdin"
          />
          <div className="py-3 px-2 border-[1px] border-gray-200 mt-[-2px]">
            <p className="mb-2">
              Add your work experience and skills to show your strengths to
              recruiters.
            </p>
            <button className="bg-blue-600 font-bold rounded-xl px-3 py-2 text-white">
              Update profile
            </button>
          </div>
        </div>
      </div>
      {/* =============
        Start a post section
        ================= */}
      <div className="bg-white py-3 px-3 my-2">
        <div className="flex items-center">
          <Avatar />
          <form className="flex justify-between ml-2 border-[1px] border-gray-400 py-3 px-4 rounded-[10rem] w-full">
            <input
              className="outline-none text-[14px] text-gray-600 font-bold"
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="opacity-0" onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        {/* ============
        Feed section
      ================ */}
        <Feed />
      </div>
      {/* ============
          Post section
      ================ */}
      <FlipMove>
        {posts.map(
          ({ id, data: { name, followers, time, message, photourl } }) => {
            const postDate = time && time.seconds * 1000;
            const currentDate = Date.now();
            const timeDiff = currentDate - postDate;
            const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

            return (
              <Post
                key={id}
                name={name}
                followers={followers && followers.toString()}
                time={`${Math.floor((daysAgo / 24) * 60)} day${
                  daysAgo !== 1 ? "s" : ""
                } ago`} // Display the number of days ago
                message={message}
                photoUrl={photourl}
              />
            );
          }
        )}
      </FlipMove>
    </div>
  );
};

export default Prepare;
