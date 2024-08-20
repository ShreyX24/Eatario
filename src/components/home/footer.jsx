import React from 'react'
import Logo from '../landingpage/logo'

const Footer = () => {
    const currDate = new Date();
    const currYear = currDate.getFullYear(); 
  return (
    <footer className='h-10 flex items-center justify-evenly border-t-2 border-red-500 px-4'>
        <Logo />
        <span>All rights reserved @ {currYear}</span>
    </footer>
  )
}

export default Footer