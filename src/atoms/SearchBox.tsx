import React from "react";

export const SearchBox: React.FC = () => {
  return (
    <div className="w-96 h-14 rounded-md border-2 border-indigo-700 bg-indigo-700 self-center flex items-center justify-center">
      {/* <div className="w-14 h-full left-14 flex items-center justify-center"></div> */}
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full h-full ml-4 flex items-center focus:outline-none bg-transparent text-indigo-200"
      />
    </div>
  );
};
