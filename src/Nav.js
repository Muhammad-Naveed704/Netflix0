import React, { useEffect, useState } from 'react'
import  './Nav.css'

function Nav() {
    const [show ,handleShow]= useState(false);
    const transitionNavBar =()=>{
        if(window.scrollY >100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar)
    },[])
  return (
    <div className={`nav ${show && "nav_black"} `}>
    <div className='nav_contants'>
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img className='nav_avatar' src="https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg" alt="" />
         
    </div>
    </div>
  )
}

export default Nav