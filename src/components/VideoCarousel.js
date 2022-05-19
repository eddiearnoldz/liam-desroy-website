import React, {useState} from 'react'
import ReactPlayer from 'react-player'

const videos = [
  "https://vimeo.com/710756878",
  "https://vimeo.com/710753842",
  "https://vimeo.com/377951727",
  "https://vimeo.com/673592625",
  "https://vimeo.com/678279129",
  "https://vimeo.com/710756878",
  "https://vimeo.com/673588688",
  "https://vimeo.com/710750869",
  "https://vimeo.com/710751949"
]

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleOnNextClick = () => {
    {setCurrentIndex(currentIndex + 1)}
  }
  const handleOnPrevClick = () => {
    setCurrentIndex(currentIndex - 1)
  }
  return (
    <>
    <div className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9 ">
      <ReactPlayer
        url={videos[currentIndex]}
        controls={true}
        color={'#2e2b2f'}
        responsive={true}
        height='100vh'
        width='100vw'
        /> 
      </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-center px-3">
          <button onClick={handleOnPrevClick}>previous</button>
          <button onClick={handleOnNextClick}>next</button>
        </div>
   </div>
    </>
   
  )
}

export default VideoCarousel