import React from "react";

export const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-2xl font-medium ">Subscribe now & get 20% off</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, illum.</p>
      <form onSubmit={onSubmitHandler} className="mt-5 w-1/2 border flex">
        <input
          className="w-full outline-none px-3"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black text-xs text-white px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};
