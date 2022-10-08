import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';



function TextZone(){
        return(
          <div>
          <div className="TextZone text-left ml-12 float-none 	">
          <div className="md:opacity-80	lg:opacity-80">
          <p className="text-base"> Hi There, 👋 I am</p>
          <div className="whitespace-nowrap">
          <span className="italic text-base">&lt;h1&gt;
          </span>
          <span className="text-secondary text-4xl">Mohamed,
          </span>
          <span className="italic text-base">&lt;/h1&gt;
          <br />
          </span>
          </div>
          <span className="italic text-base">&lt;p&gt;
          </span>
          <span>Junior Web Developer</span>
          <span className="italic text-base">&lt;/p&gt;
          </span>
          </div>
          <button className="bg-secondary whitespace-nowrap rounded-2xl	mt-6 mb-3 border border-secondary text-first py-1 px-8 hover:bg-seventh borded border-thirdly rounded"
          onClick={()=> window.open('mailto:fechtali0u77@icloud.com')}
          >
            Say  Hello
          </button>
          </div>
          <div className=" TextZoneImage absolute right-0 top-20">
          <img className="h-96 w-96" src='./resources/Web_Developer.svg' alt="Web Developer"/>
          </div>
          </div>

        )

}
export default TextZone;
