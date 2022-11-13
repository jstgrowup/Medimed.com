import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth"
import React, { createContext, useContext, useState } from 'react'
import { auth } from "./Firebase";
export const userAuthContext = createContext({});
export function UserAuthContextProvider({ children }) {
    const [name, setname] = useState("");
    function setupRecaptcha(number) {
      const recaptchaverifier = new RecaptchaVerifier(
        "recaptcha-container",
        {},
        auth
      );
      recaptchaverifier.render();
      return signInWithPhoneNumber(auth, number, recaptchaverifier);
    }
  
    return (
      <userAuthContext.Provider value={{ setupRecaptcha, name, setname }}>
        {children}
      </userAuthContext.Provider>
    );
  }
  export function useUserAuth() {
    return useContext(userAuthContext);
  }
  