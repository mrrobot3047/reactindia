import React from 'react'
import MenuItem from '../Data/Menuitem'
import {MenuList} from '../Data/MenuList'
import '../Card/Card.css'

function Card() {
  return (
    <>
    <h1 id='features' >Places to Visit</h1>
   
      <div className='menuList'>{MenuList.map((menuItem,key)=>{
        return <MenuItem key={key}  image={menuItem.image} place={menuItem.place} url={menuItem.url}  />
      })}</div>
    </>
  )
}

export default Card

