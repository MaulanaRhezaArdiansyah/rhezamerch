import React from "react";

interface Props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownMenu: React.FC<Props> = ({ active, setActive }) => {
  const isLoggedIn = false;

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
          <p className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1">
            Logout
          </p>
        ) : (
          <p className="duration-100 hover:bg-indigo-700 w-full text-center rounded-md cursor-pointer py-1">
            Login
          </p>
        )}
      </div>
    </div>
  );
};
