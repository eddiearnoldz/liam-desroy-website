import React, { useState } from 'react'
import ReactPlayer from 'react-player'


const Video = ({url, onReady}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
<>
    <div className= 'p-3 h-full w-full'>
      <div className='h-[300px]'>
        <ReactPlayer
        url={url}
        width='100%'
        height='100%'
        controls={true}
        playing={isPlaying}
        onReady={() => setIsPlaying(true)}
        />    
      </div>
    </div> 
 
</>
  
  )
}

export default Video