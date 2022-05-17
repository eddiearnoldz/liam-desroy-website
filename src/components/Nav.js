import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import '../App.css'

function Nav() {
  const [isOpen, setOpen] = useState(false)

  return (
  <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-heroGrey">
  <h1 className="w-full px-5 text-3xl font-bold text-heroGrey"><Link to='/'>Liam Desroy.</Link></h1>
  <ul className="md:flex hidden">
    <li className="px-5 text-lg">about</li>
    <li className="px-5 text-lg">contact</li>
  </ul>
  <div className="block md:hidden">
  <Hamburger toggled={isOpen} toggle={setOpen} size={20} duration={0.4} rounded color="#2e2b2f" />
  </div>
  <div className={isOpen ? "fixed text-center top-20 w-full h-5/6 bg-heroSand z-100 ease-in-out duration-500 md:hidden" : "fixed top-full"}>
  <ul className="text-3xl mt-10">
    <li className="p-4 hover:text-heroPink hover:scale-105 duration-300"><Link to='/about'>about</Link></li>
    <li className="p-4 hover:text-heroPink hover:scale-105 duration-300">contact</li>
  </ul>
  </div>
 
  </nav>
  )
}

export default Nav