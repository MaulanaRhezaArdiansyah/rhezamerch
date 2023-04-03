import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { InputFormRegister } from "../../molecules/InputFormRegister";
import { OptionRegisterMethod } from "../../molecules/OptionRegisterMethod";

export const Register: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <main className="h-[120vh] bg-black flex justify-center items-center relative">
      <div className="auth-container h-[40rem]">
        <h2 className="text-3xl text-indigo-200 font-semibold text-center mb-2 px-7">
          Dear customer 👋
        </h2>
        <p className="text-md text-indigo-200 text-center mb-6 px-7">
          Discover the world's best merchandise store and find your own.
        </p>
        <InputFormRegister />
        <div className="flex items-center justify-center gap-2 px-7 mb-6">
          <div className="w-[72px] h-1 bg-indigo-100 rounded-full"></div>
          <p className="text-indigo-200 text-sm">or sign up with</p>
          <div className="w-[72px] h-1 bg-indigo-100 rounded-full"></div>
        </div>
        <OptionRegisterMethod />
        <p className="px-5 text-center text-indigo-200">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            className="text-indigo-400 cursor-pointer hover:text-indigo-500 duration-100"
          >
            Sign in now!
          </span>
        </p>
      </div>
    </main>
  );
};
