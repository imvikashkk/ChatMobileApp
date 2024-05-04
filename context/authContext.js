import { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(undefined)

    useEffect(()=>{
        // onAuthStateChanged
        setAuthenticated(false)
    }, [])

    const login = async (email, password) => {
        try{

        }
        catch(err){

        }
    }

    const logout = () =>{

    }

    const register = async (email, password,username, profileUrl)=>{
        try{

        }catch(err){

        }
    }

    return (
        <AuthContext.Provider value={{user,isAuthenticated, login, logout, register}}  >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const value = useContext(AuthContext)
    if(!value){
        throw new Error("useAuth must be wrapped inside AuthContextProvider !")
    }
    return value;
}