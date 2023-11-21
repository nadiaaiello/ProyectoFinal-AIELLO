import { useDarkModeContext } from "../../context/DarkModeContext"
const TotalValue = ({valorTotal}) => {
  const {darkMode} = useDarkModeContext()
  return (
    <div className="my-6">
        <p className={`text-xl ${darkMode && "text-gray-300"}`}><span className="font-bold">Valor total: </span>${new Intl.NumberFormat("de-DE").format(valorTotal)}</p>
    </div>
  )
}

export default TotalValue