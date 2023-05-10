import { createContext, } from "react";
import { useContext } from "react";
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signOut
 } from "firebase/auth";
 import { auth } from "../utilities/firebase";

const userContext = createContext();

export const AuthContextProvider=({children}) =>{

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  return(
    <userContext.Provider value={{createUser, login}} >
      {children}
    </userContext.Provider>
  )
}

export const UserAuth = ()=>{
  return useContext(userContext)
}