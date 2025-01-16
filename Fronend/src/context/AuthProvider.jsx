import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Parse initial state from Cookies or Local Storage
  const initialUserState = (() => {
    const storedUser = Cookies.get("jwt") || localStorage.getItem("Auth");
    try {
      return storedUser ? JSON.parse(storedUser) : undefined;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return undefined;
    }
  })();

  const [authUser, setAuthUser] = useState(initialUserState);

  useEffect(() => {
    console.log("authUser updated:", authUser);

    if (authUser) {
      // Persist authUser state
      localStorage.setItem("Auth", JSON.stringify(authUser));
      Cookies.set("jwt", JSON.stringify(authUser), { expires: 7 }); // 7 days expiry
    } else {
      // Clear storage on logout
      localStorage.removeItem("Auth");
      Cookies.remove("jwt");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
