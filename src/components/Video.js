import React from 'react'
import ReactPlayer from 'react-player'

const Video = ({url}) => {
  return (
    <div className='realtive pt-[56.25%]'>
      <div className='absolute'>
        <ReactPlayer
        url={url}
        controls={true}
        width='300px'
        height='300px'
        />    
      </div>
   </div>
      
  )
}

export default Video