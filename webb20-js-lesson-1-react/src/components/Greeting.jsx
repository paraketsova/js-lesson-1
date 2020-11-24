import React from 'react'

function Greeting(props) {
  console.log(props)
  const { greeting, firstName } = props
  
  return (
    <h1>{greeting}, {firstName}</h1>
  )
}

export default Greeting;