import React from 'react'

export default function InstagramImage({heading, image}) {
  return (
    <div>
      <h1>{heading.title}</h1>
      <h2>{heading.subtitle}</h2>
      <img src={image.url} alt={image.alt}/>
    </div>
  )
}
