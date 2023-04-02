export type DispatchProductType = (arg: {
  type: string;
  payload: {
    loading: boolean;
    // data: [];
    data: boolean;
    error: string;
  };
}) => void;

export type DispatchAddNewProductType = (arg: {
  type: string;
  payload: {
    loading: boolean;
    data: [];
    error: string;
    message: string;
  };
}) => void;

export type DispatchDeleteProductType = (arg: {
  type: string;
  payload: {
    loading: boolean;
    // data: [];
    error: string;
    message: string;
  };
}) => void;

export type ProductType = {
  product_id: string;
  title: string;
  price: number;
  size: string;
  stock: number;
  category: string;
  image: string;
};

export type AddNewProductType = {
  product_id: string;
  title: string;
  price: number;
  size: string;
  stock: number;
  category: string;
  image: string;
};

export type UdpateProductType = {
  product_id: string;
  title: string;
  price: number;
  size: string;
  stock: number;
  category: string;
  image: string;
};
