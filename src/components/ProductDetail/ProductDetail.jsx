import { useDarkModeContext } from "../../context/DarkModeContext"
const ProductDetail = ({item}) => {
  const {darkMode} = useDarkModeContext()
  return (
    <>
          <h2 className={`text-2xl title-font tracking-widest mb-3 ${darkMode ? "text-gray-300" : "text-gray-500"} `}>{item.marca}</h2>
          <h1 className={`text-3xl title-font font-medium mb-3 ${darkMode ? "text-gray-200" : "text-gray-900"}`}>{item.nombre}</h1>
          <p className={`leading-relaxed text-lg mb-4 font-medium ${darkMode && "text-gray-300"}`}>Modelo: <span className={`font-normal`}>{item.modelo}</span></p>
          <>
            <span className={`title-font font-medium text-2xl ${darkMode ? "text-gray-200" :"text-gray-900"}`}>${new Intl.NumberFormat("de-DE").format(item.precio)}</span>
            <p className={`leading-relaxed text-lg mb-4 mt-3 font-medium ${darkMode && "text-gray-300"}`}>Stock: <span className="font-normal">{item.stock}</span></p>
          </>
    </>
  )
}

export default ProductDetail