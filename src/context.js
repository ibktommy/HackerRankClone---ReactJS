import React, { useContext } from 'react'

// Implementing Context for the APP
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={'HEllo'}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }