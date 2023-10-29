import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { signUpHandler, currentUser } = useAuth();
  const navigate = useNavigate();

  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [confirmPpassword, setConfirmPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const SingupHandle = async (e) => {
    e.preventDefault();
    if (password === confirmPpassword) {
      alert("password not matched");
      return;
    }
    setIsLoading(true);
    try {
      await signUpHandler(mail, password);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  return (
    <>
      {!currentUser ? (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <form className="flex flex-col gap-4 max-w-2xl bg-orange-100">
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
            <input
              type="password"
              value={confirmPpassword}
              className="text-lg px-4 py-2 rounded-lg"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter confirm password"
            />
            <button
              disabled={isLoading}
              className="bg-gray-300 text-xl font-medium px-2 py-1"
              onClick={SingupHandle}
            >
              Sign up
            </button>
          </form>
          <div className="mt-4">
            Already Account,{" "}
            <Link to={"/login"} className="text-blue-400 underline">
              Log in
            </Link>
          </div>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default SignupPage;
