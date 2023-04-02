import { useSelector } from "react-redux";
import { AddProductButton } from "../../atoms/AddProductButton";
import { ProductCard } from "../../atoms/ProductCard";
import { Navbar } from "../../molecules/Navbar";
import { SearchBox } from "../../atoms/SearchBox";

export const ProductPage = () => {
  const { getAllProductDataResult } = useSelector(
    (state: any) => state.ProductReducer
  );
  const heightScreen = () => {
    if (!getAllProductDataResult) return "bg-black flex flex-col h-screen";
    // if (getAllProductDataResult.length === 0)
    //   return "bg-black flex flex-col h-screen";
    return "bg-black flex flex-col";
  };
  return (
    <>
      <Navbar />
      <main className={heightScreen()}>
        <AddProductButton />
        <SearchBox />
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
