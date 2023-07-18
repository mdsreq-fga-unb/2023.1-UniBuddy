import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (inputs) => {
    try {
      const response = await axios.post('http://localhost:3000/usuarios/login', inputs);
      const token = response.data.token;
      setToken(token);
      localStorage.setItem('token', token);
      console.log(axios.defaults.headers.common['Authorization'])
      console.log("teste>>" , token)
    } catch (error) {
      console.log('Erro ao efetuar o login:', error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    console.log(axios.defaults.headers.common['Authorization'])
    console.log("O usuário foi deslogado", token)
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
