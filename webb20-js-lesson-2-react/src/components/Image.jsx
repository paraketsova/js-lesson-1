import React from 'react'

export default function Image(props) {
  return (
    <div>
      <h5>{props.title}</h5>
      <img src={props.image} className='App-logo' alt='logo' />
    </div>
  )
}
