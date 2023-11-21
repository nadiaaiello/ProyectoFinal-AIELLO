import { useDarkModeContext } from "../../context/DarkModeContext"
import { useCarritoContext } from "../../context/CarritoContext"
const ItemCart = ({item}) => {
    const {nombre, precio, modelo, cant} = item
    document.body.classList.add("bg-gray-50")
    const {darkMode} = useDarkModeContext()
    const {removeItem} = useCarritoContext()
  return (
    <div className={`flex justify-start m-5 shadow-lg rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <div className="flex flex-col md:flex-row p-3">
            <img className="w-full md:h-auto object-cover md:w-60 rounded-t-lg md:rounded-lg" src={item.img} alt={item.nombre} />
            <div className="p-6 flex flex-col justify-start">
                <h5 className= {`text-xl mb-2 ${darkMode ? "text-gray-200" : "text-gray-900"}`}>Producto: <span className="font-medium"> {nombre}</span> </h5>
                <p className={`text-lg mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Modelo: <span className="font-medium">{modelo}</span></p>
                <p className={`text-lg mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Precio: <span className="font-medium">$ {new Intl.NumberFormat("de-DE").format(precio)} </span></p>
                <p className={`text-lg mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Cantidad: <span className="font-medium"> {cant}</span></p>
                <p className={`text-lg mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Subtotal: <span className="font-medium">$ {new Intl.NumberFormat("de-DE").format(precio * cant)}</span></p>
                <button className={`p-3 border text-white w-36 rounded-lg ${darkMode ? "bg-red-700 border-red-900 hover:bg-red-800" : "bg-red-500 hover:bg-red-600 border-red-700"}`} onClick={()=> removeItem(item.id)}>Eliminar del Carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCart