import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";



export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));
    
    const login = async(inputs) => {
        const res = await axios.post("https://20231-unibuddy-production.up.railway.app/usuarios/login", inputs);
        setCurrentUser(res.data);
    }

    const logout = async(inputs) => {
        const res = await axios.post("https://20231-unibuddy-production.up.railway.app/usuarios/logout", inputs);
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>{children}</AuthContext.Provider>
    );
}