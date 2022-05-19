import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import '../App.css'

function Nav() {
  const [isOpen, setOpen] = useState(false)
  const handleNav =() => {
    setOpen(!isOpen)
  }

  return (
  <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-heroGrey">
  <h1 className="px-5 text-3xl font-bold text-heroGrey hover:scale-105 duration-500"><Link to='/'><div>
<h1>Liam Desroy.</h1>
<h1>director</h1>
  </div>
  </Link></h1>
  <ul className="md:flex hidden">
    <li className="px-5 text-lg hover:scale-105 hover:text-heroSand duration-300"><Link to='/about'>about</Link></li>
    <li className="px-5 text-lg hover:scale-105 hover:text-heroSand duration-300"><Link to='/contact'>contact</Link></li>
  </ul>
  <div className="block md:hidden">
  <Hamburger toggled={isOpen} toggle={setOpen} size={24} duration={0.4} rounded color="#2e2b2f" />
  </div>
  <div className={isOpen ? "fixed text-center top-20 w-full h-5/6 bg-heroSand z-100 ease-in-out duration-500 md:hidden" : "fixed top-full"}>
  <ul className="text-3xl mt-10">
    <li onClick={handleNav} className="p-4 hover:text-heroPink hover:scale-105 duration-300"><Link to='/about'>about</Link></li>
    <li onClick={handleNav} className="p-4 hover:text-heroPink hover:scale-105 duration-300"><Link to='/contact'>contact</Link></li>
  </ul>
  </div>
 
  </nav>
  )
}

export default Nav