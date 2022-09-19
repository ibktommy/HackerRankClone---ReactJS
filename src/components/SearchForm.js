import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  // Get values from the App-Context
  const {searchTerm, formInputHandler} = useGlobalContext()
  return (
    <form className="search-form">
      <h2>Search Hacker News</h2>
      <input type="text" className="form-input" value={searchTerm} onChange={(e) => formInputHandler(e.target.value)}/>
    </form>
  )
}

export default SearchForm