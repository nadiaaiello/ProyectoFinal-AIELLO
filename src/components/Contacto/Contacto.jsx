import React from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDarkModeContext } from "../../context/DarkModeContext";
const Contacto = () => {
    const datosFormulario = React.useRef();
    let navigate = useNavigate();
    const {darkMode} = useDarkModeContext();

    const consultarFormulario = (e)=>{
        e.preventDefault();
        const datForm = new FormData(datosFormulario.current);
        const contacto = Object.fromEntries(datForm);
        e.target.reset()
        toast.success("Tu consulta fue enviada");
        navigate("/")

    }

  return (
    <form onSubmit={consultarFormulario} ref={datosFormulario} className={`p-3 m-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
    <div className="mb-6">
    <label htmlFor="nombre" className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900"}`}>Nombre y Apellido</label>
    <input type="text" name="nombre" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="Escribe tu Nombre y Apellido" required />
  </div>
  <div className="mb-6">
    <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900"}`}>Correo electrónico</label>
    <input type="email" name="email" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="nombre@correo.com" required />
  </div>
  <div className="mb-6">
    <label  className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-900"}`}>Tu consulta</label>
    <textarea name="textarea" className={`text-sm rounded-lg block w-full p-2.5 text-gray-900 border ${darkMode ? "bg-gray-500 border-black placeholder:text-gray-800" : "bg-gray-200  border-gray-300"}`} placeholder="Escribe tu consulta" required />
  </div>
  <button type="submit" className="text-white bg-violet-700 hover:bg-violet-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
</form>

  )
}

export default Contacto