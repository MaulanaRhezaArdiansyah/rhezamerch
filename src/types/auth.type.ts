export type DispatchAuthType = (arg: {
  type: string;
  payload: {
    loading: boolean;
    data: [] | {} | boolean;
    // data: {};
    error: string;
    message: string;
  };
}) => void;

export type UserRegisterType = {
  // user_id: string;
  username: string;
  email: string;
  password: string;
  // role: string;
};

export type UserLoginType = {
  email: string;
  password: string;
};
