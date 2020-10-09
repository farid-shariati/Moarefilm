import { AUTH_FAIL, AUTH_SUCCESS, AUTH_LOGOUT } from "../Types/Types";

import axios from "../../shared/axios-datas";
import { Dispatch } from "redux";

export interface AUTHLogOut {
  type: typeof AUTH_LOGOUT;
}
export interface AuthSuccess {
  type: typeof AUTH_SUCCESS;
  data: any;
}
export interface AuthFaill {
  type: typeof AUTH_FAIL;
  error: string;
}
export const AuthLogOut = (): AUTHLogOut => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const AuthSuccess = (data: any): AuthSuccess => {
  return {
    type: AUTH_SUCCESS,
    data: data,
  };
};

export const AuthFaill = (error: string): AuthFaill => {
  return {
    type: AUTH_FAIL,
    error,
  };
};

export const doLogin = (data: any) => {
  return (dispatch: Dispatch) => {
    axios
      .post(
        `/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`,
        data
      )
      .then((res) => {
        dispatch(AuthSuccess(data));
        alert(`hello ${data.username}`);
        window.location.replace("/");
      })
      .catch(() => {
        alert("Username does not exist");
      });
  };
};
