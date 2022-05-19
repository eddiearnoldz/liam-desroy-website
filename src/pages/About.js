import React from 'react';
import liam from '../liam-headshot.jpg'

const About = () => {
  return (
    <div className='grid place-items-center h-full'>
      <div className="content-center  sm:max-w-md max-w-sm">
        <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit elementum tempor. Praesent feugiat magna vel quam hendrerit sodales. Sed sodales pulvinar ligula. Proin posuere luctus neque quis ullamcorper. Nullam pharetra aliquet pharetra. 
        </p>
        <img className="rounded-lg h-50 m-auto" src={liam} alt='liam'/>
        <p className="text-center">
        Etiam massa nunc, egestas quis urna sed, ultrices eleifend nisi. Quisque tincidunt hendrerit nunc, ac interdum mauris pretium vitae.
        </p>
      </div>
    </div>
    
  )
}

export default About