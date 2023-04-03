import axios from "axios";
import {
  DispatchAuthType,
  UserLoginType,
  UserRegisterType,
} from "../../../types/auth.type";

export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGIN = "USER_LOGIN";
const API_URL = import.meta.env.VITE_API_URL;

export const userRegister = (data: UserRegisterType) => {
  return (dispatch: DispatchAuthType) => {
    dispatch({
      type: USER_REGISTER,
      payload: {
        loading: true,
        // data: {},
        data: false,
        error: "",
        message: "",
      },
    });

    axios({
      method: "POST",
      url: `${API_URL}/auth/register`,
      data,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: USER_REGISTER,
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
          type: USER_REGISTER,
          payload: {
            loading: false,
            // data: {},
            data: false,
            error: error.response.data.message,
            message: "",
          },
        });
      });
  };
};

export const userLogin = (data: UserLoginType) => {
  return (dispatch: DispatchAuthType) => {
    dispatch({
      type: USER_LOGIN,
      payload: {
        loading: true,
        // data: {},
        data: false,
        error: "",
        message: "",
      },
    });

    axios({
      method: "POST",
      url: `${API_URL}/auth/login`,
      data,
      timeout: 120000,
    })
      .then((response) => {
        dispatch({
          type: USER_LOGIN,
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
          type: USER_LOGIN,
          payload: {
            loading: false,
            // data: {},
            data: false,
            error: error.response.data.message,
            message: "",
          },
        });
      });
  };
};
