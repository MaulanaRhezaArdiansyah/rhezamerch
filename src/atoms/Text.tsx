import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Text: React.FC<Props> = ({ children }) => {
  return <p className="text-indigo-100">{children}</p>;
};
