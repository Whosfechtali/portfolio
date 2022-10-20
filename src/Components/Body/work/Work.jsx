import React from 'react'
import '../../../App.css'
import { FaGithub, FaFolder } from 'react-icons/fa';
import Projectcard from './Projectcard';
import ProjectcardData from './ProjectcardData';


function  Work() {
    return (
        <div>
          <h1 className="text-center text-5xl mt-2 mb-8 " id={'Work'}>Work</h1>
          <div class="work flex flex-row px-8 gap-16">
            {ProjectcardData.map(list => (
                <Projectcard
                  github={list.github}
                  url = {list.url}
                  title = {list.title}
                  description = {list.description}
                  technologies = {list.technologies}
                  />
            ))}
        </div>
        </div>

    )
}

export default Work;
