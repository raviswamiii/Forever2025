import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";
import {toast} from "react-toastify"

export const Login = ({setToken}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + "/api/user/admin", {email, password})
            console.log(response)
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <form onSubmit={onSubmitHandler} className="border px-8 py-6 w-[26%] rounded-md bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <div className="text-sm flex flex-col gap-2 text-gray-700 font-medium">
          <p>Email Address</p>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border px-3 py-2 rounded-md text-base" type="email" placeholder="your@email.com" required/>
          <p>Password</p>
          <input onChange={(e)=>setPassword(e.target.value)} value={password} className="border px-3 py-2 rounded-md text-base" type="password" placeholder="Enter your password" required/>
        </div>
        <button className="border text-white bg-black mt-5 rounded-md w-full py-2" type="submit">Login</button>
      </form>
    </div>
  );
};
