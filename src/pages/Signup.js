import React, { useState } from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const goBack = () => {
    router.back();
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform validation here (e.g., check if passwords match)
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    };

    try {
      const response = await fetch('http://localhost:8000/signup/', requestOptions);
      if (response.ok) {
        const data = await response.json();
        setIsSignupSuccessful(true);
        router.push('Login')
      } else {
        setIsSignupSuccessful(false);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setIsSignupSuccessful(false);
    }
  };

  return (
    <div>
        <NavBar />
        <div className="w-full h-full top-[90px] bg-zinc-900/70">
        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute -z-10"></img>
        
        <div className="flex justify-center items-center h-full">
            <form onSubmit={handleSignup} className="max-w-[400px] w-full mx-auto border p-8">
              <BiArrowBack onClick={goBack} className="text-white relative cursor-pointer text-[20px]" />
              <h2 className="text-4xl font-bold text-center py-8 relative text-white">Sushi Muchi Sign Up</h2>
              {isSignupSuccessful === false && (
                <p className="text-red-500 relative mb-2">Signup failed! Please try again.</p>
              )}
              <div className="flex flex-col mb-4">
                <label className="text-white relative mb-2">Email:</label>
                <input className="border relative bg-gray-100 p-2" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-white relative mb-2">Username:</label>
                <input className="border relative bg-gray-100 p-2" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              {errorMessage && <p className="text-red-500 relative mb-2">{errorMessage}</p>}
              <div className="flex flex-col">
                <label className="text-white relative mb-2">Password:</label>
                <input className="border relative bg-gray-100 p-2" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col">
                <label className="text-white relative mb-2">Confirm Password:</label>
                <input className="border relative bg-gray-100 p-2" type="password" placeholder="confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <button type="submit" className="w-full py-3 mt-8 hover:bg-black duration-300 border relative text-white hover:text-white cursor-pointer">
                Sign Up
              </button>
            </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
