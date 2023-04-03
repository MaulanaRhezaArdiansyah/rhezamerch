import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getDetailProduct } from "../../redux/actions/product";
import { Navbar } from "../../molecules/Navbar";
import { ProductType } from "../../types/product.type";

const API_URL = import.meta.env.VITE_API_URL;

export const ProductDetail: React.FC = () => {
  const { productID } = useParams();
  const {
    getDetailProductDataResult,
    getDetailProductDataError,
    deleteProductSuccess,
    deleteProductError,
  } = useSelector((state: any) => state.ProductReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [clickDelete, setClickDelete] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleDelete = (id: string | undefined) => {
    confirm("Are you sure?");
    if (confirm("Are you sure?") === false) {
      alert("Ok 👌");
    } else {
      dispatch<any>(deleteProduct(id));
      setClickDelete(!clickDelete);
    }
  };

  useEffect(() => {
    dispatch<any>(getDetailProduct(productID));
  }, [dispatch]);

  useEffect(() => {
    const userDataLocalStorage = JSON.parse(
      localStorage.getItem("userLogin") as string
    );
    const admin = userDataLocalStorage?.user?.role;
    if (userDataLocalStorage) {
      setIsLoggedIn(true);
      if (admin === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const product: ProductType =
    getDetailProductDataResult && getDetailProductDataResult;

  return (
    <>
      <Navbar />
      <main className="bg-black">
        <div className="w-full h-[120vh] flex flex-col px-5 sm:px-24 md:px-32 py-16 pt-32 justify-center items-center">
          {getDetailProductDataResult === false ? (
            <p className="text-white text-lg">Loading....</p>
          ) : getDetailProductDataResult ? (
            <div
              key={product.product_id}
              className="bg-indigo-800 text-white w-52 sm:w-52 h-72 sm:h-72 rounded-lg shadow-indigo-400 shadow-lg p-5 duration-100 relative cursor-pointer"
            >
              <img
                src={
                  product.image
                    ? `${API_URL}/${product.image}`
                    : `${API_URL}/product-default-img.png`
                }
                alt={product.title}
                className="rounded-md mb-1 sm:mb-3"
              />
              <p className="font-bold text-base">{product.title}</p>
              <p>Rp. {product.price}</p>
            </div>
          ) : getDetailProductDataError ? (
            <p>{getDetailProductDataError}</p>
          ) : (
            <p>Data Empty</p>
          )}
          {isLoggedIn && isAdmin ? (
            <>
              <button
                onClick={() => navigate(`/edit/${productID}`)}
                className="bg-indigo-700 w-52 py-3 rounded-lg text-white font-medium mt-10 hover:bg-transparent border-2 border-indigo-800 duration-100"
              >
                Edit product
              </button>
              <button
                onClick={() => handleDelete(productID)}
                className="bg-indigo-800 w-52 py-3 rounded-lg text-white font-medium mt-3 hover:bg-transparent border-2 border-indigo-800 duration-100"
              >
                Delete product
              </button>
            </>
          ) : (
            <button
              onClick={() =>
                alert("Sorry, this feature still in development 🙏")
              }
              className="bg-indigo-700 w-52 py-3 rounded-lg text-white font-medium mt-10 hover:bg-transparent border-2 border-indigo-800 duration-100"
            >
              Add to cart
            </button>
          )}

          <p className="text-white italic text-center mt-5 cursor-pointer duration-100">
            {clickDelete && deleteProductSuccess
              ? deleteProductSuccess
              : deleteProductError}
          </p>
          <a
            onClick={() => navigate("/")}
            className="text-indigo-300 hover:text-indigo-400 text-center mt-5 cursor-pointer duration-100"
          >
            👈 Back to homepage
          </a>
        </div>
      </main>
    </>
  );
};
