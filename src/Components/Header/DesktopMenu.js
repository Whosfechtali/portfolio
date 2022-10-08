import React, { useState, useEffect, useRef } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../../App.css';


function DesktopMenu(){
        return(


          //Menu for Large screen with position absolute
          //top, left bottom right 0
          //and it contains 4 list items with margin left 10

          <div className="DesktopMenu absolute inset-0">
            <ul className="flex">
              <li className= "Animation ml-10">
              <Link style={{cursor: "pointer"}} activeClass="About" className="about" to="Home" spy={true} smooth={true} duration={500}>Home</Link>
              </li>
              <li className= "Animation ml-10 ">
              <Link style={{cursor: "pointer"}} activeClass="About" className="about" to="About" spy={true} smooth={true} duration={500}>About</Link>
              </li>
              <li className= "Animation ml-10">
              <Link style={{cursor: "pointer"}} activeClass="About" className="about" to="Work" spy={true} smooth={true} duration={500}>Work</Link>
              </li>
              <li className="Animation ml-10">
              <Link style={{cursor: "pointer"}} activeClass="About" className="about" to="Contact" spy={true} smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
            </div>
          )
      }

export default DesktopMenu;
