import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Component/Header";
import Slidebar from "./Component/Slidebar";
import Prepare from "./Component/Prepare";
import News from "./Component/News";
import Login from "./Component/Login";
import {login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Config/firebase";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential => {
      if(userCredential){
        // User loged in
        dispatch(
          login({
            email: userCredential.email,
            uid: userCredential.uid,
            displayName: userCredential.displayName
          })
        )
      }else{
        // User loged out
        dispatch(logout());
      }
    }))
  }, [dispatch])
  
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App bg-[#f3f3ef;] h-[100vh]">
          <Header />
          <div className="sm:grid grid-flow-col gap-6 sm:w-fit sm:mx-auto">
            <Slidebar />
            <Prepare />
            <News />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
