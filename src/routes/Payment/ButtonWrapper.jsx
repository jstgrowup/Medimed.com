import { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useToast } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const style = {
  shape: "pill",
  color: "blue",
  layout: "horizontal",
  label: "pay",
};

export const ButtonWrapper = ({ currency, showSpinner }) => {
  const pay = useSelector((store) => store.paymentState);
  const navigate = useNavigate();
  const toast = useToast();
  let totalw = pay.Total;
  let huru = (totalw / 84).toFixed(0);
  const amount = `${huru}`;
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  //   useEffect(() => {
  //     dispatch({
  //       type: "resetOptions",
  //       value: {
  //         ...options,
  //         currency: currency,
  //       },
  //     });
  //   }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            navigate("/");
            toast({
              title: "Payment successfull !",

              status: "success",
              duration: 9000,
              isClosable: true,
            });
          });
        }}
      />
    </>
  );
};
