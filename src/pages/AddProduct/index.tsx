import React, { useEffect, useState } from "react";
import { Navbar } from "../../molecules/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../../redux/actions/product";
import { useNavigate } from "react-router-dom";
import { ImagePreviewAddProduct } from "../../atoms/ImagePreviewAddProduct";
import { InputFormAddProduct } from "../../molecules/InputFormAddProduct";

export const AddProduct: React.FC = () => {
  const { addNewProductResult, addNewProductError, addNewProductSuccess } =
    useSelector((state: any) => state.ProductReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string>();
  const [image, setImage] = useState();
  const [clickAdd, setClickAdd] = useState(false);
  const [datas, setDatas] = useState({
    product_id: "",
    title: "",
    price: "",
    size: "",
    stock: "",
    category: "",
    image: "",
  });

  const onImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImagePreview(URL.createObjectURL(file));
    setImage(file);
  };

  const handleAddProduct = (event: any) => {
    event.preventDefault();

    const formDatas: any = new FormData();
    formDatas.append("title", datas.title);
    formDatas.append("price", datas.price);
    formDatas.append("size", datas.size);
    formDatas.append("stock", datas.stock);
    formDatas.append("category", datas.category);
    formDatas.append("image", image);

    dispatch<any>(addNewProduct(formDatas));

    setClickAdd(!clickAdd);

    setDatas({
      product_id: "",
      title: "",
      price: "",
      size: "",
      stock: "",
      category: "",
      image: "",
    });
  };

  const backToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("userLogin") as string);
    if (!isLoggedIn) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-black">
        <div className="w-full h-[200vh] flex flex-col px-5 sm:px-24 md:px-32 py-16 pt-20">
          <h1 className="text-white text-center w-full text-2xl mt-10">
            Add Product Page
          </h1>
          <form
            onSubmit={handleAddProduct}
            className="mt-10 flex flex-col items-center gap-5"
          >
            <ImagePreviewAddProduct imagePreview={imagePreview} />
            <input
              id="upload"
              type="file"
              className="bg-indigo-500 w-80 hidden"
              onChange={(e) => onImageUpload(e)}
            />
            <InputFormAddProduct datas={datas} setDatas={setDatas} />
            <button
              type="submit"
              className="mt-10 text-xl text-white bg-indigo-800 w-80 px-5 py-3 rounded-xl self-center hover:bg-transparent border-2 border-indigo-800 duration-100"
            >
              Submit
            </button>
          </form>
          <p className="text-white text-center mt-3">
            {clickAdd && addNewProductResult
              ? addNewProductSuccess
              : addNewProductError
              ? addNewProductError
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
