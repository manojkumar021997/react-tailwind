import React, { createContext, useState } from 'react'

export const userContext = createContext();
const Context = ({children}) => {
  const [users, setUsers] = useState(null);
  return (
    <userContext.Provider value={{users, setUsers}}>{children}</userContext.Provider>
  )
}

export default Context
