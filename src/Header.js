import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { FaUser } from "react-icons/fa";


const Header = () => {

  return (

    <header className="mb-2 mt-4 ">
      <nav  className="mt-2  nav justify-content-end">
  <Link className=" mr-3 mb-5 mt-2 linkLogin " to="/login">Login / Criar</Link> 
  <FaUser className='user mr-5 mt-2 ' size='2rem' alt="Usuario"></FaUser>
 
      </nav>
    </header>
  )
}

export default Header
