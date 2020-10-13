import React, { useEffect } from "react";
import "./App.css";
import Chat from "./chat/Chat";
import Sidebar from "./sidebar/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./login/Login";
import { auth } from "./firebase/firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
