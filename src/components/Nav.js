import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
import '../App.css'

function Nav() {
  const [isOpen, setOpen] = useState(false)

  return (
  <nav className="flex justify-between py-4">
    <div className="ml-20 md:text-2xl hover:scale-105 duration-300">
      <Link to='/' >Liam Desroy</Link>
    </div>
      <ul className="flex mr-10">
        <li className=" md:text-xl px-5 hover:scale-105 duration-300"><Link to='/about'>About</Link></li>
        <li className="px-5 hover:scale-105 duration-300 md:text-xl"><Link to='/contact'>Contact</Link></li>
      </ul>
    <button className="md:hidden inline-flex">
    <Hamburger size={25} rounded duration={0.4} color="#824D8F" toggled={isOpen} toggle={setOpen} />
    </button>
    
  </nav>
  )
}

export default Nav