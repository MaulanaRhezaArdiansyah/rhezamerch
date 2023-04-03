import axios from "axios";
// import {
//   AddNewProductType,
//   DispatchAddNewProductType,
//   DispatchDeleteProductType,
//   DispatchProductType,
// } from "../../../types/product.type";

// export const GET_ALL_PRODUCT_DATA = "GET_ALL_PRODUCT_DATA";
const API_URL = import.meta.env.VITE_API_URL;
// export const getAllUser = () => {
//   return (dispatch: DispatchProductType) => {
//     dispatch({
//       type: GET_ALL_PRODUCT_DATA,
//       payload: {
//         loading: true,
//         // data: [],
//         data: false,
//         error: "",
//       },
//     });

//     axios({
//       method: "GET",
//       url: `${API_URL}/product`,
//       timeout: 120000,
//     })
//       .then((response) => {
//         dispatch({
//           type: GET_ALL_PRODUCT_DATA,
//           payload: {
//             loading: false,
//             data: response.data.data,
//             error: "",
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: GET_ALL_PRODUCT_DATA,
//           payload: {
//             loading: false,
//             // data: [],
//             data: false,
//             error: error.message,
//           },
//         });
//       });
//   };
// };

// export const getDetailUser = (id: string | undefined) => {
//   return (dispatch: DispatchProductType) => {
//     dispatch({
//       type: GET_DETAIL_PRODUCT_DATA,
//       payload: {
//         loading: true,
//         // data: [],
//         data: false,
//         error: "",
//       },
//     });

//     axios({
//       method: "GET",
//       url: `${API_URL}/product/${id}`,
//       timeout: 120000,
//     })
//       .then((response) => {
//         dispatch({
//           type: GET_DETAIL_PRODUCT_DATA,
//           payload: {
//             loading: false,
//             data: response.data.data,
//             error: "",
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: GET_DETAIL_PRODUCT_DATA,
//           payload: {
//             loading: false,
//             // data: [],
//             data: false,
//             error: error.message,
//           },
//         });
//       });
//   };
// };

// export const deleteUser = (id: string | undefined) => {
//   return (dispatch: DispatchDeleteProductType) => {
//     dispatch({
//       type: DELETE_PRODUCT,
//       payload: {
//         loading: true,
//         // data: [],
//         error: "",
//         message: "",
//       },
//     });

//     axios({
//       method: "DELETE",
//       url: `${API_URL}/product/${id}`,
//       timeout: 120000,
//     })
//       .then((response) => {
//         dispatch({
//           type: DELETE_PRODUCT,
//           payload: {
//             loading: false,
//             // data: response.data.data,
//             error: "",
//             message: response.data.message,
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: DELETE_PRODUCT,
//           payload: {
//             loading: false,
//             // data: [],
//             error: error.message,
//             message: "",
//           },
//         });
//       });
//   };
// };

// export const updateUser = (
//   data: AddNewProductType,
//   id: string | undefined
// ) => {
//   return (dispatch: DispatchAddNewProductType) => {
//     dispatch({
//       type: UPDATE_PRODUCT,
//       payload: {
//         loading: true,
//         data: [],
//         error: "",
//         message: "",
//       },
//     });

//     axios({
//       method: "PUT",
//       url: `${API_URL}/product/${id}`,
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       data: data,
//       timeout: 120000,
//     })
//       .then((response) => {
//         dispatch({
//           type: UPDATE_PRODUCT,
//           payload: {
//             loading: false,
//             data: response.data.data,
//             error: "",
//             message: response.data.message,
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: UPDATE_PRODUCT,
//           payload: {
//             loading: false,
//             data: [],
//             error: error.message,
//             message: "",
//           },
//         });
//       });
//   };
// };
