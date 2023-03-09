import React from 'react'
import Nav from './Nav';
import photo from "./photo.jpg"

export const App = () => {
  return (
    <>
    < Nav data={photo}/>
    <img src={photo} alt="hjj"/>   {/*for offline imges*/}
   {/* <img src="" alt=""/>   {/* for online images*/} 
    
    </>
  )
}
