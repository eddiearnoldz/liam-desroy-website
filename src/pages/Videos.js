import React from 'react'
import Video from '../components/Video'

const Videos = () => {
  return (
    <div className=" lg:h-[1000px] lg:w-[1000px] place-items-center">
<div className='grid lg:grid-cols-3 grid-cols-1 place-items-center'> 
      <Video url="https://vimeo.com/710756878"/>
      <Video url="https://vimeo.com/710753842"/>
      <Video url="https://vimeo.com/377951727"/>
      <Video url="https://vimeo.com/673592625"/>
      <Video url="https://vimeo.com/678279129"/>
      <Video url="https://vimeo.com/710756878"/>
      <Video url="https://vimeo.com/673588688"/>
      <Video url="https://vimeo.com/710750869"/>
      <Video url="https://vimeo.com/710751949"/>
    </div> 
    </div>
      
  )
}

export default Videos