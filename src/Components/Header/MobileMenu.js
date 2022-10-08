import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';


function MobileMenu(){


  const [close, Setisclose] = useState(true)


  function ShowMenu(){
    Setisclose(false)
  }


  function CloseMenu(){
    Setisclose(true)
  }

  // List item of the menu

  const menu = ["Home","About me","Work","Contact"];
  const listItems = menu.map((item, index) =>
    <li key={index}
    className="flex-1 mr-2 px-8">
    <a href="/"
    className="border-b border-fourtly text-left block text-white py-3 hover:duration-400 hover:font-bold hover:text-thirdly">
    {item}
    </a></li>
    )

  return(

    {/* Menu for small screens  and inline if statement to toggle between show and hide
      */},

    <div className="relative ExpandMenu w-screen h-screen"
      style={{
          visibility: close ? "hidden" : "visible"}}
          >

    {/* Button to Close the  menu
      */}

    <button
      className="w-6 mt-4 ml-3 mr-3 ">
      <img src="./resources/close.png"
      onClick={CloseMenu}
      />
      </button>

      {/* Button to show the menu */}


      <div className="MenuBurger absolute top-0 left-0"
      style={{
            visibility: (close === false) ? "hidden" : "visible"
          }}>

      <button
        className="w-6">
        <img src="./resources/menu.png"
        onClick={ShowMenu}/>
        </button>
        </div>


      {/* List item of the menu  */}


        <ul className="TextMobileMenu border-t border-fourtly  ml-3 mr-3">
        {listItems}
        </ul>


      {/* text at the bottom of the menu */}

      <p className="absolute bottom-0 left-0 right-0 text-center">Made with ❤️ in 🇫🇮</p>

      </div>

      )
}
export default MobileMenu;
