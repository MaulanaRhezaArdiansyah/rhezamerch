import React, { useEffect, useState } from "react";
import { Navbar } from "../../molecules/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct, updateProduct } from "../../redux/actions/product";
import { useNavigate, useParams } from "react-router-dom";
import { InputFormEditProduct } from "../../molecules/InputFormEditProduct";

export const EditProduct: React.FC = () => {
  const {
    updateProductResult,
    updateProductError,
    updateProductSuccess,
    getDetailProductDataResult,
  } = useSelector((state: any) => state.ProductReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productID } = useParams();
  const [imagePreview, setImagePreview] = useState<string>();
  const [image, setImage] = useState();
  const [clickEdit, setClickEdit] = useState(false);
  const [datas, setDatas] = useState({
    title: getDetailProductDataResult.title,
    price: getDetailProductDataResult.price,
    size: getDetailProductDataResult.size,
    stock: getDetailProductDataResult.stock,
    category: getDetailProductDataResult.category,
    image: getDetailProductDataResult.image,
  });

  useEffect(() => {
    dispatch<any>(getDetailProduct(productID));
  }, [dispatch]);

  const onImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setImage(file);
  };

  const handleEditProduct = (event: any) => {
    event.preventDefault();

    const formDatas: any = new FormData();
    formDatas.append("title", datas.title);
    formDatas.append("price", datas.price);
    formDatas.append("size", datas.size);
    formDatas.append("stock", datas.stock);
    formDatas.append("category", datas.category);
    formDatas.append("image", image);

    dispatch<any>(updateProduct(formDatas, productID));

    setClickEdit(!clickEdit);
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <main className="bg-black">
        <div className="w-full h-[200vh] flex flex-col px-5 sm:px-24 md:px-32 py-16 pt-20">
          <h1 className="text-white text-center w-full text-2xl mt-10">
            Edit Product Page
          </h1>
          <form
            onSubmit={handleEditProduct}
            className="mt-10 flex flex-col items-center gap-5"
          >
            <label
              htmlFor="upload"
              className="bg-white w-80 h-80 flex items-center justify-center cursor-pointer rounded-xl overflow-hidden"
            >
              {!imagePreview ? (
                <img
                  src={
                    getDetailProductDataResult.image &&
                    `http://localhost:9000/${getDetailProductDataResult.image}`
                  }
                  alt=""
                />
              ) : (
                <img src={imagePreview && imagePreview} alt="" />
              )}
            </label>
            <input
              id="upload"
              type="file"
              className="bg-indigo-500 w-80 hidden"
              onChange={(e) => onImageUpload(e)}
            />
            <InputFormEditProduct datas={datas} setDatas={setDatas} />
            <button
              type="submit"
              className="mt-10 text-xl text-white bg-indigo-800 w-80 px-5 py-3 rounded-xl self-center hover:bg-transparent border-2 border-indigo-800 duration-100"
            >
              Edit product
            </button>
          </form>
          <p className="text-white text-center mt-3">
            {clickEdit && updateProductResult
              ? updateProductSuccess
              : updateProductError
              ? updateProductError
              : ""}
          </p>
          <a
            onClick={() => backToHome()}
            className="text-indigo-300 text-center mt-3 cursor-pointer hover:text-indigo-400 duration-100"
          >
            👈 Back to homepage
          </a>
        </div>
      </main>
    </>
  );
};
