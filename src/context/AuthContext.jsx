import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext(null);

const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("session");

    if (token) {
      setSession(JSON.parse(token));
      return;
    }

    const getSession = async () => {
      const response = await fetch("/api/getSession");
      const result = await response.json();

      localStorage.setItem("session", JSON.stringify(result));
      setSession(result);
    };

    getSession();
  }, []);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
