import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import gif from '../gifs/Dead in October - Trailer-low.gif'


const Video = ({url}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <div className='p-3 h-full w-full'>
      <div className=' hover:scale-105 duration-300 h-[300px]'>
        <ReactPlayer
        url={url}
        controls={true}
        width='100%'
        height='100%'
        onReady={() => {setIsLoaded(true)}}
        />    
      </div>
   </div>
      
  )
}

export default Video