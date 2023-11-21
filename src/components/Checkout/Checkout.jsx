import { useCarritoContext } from "../../context/CarritoContext"
import React from "react"
import { useState } from "react"
import { useDarkModeContext } from "../../context/DarkModeContext"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { getProducto, updateProducto, createOrdenCompra, getOrdenCompra } from "../../utils/firebase"
import {toast} from "react-toastify"
const Checkout = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate() 
    const [email, setEmail] = useState("")
    const [confirmarEmail, setConfirmarEmail] = useState("")
    const [alerta, setAlerta] = useState("")
    const consultarFormulario = (e)=>{
        e.preventDefault()
        if(email !== confirmarEmail){
            setAlerta("Los correos deben ser iguales. Por favor revise y vuelva a intentarlo")
            return;
        }
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCart =>{
            getProducto(prodCart.id).then(prodBDD => {
                prodBDD.stock -= prodCart.cant
                updateProducto(prodCart.id, prodBDD)
            })            
        })

        createOrdenCompra(cliente, aux , totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            toast.success(`Muchas gracias por su compra. Su orden de compra ${ordenCompra.id} de un total de $${new Intl.NumberFormat("DE-de").format(totalPrice())} fue realizada exitosamente`)
            emptyCart();
            e.target.reset()
            navigate("/")
        })

        
    }

  return (
    <>
        {carrito.length === 0 
            ?
            <>
            <h1 className="text-xl m-4">No hay productos en el carrito, agregá más para realizar una compra</h1>
            <Link to={"/"} className="text-lg bg-violet-600 p-3 rounded-lg text-white m-3 hover:bg-violet-500">Ver productos</Link>
            </>
            :
            <>
                <form onSubmit={consultarFormulario} ref={datosFormulario} className={`p-3 m-6 rounded-xl ${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
                    <p className="my-2 bg-red-300 p-3 border border-red-900">{alerta}</p>
                    <div className="mb-6">
                        <label htmlFor="nombre" className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900" }`}>Nombre y Apellido</label>
                        <input type="text" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800 hover:bg-gray-400" : "bg-gray-200  border-gray-300"}`} placeholder="Escribe tu Nombre y Apellido" name="nombre" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900" }`}>Correo electrónico</label>
                        <input type="email" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="nombre@correo.com" name="email" required onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900" }`}>Repetir Correo Electrónico</label>
                        <input type="email" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="nombre@correo.com" required name="confirmarEmail" onChange={e => setConfirmarEmail(e.target.value)}
                        />

                    </div>
                    <div className="mb-6">
                        <label  className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900" }`}>Numéro Telefónico</label>
                        <input type="tel" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="012345678" required name="telefono"/>
                    </div>
                    <div className="mb-6">
                        <label  className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900" }`}>Dirección</label>
                        <input type="text" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="Escribe tu Dirección" required name="direccion"/>
                    </div>
                    <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Finalizar Compra</button>
                </form>
            </>
        }
    </>
    
  )
}

export default Checkout