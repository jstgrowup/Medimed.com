import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ButtonWrapper } from "./ButtonWrapper";
import { Box } from "@chakra-ui/react";
export default function PayButton() {
  return (
    <Box>
      <PayPalScriptProvider
        options={{
          "client-id":
            "Act3tws_cp_1p_jpZdNApFTWVQ61hCzxy0niGC0JCyn0CBV0kGmNK5xP51cOnXzGnbuUzfF7WCYkWlvq",
          components: "buttons",
          currency: "USD",
          "disable-funding": "credit,card,p24",
        }}
      >
        <ButtonWrapper currency={"USD"} showSpinner={false}  />
      </PayPalScriptProvider>
    </Box>
  );
}
