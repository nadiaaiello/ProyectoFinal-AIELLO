import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";
import { getProducto } from "../../utils/firebase";
const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();
  const {darkMode} = useDarkModeContext()
  useEffect(()=>{
    getProducto(id)
    .then(item =>{
      setProducto(item)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className={`text-gray-700 body-font overflow-hidden ${darkMode ? "bg-black" : "bg-gray-100"} `}>
      <>
      <Link className={`text-lg m-3 hover:underline text-gray-700 ${darkMode ? "hover:text-gray-600" : "hover:text-gray-500"}    `} to={"/"}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-3 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>

        </button>
      </Link>
      </>
        
        <ItemDetail item={producto}/>
    </div>
    )
}

export default ItemDetailContainer