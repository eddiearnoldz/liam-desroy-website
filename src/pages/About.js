import React from 'react';
import liam from '../images/liam-headshot.jpg'

const About = () => {
  return (
    <div className='grid place-items-center h-full'>
      <div className="content-center sm:max-w-md max-w-sm mt-10 m-5">
        <img className="rounded-lg h-60 m-auto" src={liam} alt='liam'/>
        <p className="text-center mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit elementum tempor. Praesent feugiat magna vel quam hendrerit sodales. Sed sodales pulvinar ligula. Proin posuere luctus neque quis ullamcorper. Nullam pharetra aliquet pharetra. 
        Etiam massa nunc, egestas quis urna sed, ultrices eleifend nisi. Quisque tincidunt hendrerit nunc, ac interdum mauris pretium vitae.
        </p>
      </div>
    </div>
    
  )
}

export default About