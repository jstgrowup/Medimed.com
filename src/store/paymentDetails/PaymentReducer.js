import { GETCARTDATA, GETPAYMENTDETAILS, LOADING } from "./PaymentActionsTypes";

const initState = {
  MRP: "",
  Total: "",
  discount: "",
  data: [],
  loading:false
};
export const PaymentState = (state = initState, { type, payload }) => {
  
  switch (type) {
    case GETPAYMENTDETAILS: {
      return {
        ...state,
        ...payload,
        loading:false
      };
    }
    case GETCARTDATA: {
      return {
        ...state,
        data: [...payload],loading:false
      };
    }

    case LOADING:{

return {...state,loading:true}

    }
    default:
      return state;
  }
};
