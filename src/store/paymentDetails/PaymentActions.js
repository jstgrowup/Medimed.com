import axios from "axios";
import { GETCARTDATA, GETPAYMENTDETAILS, LOADING } from "./PaymentActionsTypes";

export const getpaymentdetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get("https://frantic-foal-sweatpants.cyclic.app/carts", {
      headers: { userid: id },
    });

    const { data } = res;
    const Total = data?.reduce(
      (acc, el) => acc + Number(el.productId.price) * el.quantity,
      0
    );

    const MRP = data.reduce(
      (acc, el) => acc + Number(el.productId.Fprice) * el.quantity,
      0
    );
    const discount = Math.abs(MRP - Total);

    dispatch({
      type: GETPAYMENTDETAILS,
      payload: { Total, MRP, discount, data: data },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getcartdata = (id) => async (dispatch) => {
  try {
    const res = await axios.get("https://frantic-foal-sweatpants.cyclic.app/carts", {
      headers: { userid: id },
    });

    const { data } = res;

    dispatch({
      type: GETCARTDATA,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadingAction = () => {
  return {
    type: LOADING,
  };
};
