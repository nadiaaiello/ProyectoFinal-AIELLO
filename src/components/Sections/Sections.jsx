import { Link } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext"
import React from "react"
const Sections = React.memo( () => {
  const {darkMode} = useDarkModeContext()
  return (
    <div className="w-full md:flex md:items-center md:w-auto md:gap-4">
      <Link to={"/"} className={`text-md   uppercase ${darkMode ? "text-gray-300 hover:text-gray-400" : "hover:text-gray-500"}`} >Inicio</Link>
      <Link to={"/category/dispositivos"} className={`text-md   uppercase ${darkMode ? "text-gray-300 hover:text-gray-400" : "hover:text-gray-500"}`}>Consolas y Dispositivos</Link>
      <Link to={"/category/videojuegos"} className={`text-md   uppercase ${darkMode ? "text-gray-300 hover:text-gray-400" : "hover:text-gray-500"}`}>Videojuegos</Link>
      <Link to={"/category/accesorios"} className={`text-md   uppercase ${darkMode ? "text-gray-300 hover:text-gray-400" : "hover:text-gray-500"}`}>Accesorios</Link>
      <Link to={"/category/componentes"} className={`text-md  uppercase ${darkMode ? "text-gray-300 hover:text-gray-400" : "hover:text-gray-500"}`}>Componentes de PC</Link>
      <Link to={"/contacto"} className={`text-md   uppercase ${darkMode ? "text-gray-300 hover:text-gray-400" : "hover:text-gray-500"}`}>Contacto</Link>
    </div>
  )
})

export default Sections