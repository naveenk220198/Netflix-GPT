import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANG_CODES, LOGO, USERLOGO } from "../utils/constants";
import { addGptMovieResults, toggleGptSearchView } from "../utils/gptSlice";
import { updateLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(addGptMovieResults({ movieNames: null, movieResults: null }));
  };
  const handleLanguageChange = (e) => {
    dispatch(updateLanguage(e.target.value));
  };
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
    <div className="md:justify-between md:flex flex-col bg-black">
      <div className="md:w-screen md:absolute md:px-12 md:py-10 p-4 z-10 bg-gradient-to-b from-black md:justify-between flex flex-col md:flex-row w-screen">
        <img
          className="md:w-52 md:h-20 md:mx-0 md:my-0 w-50 h-20 mx-auto my-2 "
          src={LOGO}
          alt="logo"
        />
        {user && (
          <div className="flex justify-between md:my-2 my-0">
            <img
              alt="profile-logo"
              className="md:w-12 md:h-12 md:mx-4 mx-1 md:rounded-md rounded-sm h-8 w-8 hidden md:block"
              src={USERLOGO}
            ></img>
            {showGptSearch && (
              <select
                className="md:py-2 md:text-xl md:h-12 md:w-32 rounded-sm md:rounded-md px-2 py-1 h-8  bg-gray-500  text-white md:mx-4 text-sm w-20 "
                onChange={handleLanguageChange}
              >
                {LANG_CODES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.value}
                  </option>
                ))}
              </select>
            )}

            <span>{showGptSearch}</span>
            <div className="md:h-12 md:w-40 md:text-xl md:px-6 md:py-2 md:mx-4 w-26 h-8 px-2 py-2 bg-cyan-600 md:rounded-md rounded-sm text-white text-sm font-bold">
              <button onClick={handleGptSearch}>
                {showGptSearch ? "Home Page" : "GPT Search"}
              </button>
            </div>
            <button
              className="md:h-12 h-8 md:px-2 w-20 md:w-28 md:mr-10 md:py-2 bg-red-600 mx-1 md:rounded-md text-white text-sm md:text-xl font-bold px-1 rounded-sm mr-4"
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
