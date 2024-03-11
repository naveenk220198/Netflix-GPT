import React, { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const updateForm = () => {
    setIsSignInForm(!isSignInForm);
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
      <form className="absolute flex-col mx-auto my-20 w-1/4 border-2 border-black p-10 bg-opacity-85 bg-black right-0 left-0">
        <p className="text-white text-3xl my-5">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <div className="my-4">
          <input
            type="text"
            placeholder="Enter email or phone number"
            className="border-2 w-full border-black text-sm p-3 bg-gray-600 text-white"
          />
        </div>
        {!isSignInForm && (
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="border-2 w-full border-black text-sm p-3 bg-gray-600 text-white"
            />
          </div>
        )}
        <div className="my-5">
          {/* <p className="text-white text-lg">Password</p> */}
          <input
            type="password"
            placeholder="Enter password"
            className="border-2 border-black w-full text-sm p-3 bg-gray-600 text-white"
          />
        </div>
        <button className="bg-red-600 my-4 w-full text-sm p-3 text-white">
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
