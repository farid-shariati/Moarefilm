import {
  AUTH_LOGOUT,
  AUTH_FAIL,
  AUTH_SUCCESS,
  Authenticated,
} from "../Types/Types";

export interface AuthenticatedState {
  data: any;
  error: string;
}

const initialState: AuthenticatedState = {
  data: {},
  error: "",
};

const reducer = (state = initialState, action: Authenticated) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return {
        data: {},
      };
    case AUTH_SUCCESS:
      return {
        data: action.data,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
