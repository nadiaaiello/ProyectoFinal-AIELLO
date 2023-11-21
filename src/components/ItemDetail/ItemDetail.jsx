import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useDarkModeContext } from "../../context/DarkModeContext"
import { useCarritoContext } from "../../context/CarritoContext"
const ItemDetail = ({item}) => {
  const {darkMode} = useDarkModeContext()
  const {addItem} = useCarritoContext()

  const onAdd = (cantidad)=>{ //agregar el producto al carrito
    addItem(item, cantidad)

  }

  return (
      <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded-xl border border-gray-200" src={item.img} />

      
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
        <ProductDetail item={item}/>      
        <div className="mt-3 items-center" >
          <Link to={"/checkout"} className= {`ml-auto rounded text-white items-center border-0 py-3 px-4 focus:outline-none ${darkMode ? "bg-violet-700 hover:bg-violet-800"  : "bg-violet-500 hover:bg-violet-600" }`} >Finalizar Compra</Link>
          <ItemCount valorInicial={1} stock={item.stock} onAdd={onAdd} item={item}/>
          </div>
        </div>
      </div>
    </div>
  
    )
}

export default ItemDetail