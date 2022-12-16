import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./AuthTypes";

const initState = {
  loading: false,
  error: false,
  data: {},
};
export const AuthReducer = (state = initState, { type, payload }) => {
  
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
