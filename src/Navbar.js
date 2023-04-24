import React, { useState,useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const[show,handleshow]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
         if(window.scrollY>650){
            handleshow(true)
         }
         else{
            handleshow(false)
         }
        })
    },[])
    console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img className='logo' src="https://i.postimg.cc/7hZZb3kh/Netflix-2015-logo-svg.png"></img>
    </div>
  )
}

export default Navbar
