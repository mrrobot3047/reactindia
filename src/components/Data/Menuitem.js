import React from 'react'

function MenuItem({image,place,url}) {
  return (
    <div className='menuItem'>
        <a href={url}><div style={{backgroundImage:`url(${image})`}}></div></a>
        <h1>{place}</h1>

    </div>
  )
}

export default MenuItem