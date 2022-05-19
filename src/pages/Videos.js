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
  {image: percival, url:"https://vimeo.com/710751949", text: 'Pericval'},
  {image: april, url:  "https://vimeo.com/710753842", text: 'Modern Love'},
  {image: champion, url: "https://vimeo.com/377951727", text: 'Modern Love'},
  {image: us, url: "https://vimeo.com/673592625", text: 'Modern Love'},
  {image: potions, url: "https://vimeo.com/678279129", text: 'Modern Love'},
  {image: follow, url: "https://vimeo.com/710756878", text: 'Modern Love'},
  {image: dio, url: "https://vimeo.com/673588688", text: 'Modern Love'},
  {image: mulimba, url:"https://vimeo.com/710750869", text: 'Modern Love'},
  {image: sepa, url: "https://vimeo.com/710756878", text: 'Modern Love'}
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
        </div> : <h1 className="mt-10">Work</h1>}
    </div>
     <div className="container h-full max-w-4xl w-full justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 p-5 h-full">
        {videos.map((image, index) => {
          return (
            <>
            <div className="relative h-auto w-auto rounded-lg cursor-pointer object-fit m-auto p-1">
              <img key={index} id={image.url} onClick={handleVideoLoad} className="rounded-md" src={image.image} alt='gif'/>
              <div className="absolute top-1/2 left-1/2 text-center">
              <h1 className="text-xl font-bold  text-heroSand">{image.text}</h1>
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