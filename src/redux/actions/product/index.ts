import axios from "axios";
import {
  AddNewProductType,
  DispatchAddNewProductType,
  DispatchDeleteProductType,
  DispatchProductType,
} from "../../../types/product.type";

export const GET_ALL_PRODUCT_DATA = "GET_ALL_PRODUCT_DATA";
export const GET_DETAIL_PRODUCT_DATA = "GET_DETAIL_PRODUCT_DATA";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const getAllProduct = () => {
  return (dispatch: DispatchProductType) => {
    dispatch({
      type: GET_ALL_PRODUCT_DATA,
      payload: {
        loading: true,
        // data: [],
        data: false,
        error: "",
      },
    });

    axios({
      method: "GET",
      //   url: `https://api-rhezamerch.vercel.app/product`,
      url: `http://localhost:9000/product`,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_ALL_PRODUCT_DATA,
          payload: {
            loading: false,
            data: response.data.data,
            error: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_DATA,
          payload: {
            loading: false,
            // data: [],
            data: false,
            error: error.message,
          },
        });
      });
  };
};

export const getDetailProduct = (id: string | undefined) => {
  return (dispatch: DispatchProductType) => {
    dispatch({
      type: GET_DETAIL_PRODUCT_DATA,
      payload: {
        loading: true,
        // data: [],
        data: false,
        error: "",
      },
    });

    axios({
      method: "GET",
      //   url: `https://api-rhezamerch.vercel.app/product`,
      url: `http://localhost:9000/product/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: GET_DETAIL_PRODUCT_DATA,
          payload: {
            loading: false,
            data: response.data.data,
            error: "",
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_PRODUCT_DATA,
          payload: {
            loading: false,
            // data: [],
            data: false,
            error: error.message,
          },
        });
      });
  };
};

export const addNewProduct = (data: AddNewProductType) => {
  return (dispatch: DispatchAddNewProductType) => {
    dispatch({
      type: ADD_NEW_PRODUCT,
      payload: {
        loading: true,
        data: [],
        error: "",
        message: "",
      },
    });

    axios({
      method: "POST",
      //   url: `https://api-rhezamerch.vercel.app/product`,
      url: `http://localhost:9000/product`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: ADD_NEW_PRODUCT,
          payload: {
            loading: false,
            data: response.data.data,
            error: "",
            message: response.data.message,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_NEW_PRODUCT,
          payload: {
            loading: false,
            data: [],
            error: error.message,
            message: "",
          },
        });
      });
  };
};

export const deleteProduct = (id: string | undefined) => {
  return (dispatch: DispatchDeleteProductType) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        loading: true,
        // data: [],
        error: "",
        message: "",
      },
    });

    axios({
      method: "DELETE",
      //   url: `https://api-rhezamerch.vercel.app/product`,
      url: `http://localhost:9000/product/${id}`,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            // data: response.data.data,
            error: "",
            message: response.data.message,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            // data: [],
            error: error.message,
            message: "",
          },
        });
      });
  };
};

export const updateProduct = (
  data: AddNewProductType,
  id: string | undefined
) => {
  return (dispatch: DispatchAddNewProductType) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: {
        loading: true,
        data: [],
        error: "",
        message: "",
      },
    });

    axios({
      method: "PUT",
      //   url: `https://api-rhezamerch.vercel.app/product`,
      url: `http://localhost:9000/product/${id}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            loading: false,
            data: response.data.data,
            error: "",
            message: response.data.message,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            loading: false,
            data: [],
            error: error.message,
            message: "",
          },
        });
      });
  };
};
