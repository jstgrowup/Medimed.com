import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./AuthTypes";

export const loginAction = () => async (dispatcher) => {
  try {
    const data = localStorage.getItem("lol");
  
    const res = await axios.post("https://frantic-foal-sweatpants.cyclic.app/auth/getuser", {
      email: data,
    });

     dispatcher({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    return data
  } catch (error) {
    return error.message;
  }
};
