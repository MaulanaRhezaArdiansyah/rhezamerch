import { USER_LOGIN, USER_REGISTER } from "../../actions/auth";

const initialState = {
  userRegisterLoading: true,
  userRegisterResult: false,
  //   userRegisterResult: {},
  userRegisterError: false,
  //   userRegisterError: "",
  userRegisterSuccess: false,
  //   userRegisterSuccess: "",

  userLoginLoading: true,
  userLoginResult: false,
  //   userLoginResult: {},
  userLoginError: false,
  //   userLoginError: "",
  userLoginSuccess: false,
  //   userRegisterSuccess: "",
};

const authUser = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        userRegisterLoading: action.payload.loading,
        userRegisterResult: action.payload.data,
        userRegisterError: action.payload.error,
        userRegisterSuccess: action.payload.message,
      };
    case USER_LOGIN:
      return {
        ...state,
        userLoginLoading: action.payload.loading,
        userLoginResult: action.payload.data,
        userLoginError: action.payload.error,
        userLoginSuccess: action.payload.message,
      };
    default:
      return state;
  }
};

export default authUser;
