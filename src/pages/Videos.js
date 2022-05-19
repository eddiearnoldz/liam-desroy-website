import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/Video';

//import images
import gif from '../gifs/Dead in October - Trailer-low.gif'
import april from '../images/April.png';
import percival from '../images/Percival.png';
import champion from '../images/champion.png';
import us from '../images/modern-love-us.png';
import potions from '../images/potions.png';
import follow from '../images/modern-love-follow.png';
import dio from '../images/DIO.png';
import mulimba from '../images/mulimba.png';
import sepa from '../images/percival-sepa.png';




const videos = [
  {image: sepa, url:"https://vimeo.com/710751949", text: 'Pericval'},
  {image: percival, url:  "https://vimeo.com/710753842", text: 'Percival'},
  {image: dio, url: "https://vimeo.com/377951727", text: 'Dead In October'},
  {image: potions, url: "https://vimeo.com/673592625", text: 'Leap: Potions'},
  {image: follow, url: "https://vimeo.com/678279129", text: 'Modern Love: Follow You'},
  {image: sepa, url: "https://vimeo.com/710756878", text: 'Percival'},
  {image: us, url: "https://vimeo.com/673588688", text: 'Modern Love: Us'},
  {image: april, url:"https://vimeo.com/710750869", text: 'April'},
  {image: mulimba, url: "https://vimeo.com/710756878", text: 'Mulimba'}
]

const Videos = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

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
        <Video url={isOpen}/>
        <button onClick={()=>setIsOpen(false)}>Back to videos</button>
        </div> : null}
    </div>
     <div className="grid h-full justify-center min-w-full">
      <div className="grid max-w-4xl md:grid-cols-3 grid-cols-1 h-full p-2">
        {videos.map((image, index) => {
          return (
            <>
            <div className="relative h-auto w-auto rounded-lg cursor-pointer m-auto p-3 hover:opacity-80 duration-300">
              <img key={index} id={image.url} onClick={handleVideoLoad} className=" object-cover object-center rounded-lg" src={image.image} alt='gif'/>
              <div className="absolute bottom-2/4 w-[100%] justify-center align-center ">
              <h1 className="text-xl font-bold text-center  text-heroSand">{image.text}</h1>
              </div>
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

{/* <Video url="https://vimeo.com/710756878"/>
      <Video url="https://vimeo.com/710753842"/>
      <Video url="https://vimeo.com/377951727"/>
      <Video url="https://vimeo.com/673592625"/>
      <Video url="https://vimeo.com/678279129"/>
      <Video url="https://vimeo.com/710756878"/>
      <Video url="https://vimeo.com/673588688"/>
      <Video url="https://vimeo.com/710750869"/>
      <Video url="https://vimeo.com/710751949"/> */}