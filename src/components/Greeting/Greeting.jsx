import { useDarkModeContext } from "../../context/DarkModeContext"
const Greeting = ({mensaje}) => {
  const {darkMode} = useDarkModeContext()
  return (
    <p className={`font-light text-xl ${darkMode ? "text-gray-200" : "text-black"} `}>{mensaje}</p>
  )
}

export default Greeting