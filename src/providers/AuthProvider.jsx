// ============================================
// AuthProvider - Authentication Context
// ============================================
// All authentication logic lives in this one file.
// Any component can read it with useContext(AuthContext).

import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  // Currently logged-in user (null = nobody is logged in)
  const [user, setUser] = useState(null);

  // true only while Firebase is checking "is someone already logged in?"
  // (needed after a page refresh, so Protected Routes don't redirect too early)
  const [loading, setLoading] = useState(true);

  // Register with Email & Password
  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Login with Email & Password
  const signInUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Logout
  const logOut = () => signOut(auth);

  // Observer: runs on first load, and every time the user logs in / out.
  // Firebase stores the session in the browser, so the user stays
  // logged in even after refreshing the page.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup: stop listening when the provider unmounts
    return () => unsubscribe();
  }, []);

  const authInfo = { user, loading, createUser, signInUser, logOut };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
