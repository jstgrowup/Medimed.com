import { GETCARTDATA, GETPAYMENTDETAILS } from "./PaymentActionsTypes";

const initState = {
  MRP: "",
  Total: "",
  discount: "",
  data: [],
};
export const PaymentState = (state = initState, { type, payload }) => {
  
  switch (type) {
    case GETPAYMENTDETAILS: {
      return {
        ...state,
        ...payload,
      };
    }
    case GETCARTDATA: {
      return {
        ...state,
        data: [...payload],
      };
    }
    default:
      return state;
  }
};
