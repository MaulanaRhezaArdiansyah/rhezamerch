import {
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT,
  GET_ALL_PRODUCT_DATA,
  GET_DETAIL_PRODUCT_DATA,
  UPDATE_PRODUCT,
} from "../../actions/product";

const initialState = {
  getAllProductDataLoading: false,
  getAllProductDataResult: false,
  getAllProductDataError: false,

  getDetailProductDataLoading: false,
  getDetailProductDataResult: false,
  getDetailProductDataError: false,

  addNewProductLoading: false,
  addNewProductResult: false,
  addNewProductError: false,
  addNewProductSuccess: false,

  deleteProductLoading: true,
  // deleteProductResult: false,
  deleteProductError: false,
  deleteProductSuccess: false,

  updateProductLoading: false,
  updateProductResult: false,
  updateProductError: false,
  updateProductSuccess: false,
};

const product = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_PRODUCT_DATA:
      return {
        ...state,
        getAllProductDataLoading: action.payload.loading,
        getAllProductDataResult: action.payload.data,
        getAllProductDataError: action.payload.error,
      };
    case GET_DETAIL_PRODUCT_DATA:
      return {
        ...state,
        getDetailProductDataLoading: action.payload.loading,
        getDetailProductDataResult: action.payload.data,
        getDetailProductDataError: action.payload.error,
      };
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        addNewProductLoading: action.payload.loading,
        addNewProductResult: action.payload.data,
        addNewProductError: action.payload.error,
        addNewProductSuccess: action.payload.message,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProductLoading: action.payload.loading,
        // deleteProductResult: action.payload.data,
        deleteProductError: action.payload.error,
        deleteProductSuccess: action.payload.message,
      };
    case UPDATE_PRODUCT:
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

export default product;
