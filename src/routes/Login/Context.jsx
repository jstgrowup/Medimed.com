import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
export const userAuthContext = createContext({});
export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [user, setuser] = useState({});
  function setupRecaptcha(number) {
    const recaptchaverifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaverifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaverifier);
  }
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => console.log("ok"))
      .catch((er) => console.log(er));
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = () =>
      onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ setupRecaptcha, name, setname, googleSignIn, logOut, user }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export function useUserAuth() {
  return useContext(userAuthContext);
}
