import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "./validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const updateForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkValidations = () => {
    console.log(email);
    console.log(password);
    debugger;
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
            console.log(user);
            navigate("/browse");
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
          console.log(user);
          navigate("/browse");
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
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-wallpaper"
        />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="absolute flex-col mx-auto my-20 w-1/4 border-2 border-black p-10 bg-opacity-85 bg-black right-0 left-0"
      >
        <p className="text-white text-3xl my-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <div className="my-4">
          <input
            ref={email}
            type="text"
            placeholder="Enter email or phone number"
            className="border-2 w-full border-black text-sm p-3 bg-gray-600 text-white"
          />
        </div>
        {!isSignInForm && (
          <div className="my-4">
            <input
              ref={fullname}
              type="text"
              placeholder="Enter Full Name"
              className="border-2 w-full border-black text-sm p-3 bg-gray-600 text-white"
            />
          </div>
        )}
        <div className="my-5">
          {/* <p className="text-white text-lg">Password</p> */}
          <input
            ref={password}
            type="password"
            placeholder="Enter password"
            className="border-2 border-black w-full text-sm p-3 bg-gray-600 text-white"
          />
        </div>
        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>
        <button
          className="bg-red-600 my-4 w-full text-sm p-3 text-white"
          onClick={checkValidations}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-sm text-gray-500 mr-2">
            {isSignInForm ? "New to Netflix?" : "Already Registered!"}
          </p>
          <p
            className="text-sm text-white cursor-pointer group group-hover:underline"
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
