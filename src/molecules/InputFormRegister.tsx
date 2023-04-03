import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";

export const InputFormRegister: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userRegisterResult, userRegisterError, userRegisterSuccess } =
    useSelector((state: any) => state.AuthReducer);

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [click, setClick] = useState<boolean>(false);
  const [closeNotif, setCloseNotif] = useState(true);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch<any>(userRegister(registerData));
    setClick(!click);
    setCloseNotif(false);
  };

  const [buttonSignup, setButtonSignup] = useState<HTMLElement | null>();

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
      <form
        onSubmit={(event) => handleRegister(event)}
        className="px-7 flex flex-col mb-6"
      >
        <input
          onChange={(event) =>
            setRegisterData({
              ...registerData,
              username: event.target.value,
            })
          }
          type="text"
          className="auth-form-input mb-3"
          placeholder="Enter username"
        />
        <input
          onChange={(event) =>
            setRegisterData({
              ...registerData,
              email: event.target.value,
            })
          }
          type="text"
          className="auth-form-input mb-3"
          placeholder="Enter email"
        />
        <input
          onChange={(event) =>
            setRegisterData({
              ...registerData,
              password: event.target.value,
            })
          }
          type="text"
          className="auth-form-input mb-6"
          placeholder="Password"
        />

        <button
          id="button"
          type="submit"
          className={`bg-indigo-950 w-full h-14 rounded-md text-indigo-100 font-bold hover:opacity-90 duration-100 ${
            buttonSignup?.getAttribute("disabled") ? "" : "cursor-pointer"
          }`}
        >
          Signup
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
          {userRegisterResult ? (
            <div
              onClick={() => navigate("/auth/login")}
              className="flex justify-between items-center h-full w-full"
            >
              <p className="text-sm font-semibold italic">
                {userRegisterSuccess}
              </p>
              <p>✅</p>
            </div>
          ) : userRegisterError ? (
            <div className="flex justify-between items-center h-full w-full">
              <p className="text-sm font-semibold italic">
                {userRegisterError}
              </p>
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
