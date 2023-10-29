import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { signInHandler, currentUser } = useAuth();
  const navigate = useNavigate();

  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandle = async (e) => {
    e.preventDefault();
    if (password === "") {
      alert("Enter your password");
      return;
    }
    setIsLoading(true);
    try {
      await signInHandler(mail, password);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <>
      {" "}
      {!currentUser ? (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <form className="flex flex-col gap-4 max-w-2xl">
            <input
              type="text"
              value={mail}
              className="text-lg px-4 py-2 rounded-lg"
              onChange={(e) => setMail(e.target.value)}
              placeholder="Enter your mail"
            />
            <input
              type="password"
              value={password}
              className="text-lg px-4 py-2 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              disabled={isLoading}
              className="bg-gray-300 text-xl font-medium px-2 py-1"
              onClick={loginHandle}
            >
              Log in
            </button>
          </form>
          <div className="mt-4">
            create new Account,{" "}
            <Link to={"/signup"} className="text-blue-400 underline">
              Sign Up
            </Link>
          </div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default LoginPage;
