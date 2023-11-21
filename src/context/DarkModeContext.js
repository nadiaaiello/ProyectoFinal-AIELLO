import { useContext, createContext, useState } from "react";
import "../App.css"

const DarkModeContext = createContext();
export const useDarkModeContext = ()=> useContext(DarkModeContext) //me permite usar el contexto sin tener q import useContext en todos los componentes en el que use el darkMOdecontext
export const DarkModeProvider = (props)=>{ 
    const [darkMode, setDarkMode] = useState(false); //valor inicial del darkmode: falso

    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode)
        if(!darkMode){
            document.body.firstElementChild.classList.add("bg-black")
        }else{
            document.body.firstElementChild.classList.remove("bg-black")
        }
    }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}