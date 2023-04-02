import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "./Text";

export const AddProductButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/product-add")}
      className="mt-32 text-xl text-white bg-indigo-800 px-5 py-3 rounded-xl self-center hover:bg-transparent border-2 border-indigo-800 mb-5 duration-100"
    >
      <Text>Add Product</Text>
    </button>
  );
};
