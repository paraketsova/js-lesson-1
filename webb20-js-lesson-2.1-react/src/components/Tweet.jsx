import React from 'react'
import Thumbnail from './components/Thumbnail.jsx'

export default function Tweet({title, author, time_stamp}) {
  return (
    <div>
      <div className='TweetArticle'>
        <Thumbnail image="http://placekitten.com/300/300" title="My cat" />

        <div className='TweetContext'>
          <p>
            This is my first tweet.
          </p>
          <p>
            Author
          </p>
          <p>
            Time stamp
          </p>
        </div>
    
      </div>
    </div>
  )
}
