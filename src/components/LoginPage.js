import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "./validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/constants";
const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const updateForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const dispatch = useDispatch();
  const checkValidations = () => {
    if (!isSignInForm) {
      const message = validate(
        email.current.value,
        password.current.value,
        fullname.current.value
      );
      setErrorMessage(message);
      if (message) return;
    } else {
      const message = validate(email.current.value, password.current.value, "");
      setErrorMessage(message);
      if (message) return;
    }
    // Sign Up logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullname.current.value,
          photoURL:
            "https://lh3.googleusercontent.com/a/ACg8ocI44cgCjC9BTSd-Isv97VFpZKb3Wsfti2FW6Mgm1W4BjA=s96-c",
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="">
        <img
          src={BG_LOGO}
          alt="background-wallpaper"
          className="h-screen object-cover fixed w-screen"
        />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="absolute flex-col md:mx-auto my-20 md:my-auto md:w-1/3  w-screen border-2 border-black md:px-10 md:py-10 py-5 px-10 bg-opacity-85 bg-black right-0 left-0 md:mt-[12%]"
      >
        <p className="text-white md:text-3xl text-xl  mb-6 mt-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <div className="my-6">
          <input
            ref={email}
            type="text"
            placeholder="Enter email or phone number"
            className="border-2 w-full border-black md:text-lg text-sm p-3 bg-gray-600 text-white"
          />
        </div>
        {!isSignInForm && (
          <div className="my-6">
            <input
              ref={fullname}
              type="text"
              placeholder="Enter Full Name"
              className="border-2 w-full border-black md:text-lg text-sm p-3 bg-gray-600 text-white"
            />
          </div>
        )}
        <div className="my-6">
          {/* <p className="text-white text-lg">Password</p> */}
          <input
            ref={password}
            type="password"
            placeholder="Enter password"
            className="border-2 border-black w-full md:text-lg text-sm p-3 bg-gray-600 text-white"
          />
        </div>
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          className="bg-red-600 mt-2 mb-5 w-full md:text-lg text-sm p-3 text-white"
          onClick={checkValidations}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-lg text-gray-500 mr-2">
            {isSignInForm ? "New to Netflix?" : "Already Registered!"}
          </p>
          <p
            className="md:text-lg text-sm text-white cursor-pointer group group-hover:underline"
            onClick={updateForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in now"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
