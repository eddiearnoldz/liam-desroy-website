import React from 'react'
import ReactPlayer from 'react-player'


const Video = ({url, onReady}) => {
  return (
    <div className='p-3 h-full w-full'>
      <div className=' hover:scale-105 duration-300 h-[300px]'>
        <ReactPlayer
        url={url}
        controls={true}
        width='100%'
        height='100%'
        />    
      </div>
   </div>
      
  )
}

export default Video