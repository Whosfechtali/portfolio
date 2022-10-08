import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';
import MobileMenu from './MobileMenu';
import TextZone from './TextZone';
import DesktopMenu from './DesktopMenu';


function Header(){

  return(
    <div className="Header static">
    <TextZone />
    <div className="w-full top-0">
      <nav className="navbar top-0 bg-primary h-12	flex flex-row relative border-y border-fourthly	" id={"Home"}>
        <DesktopMenu />
        <MobileMenu />
      </nav>
      </div>
      </div>
  )
}
export default Header;
