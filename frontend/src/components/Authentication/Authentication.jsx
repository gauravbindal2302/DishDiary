import React from "react";

export default function Authentication() {
  return (
    <>
      <div className="authentication-page h-full flex items-center flex-col justify-center bg-gray-500">
        <h1 className="heading text-2xl text-[#9a9999] mb-4">
          <span className="text-[#3cb371]">Dish</span>Diary
        </h1>

        <p className="sub-heading text-xl text-[#aebc5d] mb-6 text-center">
          Discover the World's Recipes: Where Every Taste Matters
          <span className="animation">.</span>
        </p>
        <div className="button-container flex flex-col items-center">
          <button className="google-signup-button flex items-center py-1 px-2 text-lg border-none rounded-lg cursor-pointer">
            <img
              src="google.jpg"
              alt=""
              className="signup-button-image w-2 mr-2"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </>
  );
}
