import React from "react";
import { OptionLoginMethod } from "../../molecules/OptionLoginMethod";
import { InputFormLogin } from "../../molecules/InputFormLogin";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <main className="h-screen bg-black flex justify-center items-center">
      <div className="auth-container">
        <h2 className="text-3xl text-indigo-200 font-semibold text-center mb-2">
          Hello Again
        </h2>
        <p className="text-md text-indigo-200 text-center mb-6">
          Welcome back, you've been missed!
        </p>
        <InputFormLogin />
        <div className="flex items-center justify-center gap-2 px-7 mb-4">
          <div className="w-[72px] h-1 bg-indigo-100 rounded-full"></div>
          <p className="text-indigo-200 text-sm">or sign in with</p>
          <div className="w-[72px] h-1 bg-indigo-100 rounded-full"></div>
        </div>
        <OptionLoginMethod />
        <p className="px-5 text-center text-indigo-200">
          Not a member?{" "}
          <span
            onClick={() => navigate("/auth/register")}
            className="text-indigo-400 cursor-pointer hover:text-indigo-500 duration-100"
          >
            Register now!
          </span>
        </p>
      </div>
    </main>
  );
};
