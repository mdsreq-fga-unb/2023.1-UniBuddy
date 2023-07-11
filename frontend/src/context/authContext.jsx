import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (inputs) => {
    try {
      const response = await axios.post("http://localhost:3000/usuarios/login", inputs);
      const token = response.data.token;
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Erro ao efetuar o login:", error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>{children}</AuthContext.Provider>
  );
};