import React from 'react';
import liam from '../images/liam-profile.gif'
import mancAudience from '../images/manchester-audience-award.png'
import manScore from '../images/manchester-audience-award.png'
import nottingham from '../images/nottingham-selection.png'
import ramsgate from '../images/ramsgate-selection.png'
import wonderland from '../images/wonderland-quote.png'

const About = () => {
  return (
    <div className='grid place-items-center h-full w-full'>
      <div className="content-center m-3 mt-10">
        <img className="rounded-md w-96 m-auto" src={liam} alt='liam'/>
        <p className="text-center mt-10">      
          Award winning filmmaker from Bradford, West Yorkshire; based in London.
        </p>
        <p className="text-center mt-2 font-semibold text-xl">
          Camera-op; Editor; Colourist; AD; Writer; Director
        </p>
        <p className="text-center mt-2">
          Get in touch and I'll bang the kettle on. 
        </p>
      </div>
      <div className="text-center mt-5 mb-5">
        <p className='font-semibold'>
        Writer and director of award winning feature, Dead in October 
        </p>
        <div className='flex'>
          <div className='md:flex block'>
            <img className="md:h-20  h-32"src={mancAudience} alt='laurel'/>
            <img className="md:h-20 h-36" src={nottingham} alt='laurel'/>
            
          </div>
          <div className='md:flex block'>
            <img className="md:h-20 h-32 " src={manScore} alt='laurel'/>
            <img className="md:h-20 h-32 " src={ramsgate} alt='laurel'/>
          </div>
        </div>
      </div>
      <img className="max-w-xs mb-10" src={wonderland} alt='wonderland quote'/>
    </div>
    
  )
}

export default About