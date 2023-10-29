import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState();

  const signUpHandler = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInHandler = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const value = {
    currentUser,
    signInHandler,
    signUpHandler,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};

export { useAuth, AuthProvider };
