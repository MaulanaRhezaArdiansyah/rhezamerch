import React from "react";
import { Text } from "./Text";

export const ImagePreviewAddProduct = ({ imagePreview }: any) => {
  return (
    <label
      htmlFor="upload"
      className="bg-indigo-700 w-80 h-80 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer hover:opacity-70 duration-150"
    >
      {!imagePreview ? (
        <div className="flex flex-col items-center">
          <Text>Upload your product image</Text>
          <p className="text-indigo-100 italic">
            Only .jpg, .jpeg, .png & .webp are allowed!
          </p>
        </div>
      ) : (
        <img src={imagePreview && imagePreview} alt="" />
      )}
    </label>
  );
};
