import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/actions/product";
import { ProductType } from "../types/product.type";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export const ProductCard: React.FC = () => {
  const {
    getAllProductDataLoading,
    getAllProductDataResult,
    getAllProductDataError,
  } = useSelector((state: any) => state.ProductReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDetailProduct = (id: string) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    dispatch<any>(getAllProduct());
  }, [dispatch]);

  return (
    <>
      {getAllProductDataLoading ? (
        <p>Loading...</p>
      ) : getAllProductDataResult ? (
        getAllProductDataResult.map((product: ProductType) => (
          <div
            onClick={() => toDetailProduct(product.product_id)}
            key={product.product_id}
            className="bg-indigo-800 text-white w-48 sm:w-52 h-72 sm:h-72 rounded-lg flex flex-col items-center shadow-indigo-400 shadow-lg p-5 hover:scale-95 duration-100 cursor-pointer"
          >
            <img
              src={
                product.image
                  ? `${API_URL}/${product.image}`
                  : `${API_URL}/product-default-img.png`
              }
              alt={product.title}
              className="rounded-md mb-1 sm:mb-3 w-40 h-40"
            />
            <div className="w-full mt-3">
              <p className="font-bold text-base ">{product.title}</p>
              <p className="">Rp. {product.price}</p>
            </div>
          </div>
        ))
      ) : getAllProductDataError ? (
        <p>{getAllProductDataError}</p>
      ) : (
        <p>Data Empty</p>
      )}
    </>
  );
};
