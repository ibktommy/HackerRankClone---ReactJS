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
  responseData: [],
  searchTerm: 'react',
  page: 0,
  totalPages: 0,
}

// Implementing Context for the APP
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Function that is called to fetch data from the external API
  const fetchStories = async (mainUrl) => {
    dispatch({ type: SET_LOADING })

    try {
      const response = await fetch(mainUrl)
      const data = await response.json()
      console.log(data)

      dispatch({
        type: SET_STORIES, payload: {
          responseData: data.hits,
          totalPages: data.nbPages,
        }
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  // Function to Delete a Selected Item from the Data-Array-Fetched
  const removeItem = (id) => {
    dispatch({
      type: REMOVE_STORY,
      payload: id,
    })
  }

  // Function to Handle SearchTerm
  const formInputHandler = (searchTerm) => {
    dispatch({
      type: HANDLE_SEARCH,
      payload: searchTerm,
    })
  }

  // Function To Increase Page-state-value
  const handlePage = (value) => {
    dispatch({
      type: HANDLE_PAGE,
      payload: value
    })
  }

  // Using useEffect to Fetch Data
  useEffect(() => {
    fetchStories(`${mainUrl}query=${state.searchTerm}&page=${state.page}`)
  }, [state.searchTerm, state.page])


  return <AppContext.Provider value={
    {
      ...state, removeItem, formInputHandler, handlePage 
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }