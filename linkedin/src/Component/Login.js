import React, { useState } from "react";
import { auth } from "../Config/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handelPass = (e) => {
    e.preventDefault();
    let pass = document.getElementById("myInput");
    if (pass.type === "password") {
      pass.type = "text";
      document.getElementById("btn").innerHTML = "Hide";
    } else {
      pass.type = "password";
      document.getElementById("btn").innerHTML = "Show";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "") {
        const signin = await signInWithEmailAndPassword(auth, email, password);
        await dispatch(
          login({
            email: signin.user.email,
            uid: signin.user.uid,
            displayName: signin.user.displayName,
          })
        );
      } else {
        alert("Please signup first");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    try {
      if (email !== "" && password !== "" && name !== "") {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(auth.currentUser, { displayName: name });
        await dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: name,
          })
        );
        setEmail("");
        setPassword("");
        setName("");
      }
    } catch (err) {
      console.log(err.message);
    }
    if (email === "") {
      alert("please enter email");
    }
    if (password === "") {
      alert("please enter password");
    }
    if (password.length <= 5 && password.length >= 1) {
      alert(" Password should be at least 6 characters ");
    }
    if (name === "") {
      alert("please enter name");
    }
  };

  // const signinWithGoogle = async () => {
  //   try{
  //     const googleUser = await signInWithPopup(auth, provider)
  //   }catch(err){
  //     console.log(err.message)
  //   }
  // }

  return (
    <>
      {/*========
    Navbar
    =========== */}
      <div className="mx-3 my-4 flex items-center justify-between md:mx-16">
        <img
          className="h-[30px] md:h-[6vh] md:w-[3vw] w-[30px]"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedicon"
        />
        <div className="space-x-4">
          <button
            className="cursor-poniter text-blue-500 font-bold border-[1px] border-blue-500 py-2 px-3 md:py-3 md:px-5 rounded-[25px] hover:border-blue-600 hover:bg-blue-50"
            onClick={signup}
          >
            Sign up
          </button>
        </div>
      </div>

      {/*========
    main sign in
    =========== */}
      <div className="sm:flex items-center justify-between md:ml-16">
        <div className="mx-3 md:w-[38vw] mb-4">
          <h2 className="text-3xl md:text-5xl text-yellow-800 font-[300] my-4 flex-wrap overflow-y-hidden">
            Welcome to your professional community
          </h2>
          <form className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-600 font-bold text-[14px]"
            >
              Name
            </label>
            <input
              className="outline-none border-[1px] border-gray-600 h-[50px] rounded-[4px] my-1 px-4 py-3 hover:border-black"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <label
              htmlFor="email"
              className="text-gray-600 font-bold text-[14px]"
            >
              Email or phone
            </label>
            <input
              className="outline-none border-[1px] border-gray-600 h-[50px] rounded-[4px] mt-1 px-4 py-3 hover:border-black"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <label
              htmlFor="passord"
              className="text-gray-600 font-bold mt-4 text-[14px]"
            >
              Password
            </label>
            <input
              className="outline-none border-[1px] border-gray-600 h-[50px] rounded-[4px] mt-1 px-4 py-3 hover:border-black overflow-y-hidden"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="myInput"
            />
            <button
              className="text-end ml-[11rem] font-semibold text-[16px] text-blue-500 outline-none"
              onClick={handelPass}
              id="btn"
            >
              show
            </button>
            <p className="text-blue-500 font-bold text-1xl mt-4 cursor-pointer">
              Forgot password?
            </p>
            <button
              className="w-full bg-blue-500 py-3 font-bold text-white rounded-[25px] mt-4 hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Sign in
            </button>
          </form>
        </div>

        {/*========
    brain img
    =========== */}
        <div className="flex justify-center my-4">
          <img
            className="h-[13rem] sm:h-[60vh] md:h-[75vh]"
            src="https://static.licdn.com/aero-v1/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
