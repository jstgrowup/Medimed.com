import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./AuthTypes";

export const loginAction = () => async (dispatcher) => {
    try {
        const email = localStorage.getItem("email");
        const res = await axios.post("https://medimed-backend.up.railway.app/getuser", {
            userid: email,
        });
        console.log('res:', res)
      
        const { data } = res;
        dispatcher({
            type: LOGIN_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatcher({ type: LOGIN_FAILURE });
        return false;
    }
};
