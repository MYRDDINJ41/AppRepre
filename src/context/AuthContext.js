import React, {createContext, useState} from "react";

export const AuthoContext = createContext();

export const AuthoProvider = ({children}) =>{
    const [JWT, setJWT] = useState(null);
    const [data, setData] = useState(null);
    
    return(
        <AuthoContext.Provider value={{
            JWT,setJWT, data, setData
        }}>
            {children}
        </AuthoContext.Provider>
    );
};