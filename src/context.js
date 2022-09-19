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
  results: [],
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
          results: data.hits,
          totalPages: data.nbPages,
        }
      })

    } catch (error) {
      console.log(error.message)
    }
  }

  // Using useEffect to Fetch Data
  useEffect(() => {
    fetchStories(`${mainUrl}query=${state.searchTerm}&page=${state.page}`)
  }, [])


  return <AppContext.Provider value={{ ...state }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }