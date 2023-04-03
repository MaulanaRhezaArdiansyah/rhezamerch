import { useSelector } from "react-redux";
import { AddProductButton } from "../../atoms/AddProductButton";
import { ProductCard } from "../../atoms/ProductCard";
import { Navbar } from "../../molecules/Navbar";
import { SearchBox } from "../../atoms/SearchBox";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  const { getAllProductDataResult } = useSelector(
    (state: any) => state.ProductReducer
  );

  const [isAdmin, setIsAdmin] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const heightScreen = () => {
    if (!getAllProductDataResult) return "bg-black flex flex-col h-screen";
    // if (getAllProductDataResult.length === 0)
    //   return "bg-black flex flex-col h-screen";
    return "bg-black flex flex-col";
  };

  // const logout = () => {
  //   localStorage.removeItem("userLogin");
  //   setRefetch(!refetch);
  // };

  useEffect(() => {
    const user_login = JSON.parse(localStorage.getItem("userLogin") as string);
    if (user_login) {
      setIsLoggedIn(true);
      setRefetch(!refetch);
    } else {
      setIsLoggedIn(false);
    }

    if (user_login?.user?.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    // }, [refetch]);
  }, []);
  return (
    <>
      {/* <Navbar logout={logout} refetch={refetch} /> */}
      <Navbar />
      <main className={heightScreen()}>
        {isAdmin ? <AddProductButton /> : ""}

        <SearchBox isAdmin={isAdmin} />
        {/* <div className="w-full flex px-5 sm:px-24 md:px-32 py-16 pt-32">  INI UNTUK USER REGULAR */}
        <div className="w-full flex px-5 sm:px-24 md:px-32 py-16 pt-14">
          <div className="w-full flex flex-wrap justify-center items-center gap-10">
            <ProductCard />
          </div>
        </div>
      </main>
    </>
  );
};
