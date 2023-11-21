import BotonDarkMode from "../BotonDarkMode/BotonDarkMode"
import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import Greeting from "../Greeting/Greeting"
import Sections from "../Sections/Sections"
import { useDarkModeContext } from "../../context/DarkModeContext"

const Navbar = () => {
  const {darkMode} = useDarkModeContext()
  return (
    <div className={`block md:flex md:flex-wrap md:h-20 items-center justify-between w-full py-4 md:py-0 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
    <Link to={"/"} className={`text-3xl font-bold md:inline-block ${darkMode ? "text-violet-700" : "text-violet-600"}`}>On Game</Link>
    <Greeting mensaje="Buenos Días!"/>
    <div className="lg:flex lg:flex-row gap-5 items-center inline-block">
      <Sections/>
      <CartWidget/>
      <BotonDarkMode/>
    </div>
  </div>
    )
}

export default Navbar