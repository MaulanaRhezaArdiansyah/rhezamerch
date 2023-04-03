import React, { useEffect, useState } from "react";
import { DropdownMenu } from "../atoms/DropdownMenu";
import { useNavigate } from "react-router-dom";

// interface Props {
// logout: () => void;
// refetch: boolean;
// }

// export const Navbar: React.FC<Props> = ({ logout, refetch }) => {
export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  const logout = () => {
    localStorage.removeItem("userLogin");
    setRefetch(!refetch);
  };

  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("userLogin") as string);
    if (user_login) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [refetch]);

  return (
    <>
      <nav className="w-full bg-indigo-800 h-20 fixed flex justify-between items-center font-bold text-white text-xl z-10 px-5 sm:px-48">
        <p onClick={() => navigate("/")} className="cursor-pointer">
          RhezaMerch
        </p>
        <div
          onClick={() => toggleMenu()}
          className="flex flex-col gap-1 cursor-pointer"
        >
          {isLoggedIn ? (
            <img
              src="http://localhost:5173/default-avatar.png"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <>
              <span className="bg-white w-10 h-1 rounded-full"></span>
              <span className="bg-white w-10 h-1 rounded-full"></span>
              <span className="bg-white w-10 h-1 rounded-full"></span>
            </>
          )}
        </div>
      </nav>
      {active ? (
        <DropdownMenu
          active={active}
          setActive={setActive}
          isLoggedIn={isLoggedIn}
          logout={logout}
        />
      ) : (
        ""
      )}
    </>
  );
};
