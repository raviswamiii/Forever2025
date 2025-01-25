import React, { useState } from "react";

export const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex items-center gap-2 mb-5">
        <h1 className="prata-regular text-3xl">{currentState}</h1>
        <p className="bg-black w-10 h-[2px]"></p>
      </div>
      <form className="flex flex-col justify-center items-center">
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            className="outline-none border w-[28vw] border-gray-700 px-3 py-2 mb-4"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="outline-none border w-[28vw] border-gray-700 px-3 py-2 mb-4"
          type="email"
          placeholder="Email"
        />
        <input
          className="outline-none border w-[28vw] border-gray-700 px-3 py-2"
          type="password"
          placeholder="Password"
        />
        <div className="flex text-sm justify-between w-[28vw] pt-2 text-gray-800">
          <p className="cursor-pointer">Forgot your password?</p>

          <div className="cursor-pointer">
            {currentState === "Sign Up" ? <p onClick={()=>setCurrentState("Login")}>Login here</p> : <p onClick={()=>setCurrentState("Sign Up")}>Create account</p>}
          </div>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-5 py-3 text-sm w-[10vw] mt-10"
        >
          {currentState === "Sign Up" ? "Sing Up" : "Sign in"}
        </button>
      </form>
    </div>
  );
};
