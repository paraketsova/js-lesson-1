import React from 'react'

export default function Paragraph({title, children}) {


  return (
    <>
      {/* { props.title && <h2>{props.title}</h2>} */}
      { title ? <h2>{title}</h2> : ''}
      {/*{ props.title ? <h2>{props.title}</h2> : <h2>No title</h2>} */} {/* если пропс имеет тайтл, то вернуть его, иначе вернуть Но тайтл*/}
      {/*renderTitel()*/}
      <p>
        {children}
      </p>
    </>
    
  )
}
