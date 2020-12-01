import React from 'react'

export default function Paragraph(props) {

function renderTitel() {
  if(props.titel) {
  return <h2>{props.title}</h2>
  } else {
    return <h2>No title</h2>
  }
}

  return (
    <div>
      {/* { props.title && <h2>{props.title}</h2>} */}
      {/*{ props.title ? <h2>{props.title}</h2> : <h2>No title</h2>} */} {/* если пропс имеет тайтл, то вернуть его, иначе вернуть Но тайтл*/}
      {renderTitel()}
      <p>
        {props.children}
      </p>
    </div>
    
  )
}
