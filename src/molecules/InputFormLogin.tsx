import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/actions/auth";

export const InputFormLogin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userLoginResult, userLoginError, userLoginSuccess } = useSelector(
    (state: any) => state.AuthReducer
  );

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [click, setClick] = useState<boolean>(false);
  const [closeNotif, setCloseNotif] = useState(true);
  const [buttonSignup, setButtonSignup] = useState<HTMLElement | null>();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch<any>(userLogin(loginData));
    setClick(!click);
    setCloseNotif(false);
  };

  const userData: string | null = userLoginResult;

  // if (userData) {
  //   localStorage.setItem("userLogin", JSON.stringify(userData));
  // }

  const successLogin = () => {
    localStorage.setItem("userLogin", JSON.stringify(userData));
    navigate("/");
  };

  useEffect(() => {
    const button = document.getElementById("button");
    setButtonSignup(button);
  }, []);

  if (closeNotif === false) {
    buttonSignup?.setAttribute("disabled", "true");
  } else {
    buttonSignup?.removeAttribute("disabled");
  }

  return (
    <>
      <form onSubmit={handleLogin} className="px-7 flex flex-col mb-4">
        <input
          onChange={(event) =>
            setLoginData({
              ...loginData,
              email: event.target.value,
            })
          }
          type="text"
          className="auth-form-input mb-2"
          placeholder="Enter email"
        />
        <input
          onChange={(event) =>
            setLoginData({
              ...loginData,
              password: event.target.value,
            })
          }
          type="text"
          className="auth-form-input mb-1"
          placeholder="Password"
        />
        <p className="text-indigo-200 self-end mb-6 cursor-pointer hover:text-indigo-400 duration-100">
          Forgot your password?
        </p>
        <button
          id="button"
          type="submit"
          className={`bg-indigo-950 w-full h-14 rounded-md text-indigo-100 font-bold hover:opacity-90 duration-100 ${
            buttonSignup?.getAttribute("disabled") ? "" : "cursor-pointer"
          }`}
        >
          Sign in
        </button>
      </form>

      {click ? (
        <div
          onClick={() => {
            setClick(!click);
            setCloseNotif(true);
          }}
          className="bg-indigo-500 text-indigo-100 absolute right-14 sm:right-20 top-10 w-60 h-12 rounded-md flex items-center px-3 justify-between cursor-pointer"
        >
          {userLoginResult ? (
            <div
              onClick={() => successLogin()}
              className="flex justify-between items-center h-full w-full"
            >
              <p className="text-sm font-semibold italic">{userLoginSuccess}</p>
              <p>✅</p>
            </div>
          ) : userLoginError ? (
            <div className="flex justify-between items-center h-full w-full">
              <p className="text-sm font-semibold italic">{userLoginError}</p>
              <p className="">❌</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
