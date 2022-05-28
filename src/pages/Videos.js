import React, {useState} from 'react';
import Video from '../components/Video';
import videos from '../docs/videos';

const Videos = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleVideoLoad = (e) => {
    e.preventDefault();
    setIsOpen(e.target.id)
    window.scroll({top:0,behavior:'smooth'})
  }

  return (
    <> 
      <div className="text-center">
        {isOpen ? 
          <div className="p-1">
          <Video url={videos[isOpen].url}/>
          <h1 className='font-bold tracking-wide text-lg text-heroSand'>{videos[isOpen].text}</h1>
          <button onClick={()=>setIsOpen(false)}>Back to videos</button>
          </div> : null}
      </div>
      
      <div className="grid justify-center min-w-full mt-20 overflow-x-hidden">
        <div className="grid max-w-5xl sm:grid-cols-3 grid-cols-2 ">
          {videos.map((image, index) => {
            return (
              <>
              <div key={index} className="relative h-[180px] rounded-lg cursor-pointer hover:opacity-80 duration-300 p-2 overflow-x-hidden">
                <img key={index} id={index} onClick={handleVideoLoad} className="object-cover object-center rounded-md h-[100%] w-[100%] hover:scale-105 duration-500" src={image.image} alt='gif'/>
              </div>
              </>
            )
          })}
        </div>
      </div>
    </>   
  )
}

export default Videos