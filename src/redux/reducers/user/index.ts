// import {
//   ADD_NEW_PRODUCT,
//   DELETE_PRODUCT,
//   GET_ALL_PRODUCT_DATA,
//   GET_DETAIL_PRODUCT_DATA,
//   UPDATE_PRODUCT,
// } from "../../actions/product";

const initialState = {
  getAllUserDataLoading: false,
  getAllUserDataResult: false,
  getAllUserDataError: false,

  getDetailUserDataLoading: false,
  getDetailUserDataResult: false,
  getDetailUserDataError: false,

  deleteUserLoading: true,
  // deleteUserResult: false,
  deleteUserError: false,
  deleteUserSuccess: false,

  updateUserLoading: false,
  updateUserResult: false,
  updateUserError: false,
  updateUserSuccess: false,
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_ALL_USER_DATA":
      return {
        ...state,
        getAllProductDataLoading: action.payload.loading,
        getAllProductDataResult: action.payload.data,
        getAllProductDataError: action.payload.error,
      };
    case "GET_DETAIL_USER_DATA":
      return {
        ...state,
        getDetailProductDataLoading: action.payload.loading,
        getDetailProductDataResult: action.payload.data,
        getDetailProductDataError: action.payload.error,
      };
    case "DELETE_USER":
      return {
        ...state,
        deleteProductLoading: action.payload.loading,
        // deleteProductResult: action.payload.data,
        deleteProductError: action.payload.error,
        deleteProductSuccess: action.payload.message,
      };
    case "UPDATE_USER":
      return {
        ...state,
        updateProductLoading: action.payload.loading,
        updateProductResult: action.payload.data,
        updateProductError: action.payload.error,
        updateProductSuccess: action.payload.message,
      };
    default:
      return state;
  }
};

export default user;
