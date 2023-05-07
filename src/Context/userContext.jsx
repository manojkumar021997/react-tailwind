import React, { createContext, useState } from 'react'

export const userContext = createContext();
const Context = ({children}) => {
  const [user, setUser] = useState([]);
  return (
    <userContext.Provider>{children}</userContext.Provider>
  )
}

export default Context
