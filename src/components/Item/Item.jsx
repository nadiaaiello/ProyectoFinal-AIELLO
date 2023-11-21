import { Link } from "react-router-dom"

import { useDarkModeContext } from "../../context/DarkModeContext"
const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()
  return (
    <div className={`m-3 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
      <img className="p-8 rounded-lg" src={item.img} alt={item.nombre} />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className={`text-2xl font-semibold tracking-tight ${darkMode ? "text-violet-500" : "text-violet-700" }`}>{item.nombre}</h5>
        </a>
        <p className={`text-lg  font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Marca: <span className={darkMode ? "text-gray-300" : "text-gray-700"} >{item.marca}</span></p>
        <p className={`text-lg  font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>Modelo: <span className={darkMode ? "text-gray-300" : "text-gray-700"}>{item.modelo}</span></p>
        <span className={`text-2xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700" }  `}>${new Intl.NumberFormat("de-DE").format(item.precio)}</span>
        <div className=" flex items-center justify-between mt-3">
          <Link to={`/item/${item.id}`} className={`font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none text-white ${darkMode ? "bg-violet-700 hover:bg-violet-800 focus:ring-violet-800" : " bg-violet-700 hover:bg-violet-800"}`}>Ver el Producto</Link>
        </div>
      </div>
    </div>
  )
}

export default Item