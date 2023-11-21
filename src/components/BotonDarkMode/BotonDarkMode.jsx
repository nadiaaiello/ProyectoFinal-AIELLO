import { useDarkModeContext } from "../../context/DarkModeContext"

const BotonDarkMode = () => {
  const {darkMode, toggleDarkMode } = useDarkModeContext()
  return (
    <>
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" defaultValue className="sr-only peer" onInput={()=> toggleDarkMode() }/>
        <div className= "w-11 h-6  peer-focus:outline-none peer-focus:ring-4 rounded-full peer-checked:after:translate-x-full peer-focus:ring-violet-600 border-gray-600 peer-checked:bg-violet-600 peer-focus:ring-violet-30 bg-gray-700 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    </>

  )
}

export default BotonDarkMode