import React from 'react'
import { useGlobalContext } from '../context'

const Buttons = () => {
  // Getting Values from the App Context
  const {isLoading, totalPages, page, handlePage} = useGlobalContext()
  return (
    <div className="btn-container">
      <button disabled={isLoading}>
        prev
      </button>
      <p>{} of {}</p>
      <button disabled={isLoading}>
        next
      </button>
    </div>
  )
}

export default Buttons