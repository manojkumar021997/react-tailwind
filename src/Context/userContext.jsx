import React, { createContext, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
export const UsersContext = createContext();

const Context= ({children}) => {
  const [users, setUsers] = useState([]);
  return (
    <UsersContext.Provider value={{users, setUsers}}>{children}</UsersContext.Provider>
  )
}
export default Context;
