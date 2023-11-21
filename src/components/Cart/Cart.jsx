import { Link } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { useDarkModeContext } from "../../context/DarkModeContext"
import { useCarritoContext } from "../../context/CarritoContext"
const Cart = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    // 
    return(
        <>
            {carrito.length === 0 
                ? 
                <>
                    <h2 className={`m-3 text-lg ${darkMode ? "text-gray-400" : "text-gray-700" }`}>Carrito Vacío. Agregue productos</h2>
                    <Link to={"/"}> <button className={`p-3 ml-3 rounded-lg text-white ${darkMode ? "bg-violet-600 hover:bg-violet-700" : "bg-violet-500 hover:bg-violet-600"}`}>Continuar comprando</button> </Link>
                </>
                :
                <div className="container">
                    <h2 className={`text-2xl font-medium m-5 ${darkMode ? "text-violet-700" : "text-violet-600"} `}>Tus Productos:</h2>
                    <ItemList products={carrito} plantilla={"item-cart"}/>
                    <div className="container flex flex-col">
                        <h2 className={`text-xl m-3 ml-6 font-medium ${darkMode && "text-gray-200"}`}>Resumen de la compra: <span className="font-normal">${new Intl.NumberFormat("de-DE").format(totalPrice())}</span></h2>
                        <button className={`p-3 max-w-sm m-3 ml-6 border ${darkMode ? "bg-red-500 text-white hover:bg-red-600 border-red-900 " : "bg-red-300  border-red-600  hover:bg-red-200"} `} onClick={()=> emptyCart()}>Vaciar carrito</button>
                        <Link to={"/checkout"} className={`p-3 text-center max-w-sm m-3 ml-6 border ${darkMode ? "bg-violet-500 border-violet-900 text-white hover:bg-violet-600" : "bg-violet-300  border-violet-600  hover:bg-violet-200"} `}>Finalizar Compra</Link>
                        <Link to={"/"} className={`p-3 max-w-sm m-3 ml-6 text-center border ${darkMode ? "bg-gray-600 border-gray-900 hover:bg-gray-700 text-gray-300" : "bg-gray-300  border-gray-600  hover:bg-gray-200"} `}><button>Continuar Comprando</button></Link>
                    </div>
                </div>
            }
        </>
    )
}

// if(false){
//     return <p>Es verdadero</p>
//   }
//   return <p>Es falso</p>

// const condLogica = false
//     return(<>
//         {condLogica && <p>Es verdadero</p>}
//         {!condLogica && <p>Es false</p>}
//     </>)

// condiconal 3 = el mas optimo :
// return(
//     <>
//         {/* {condLogica ? "Es verdadero" : "Es falso"} */}
//     </>
// )

export default Cart