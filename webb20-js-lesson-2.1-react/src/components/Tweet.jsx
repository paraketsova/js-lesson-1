import React from 'react'

export default function Tweet({title, author, time_stamp}) {
  return (
    <div className='TweetArticle'>
      <Image image="http://placekitten.com/300/300" title="Cat" />

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
  )
}
