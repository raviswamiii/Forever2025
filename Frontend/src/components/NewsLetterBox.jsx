import React from "react";

export const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="mt-16 flex flex-col items-center text-center">
      <h1 className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, illum.</p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
