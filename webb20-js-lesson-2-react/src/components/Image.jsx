import React from 'react'
import Link from './Link'


export default function Image(props) {
  return (
    <div>
      <Link url={props.image} text={props.title} />
      <img src={props.image} className='App-logo' alt='logo' />
    </div>
  )
}
