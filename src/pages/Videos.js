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
        
        <div className="grid justify-center min-w-full mt-20 overflow-x-hidden mb-28">
          <div className="grid max-w-5xl grid-cols-1 ">
            {videos.map((image, index) => {
              return (
                <>
                <div key={index} className="relative rounded-lg cursor-pointer duration-300 p-3 overflow-hidden">
                  <img key={index} id={index} onClick={handleVideoLoad} className="object-cover object-center rounded-md h-[100%] w-[100%] hover:scale-105 duration-500 aspect-[16/9]" src={image.image} alt='gif' loading="lazy"/>
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