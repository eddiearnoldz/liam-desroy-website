import React from 'react';
import liam from '../images/liam-profile.gif'
import mancAudience from '../images/manchester-best-score.png'
import manScore from '../images/manchester-audience-award.png'
import nottingham from '../images/nottingham-selection.png'
import ramsgate from '../images/ramsgate-selection.png'
import wonderland from '../images/wonderland-quote.png'

const About = () => {
  return (
    <div className='grid place-items-center h-full w-full'>
      <div className="content-center m-3 mt-10 ">
        <img className="rounded-md w-96 m-auto" src={liam} alt='liam'/>
        <p className="text-center mt-10 md:text-xl text-lg">      
          Award winning filmmaker from Bradford, West Yorkshire; based in London
        </p>
        <p className="text-center mt-2 font-semibold md:text-xl text-lg">
          Camera-op; Editor; Colourist; AD; Writer; Director
        </p>
        <p className="text-center mt-2 md:text-xl text-lg">
          Get in touch and I'll bang the kettle on 
        </p>
      </div>
      <div className="text-center m-5">
        <p className='font-semibold md:text-lg text-md'>
        Writer and director of award winning feature, Dead in October 
        </p>
        <div className='flex justify-center align-center w-full m-5'>
          <img className="max-w-xs" src={wonderland} alt='wonderland quote'/>
        </div>
        <div className='md:flex justify-center align-center w-full'>
          <img className="h-36 inline-block" src={ramsgate} alt='laurel'/>
          <img className="h-36 inline-block"src={mancAudience} alt='laurel'/>
          <img className="h-36 inline-block " src={nottingham} alt='laurel'/>
          <img className="h-36 inline-block" src={manScore} alt='laurel'/> 
        </div>
      </div>
    </div>
  )
}

export default About