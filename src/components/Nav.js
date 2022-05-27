import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import '../App.css'

function Nav() {
  const [isOpen, setOpen] = useState(false)
  const handleNav =() => {
    setOpen(!isOpen)
  }
  const handleLogo = () => {
    isOpen ? setOpen(!isOpen) : setOpen(isOpen)
  }

  return (
  <nav className="flex justify-between items-center md:h-32 h-24 max-w-[1240px] mx-auto text-heroGrey z-999 mt-5">
  <Link onClick={handleLogo} to='/'><div className="px-5 text-3xl font-bold text-heroGrey hover:scale-105 duration-300 ml-10">
<h1>Liam Desroy.</h1>
<h1>Filmmaker</h1>
  </div>
  </Link>
  <ul className="sm:flex hidden m-10">
    <li className="px-5 text-lg hover:scale-105 hover:text-heroSand duration-300"><Link to='/about'>about</Link></li>
    <li className="px-5 text-lg hover:scale-105 hover:text-heroSand duration-300"><Link to='/contact'>contact</Link></li>
  </ul>
  <div className="block sm:hidden m-10">
  <Hamburger toggled={isOpen} toggle={setOpen} size={24} duration={0.4} rounded color="#2e2b2f" />
  </div>
  <div className={isOpen ? "text-center top-28 w-full h-full bg-heroSand bg-opacity-80 ease-in-out duration-500 sm:hidden fixed z-50" : " fixed top-full"}>
  <ul className="text-3xl mt-10">
    <li onClick={handleNav} className="p-4 hover:text-heroPink hover:scale-105 duration-300"><Link to='/about'>about</Link></li>
    <li onClick={handleNav} className="p-4 hover:text-heroPink hover:scale-105 duration-300"><Link to='/contact'>contact</Link></li>
  </ul>
  </div>
 
  </nav>
  )
}

export default Nav