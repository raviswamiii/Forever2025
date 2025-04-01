import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

export const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { backend_url, navigate, token, setToken } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backend_url + "/api/user/register", {
          name,
          email,
          password,
        });
        console.log(response.data);

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backend_url + "/api/user/login", {
          email,
          password,
        });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if(token){
      navigate("/")
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex items-center gap-2 mb-5">
        <h1 className="prata-regular text-3xl">{currentState}</h1>
        <p className="bg-black w-10 h-[2px]"></p>
      </div>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center"
      >
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="outline-none border w-[28vw] border-gray-700 px-3 py-2 mb-4"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="outline-none border w-[28vw] border-gray-700 px-3 py-2 mb-4"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="outline-none border w-[28vw] border-gray-700 px-3 py-2"
          type="password"
          placeholder="Password"
        />
        <div className="flex text-sm justify-between w-[28vw] pt-2 text-gray-800">
          <p className="cursor-pointer">Forgot your password?</p>

          <div className="cursor-pointer">
            {currentState === "Sign Up" ? (
              <p onClick={() => setCurrentState("Login")}>Login here</p>
            ) : (
              <p onClick={() => setCurrentState("Sign Up")}>Create account</p>
            )}
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
