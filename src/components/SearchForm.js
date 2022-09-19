import React from 'react'

const SearchForm = () => {
  return (
    <form className="search-form">
      <h2>Search Hacker News</h2>
      <input type="text" className="form-input" value={searchTerm} onChange={(e) => e.target.formInputHandler(e.target.value)}/>
    </form>
  )
}

export default SearchForm