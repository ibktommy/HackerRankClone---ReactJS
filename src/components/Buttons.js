import React from 'react'
import { useGlobalContext } from '../context'

const Buttons = () => {
  // Getting Values from the App Context
  const {isLoading, totalPages, page, handlePage} = useGlobalContext()
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage('prev')}>
        prev
      </button>
      <p>{page + 1} of {totalPages}</p>
      <button disabled={isLoading} onClick={() => handlePage('next')}>
        next
      </button>
    </div>
  )
}

export default Buttons