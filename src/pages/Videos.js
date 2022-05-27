import React, {useState} from 'react';
import Video from '../components/Video';

//import images
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
  {image: champion, url:"https://vimeo.com/710751949", text: "Percival w/ Champion: Cam Operator; 1st Ac"},
  {image: dio, url: "https://vimeo.com/377951727", text: 'Dead in October - FEATURE FILM: Director; Writer; Editor'},
  {image: potions, url: "https://vimeo.com/673592625", text:  "Leap - POTIONS: Director; DOP; Editor; Colourist"},
  {image: follow, url: "https://vimeo.com/678279129", text: 'Modernlove. - FOLLOW YOU: Director; Shot by; Editor; Colourist'},
  {image: percival, url:  "https://vimeo.com/710753842", text: 'Percival - THE AWAY LOUNGE: Cam Operator; 1st Ac'},
  {image: us, url: "https://vimeo.com/673588688", text: 'Modernlove. - Us: Director; DOP; Editor; Colourist'},
  {image: mulimba, url: "https://vimeo.com/673634183", text: 'Mulimiba - HERE I GO: Director; Shot by; Editor; Colourist'},
  {image: april, url:"https://vimeo.com/710750869", text: 'April - PIECES OF ME: 1st AD'}
]

const Videos = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isLoaded, setIsLoaded] = useState(0)

  const handleVideoLoad = (e) => {
    e.preventDefault();
    setIsOpen(e.target.id)
    window.scroll({top:0,behavior:'smooth'})
  }
  // const handleLoadedImage = () => {
  //   setIsLoaded(...isLoaded++)
  // }

  return (
    <>
    
    <div className="text-center">
    {isOpen ? 
      <div className="p-1">
      <Video url={videos[isOpen].url}/>
      <h1 className='font-bold text-lg text-heroSand'>{videos[isOpen].text}</h1>
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
            {/* <div className="absolute bottom-1/2 w-[100%] tracking-widest">
            <h1 id={image.url} onClick={handleVideoLoad} className="md:text-2xl text-xl font-bold text-center text-heroSand">{image.text}</h1>
            </div> */}
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