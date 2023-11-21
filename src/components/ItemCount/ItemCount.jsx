import { useState } from "react"
import {toast} from "react-toastify"
import TotalValue from "../TotalValue/TotalValue"
import { useDarkModeContext } from "../../context/DarkModeContext"

const ItemCount = ({valorInicial, stock, onAdd, item}) => {
    const [valor, setValor] = useState(valorInicial)
    const restar = ()=> { (valor > valorInicial) && setValor(valor - 1) }
    const sumar = ()=> {(valor < stock) && setValor(valor + 1)}
    const {darkMode} = useDarkModeContext()

    const agregarCarrito = ()=>{
      onAdd(valor)
      toast(`Agregaste ${valor} productos al carrito`)
    }

  return (
    <>
    {
    valor > 1 && <TotalValue valorTotal={valor * item.precio}/>
   }
    <>
      <div className={`flex gap-3 items-center my-6 w-36 rounded-lg ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <button onClick={restar} className="bg-violet-500 p-2 m-2 rounded text-white w-10 h-10 text-lg hover:bg-violet-600">-</button>
          <p className={darkMode ? "text-gray-200" : "text-gray-600" }>{valor}</p>
        <button onClick={sumar} className="bg-violet-500 p-2 m-2 rounded text-white w-10 h-10 text-lg hover:bg-violet-600">+</button>
      </div>
      <button className={`rounded  p-3 border-0 inline-flex items-center justify-center ${darkMode ? "bg-gray-800 hover:bg-gray-900 text-gray-200" : "text-gray-500 hover:bg-gray-300 bg-gray-200"} `} onClick={agregarCarrito}>
      Añadir al Carrito
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </button>
   </>
   </>
  )
}

export default ItemCount