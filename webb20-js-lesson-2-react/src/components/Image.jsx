import React from 'react'
import Link from './Link'


export default function Image(props) {
  let counter = 0

  function onClickHandler() {
    /* alert(props.title)  - TEST */
    counter = counter + 1 // or counter+=1
    console.log(counter)
  }

  return (
    <div>
      <Link url={props.image} text={props.title} />
      <img onClick={(onClickHandler)} src={props.image} alt='logo' />
      <p>{counter}</p>
    </div>
  )
}
