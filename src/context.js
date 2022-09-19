import React, { useContext, useReducer } from 'react'
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const mainUrl = 'https://hn.algolia.com/api/v1/search?'

// Setting up Reducer
const initialState = {}

// Implementing Context for the APP
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  return <AppContext.Provider value={'HEllo'}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }