import React, { useContext, useEffect, useReducer } from 'react'
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
const initialState = {
  isLoading: true,
}

// Implementing Context for the APP
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchStories = async (mainUrl) => {
    dispatch({ type: SET_LOADING })
  }

  // Using useEffect to Fetch Data
  useEffect(() => {
    fetchStories()
  }, [])


  return <AppContext.Provider value={{...state}}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }