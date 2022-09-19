import React from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
  const { isLoading, responseData } = useGlobalContext()
  console.log(isLoading, responseData)

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <div className="stories">
      {
        responseData.map((item, index) => {
          console.log(item)
          return (
            <article key={index} className='story'>
              Single STory
            </article>
          )
        })
      }
    </div>
  )
}

export default Stories