import React from 'react'
import '../../../App.css'
import { FaGithub, FaFolder } from 'react-icons/fa';


function Projectcard(props) {
    return (
        <div class= "relative first w-3/6 h-72 m-auto bg-[#102340] px-16 rounded-md">
        <div class="absolute right-6 top-4">
          <button
            onClick={() => {window.open(props.github)}}>
            <FaGithub size={30}
              onMouseOver={({target})=>target.style.color="#1B6C83"}
              onMouseOut={({target})=>target.style.color=""}
              />
          </button>
          </div>
          <div class="absolute left-9 top-2">
          <button
            onClick={() => {window.open(props.url)}}>
            <FaFolder size={50}
              onMouseOver={({target})=>target.style.color="#1B6C83"}
              onMouseOut={({target})=>target.style.color=""}
              />
          </button>
        </div>
        <span
          class="absolute left-6 top-20 text-xl cursor-pointer text-[#CCD7F5]"
          onClick={() => {window.open(props.url)}}
          onMouseOver={({target})=>target.style.color="#1B6C83"}
          onMouseOut={({target})=>target.style.color=""}>
          {props.title}
        </span>
        <div class="absolute left-6 top-32 text-md mt-2">
          <p>
            {props.description}
          </p>
        </div>
        <span class="absolute left-12 bottom-4 text-[#CCD7F5] [word-spacing:30px]">
          {props.technologies}
        </span>
      </div>

    )
}

export default Projectcard;
