import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserAuthContextProvider } from "./routes/Login/Context";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <UserAuthContextProvider>
            <ChakraProvider>
               <BrowserRouter>
                  <App />
               </BrowserRouter>
            </ChakraProvider>
         </UserAuthContextProvider>
      </Provider>
   </React.StrictMode>
);
