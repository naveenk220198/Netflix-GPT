import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USERLOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //  This will be called when component is unmounted -> unsubscribes the onAuthStateChanged method
    return () => unsubscribe();
  }, []);
  return (
    <div className="justify-between flex">
      <div className="w-screen absolute px-14 pt-4 z-10 bg-gradient-to-b from-black justify-between flex">
        <img className="w-44 h-16" src={LOGO} alt="logo" />
        {user && (
          <div className="flex m-2">
            <img
              alt="profile-logo"
              className="w-10 h-10 mr-2 rounded-sm"
              src={USERLOGO}
            ></img>
            <button
              className="h-10 px-2 bg-red-600 ml-2 rounded-sm text-white text-lg font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
