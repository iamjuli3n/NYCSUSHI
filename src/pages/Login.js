import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { useAuth } from "@/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter(); // Initialize useRouter hook
  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/authenticate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.status === 200) {
        // Successfully authenticated
        localStorage.setItem("token", data.token); // Save token to local storage
        setIsLoggedIn(true);  // Update the state in AuthContext
        router.push("/Order"); // Navigate to another page
        console.log("Token:", data.token);
      } else {
        // Authentication failed
        setErrorMessage(data.error || "Authentication failed.");
        console.log("Error:", data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="w-full h-full top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        <div className="flex justify-center items-center h-full">
          {isLoggedIn ? (
            <p className="text-4xl font-bold text-center py-8 text-white">
              You're already logged in.
            </p>
          ) : (<form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto p-8 border">
            <h2 className="text-4xl font-bold text-center py-8 text-white">Sushi Muchi Login</h2>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Username:</label>
              <input className="border bg-gray-100 p-2" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-white">Password:</label>
              <input className="border bg-gray-100 p-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button className="w-full py-3 mt-8 hover:bg-black duration-300 border relative text-white hover:text-white cursor-pointer">Sign in</button>
            <p className="text-white"><input className="mr-2" type="checkbox"></input>Remember this account</p>
            <p className="text-white"><span className="text-blue-500 cursor-pointer"><Link href="/Signup">Sign up</Link></span> to become a member</p>
          </form>)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login