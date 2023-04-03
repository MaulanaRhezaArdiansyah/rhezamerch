import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  logout: () => void;
}

export const DropdownMenu: React.FC<Props> = ({
  active,
  setActive,
  isLoggedIn,
  logout,
}) => {
  const navigate: NavigateFunction = useNavigate();
  // const logout = () => {
  //   localStorage.removeItem("userLogin");
  // };

  return (
    <div
      id="wrapper"
      onClick={() => setActive(!active)}
      className="fixed inset-0 bg-transparent justify-end z-20"
    >
      <div className="bg-indigo-600 w-40 h-48 flex flex-col gap-1 text-indigo-100 items-center justify-center rounded-md absolute right-4 sm:right-48 top-16 z-20 p-5 ">
        <p className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1">
          Profile
        </p>
        <p className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1">
          Cart
        </p>
        <p className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1">
          History
        </p>
        {isLoggedIn ? (
          <p
            onClick={() => logout()}
            className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1"
          >
            Logout
          </p>
        ) : (
          <p
            onClick={() => navigate("/auth/login")}
            className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1"
          >
            Login
          </p>
        )}
      </div>
    </div>
  );
};
