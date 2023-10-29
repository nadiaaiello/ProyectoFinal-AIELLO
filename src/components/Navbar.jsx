import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <h1>Kiosco Techno</h1>
    <div>
        <NavLink activeClassName to={"/"}>Home</NavLink>
        <NavLink activeClassName to={"/cart"}>Cart</NavLink>
    </div>
    </>
  )
}

export default Navbar
