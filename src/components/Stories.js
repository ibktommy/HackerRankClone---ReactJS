import React from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
  const { isLoading, responseData, removeItem } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <div className="stories">
      {
        responseData.map((item) => {
          // Destructuring item Object Values
          const { objectID: id, title, num_comments, url, points, author } = item
          return (
            <article key={id} className='story'>
              <h4 className='title'>{title}</h4>
              <p className="info">{points} points by <span>{author}</span> | <span>{num_comments}{' '} comments</span>
              </p>
              <div>
                <a href={url} className='read-link' target='_blank' rel='noopener noreferrer'>
                  read more
                </a>
                <button className='remove-btn' onClick={() => removeItem(id)}>remove</button>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Stories