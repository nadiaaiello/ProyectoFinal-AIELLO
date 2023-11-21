import "react-toastify/dist/ReactToastify.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import { cargarBDD, getProducts, getProducto, updateProducto, deleteProducto } from "./utils/firebase";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Contacto from "./components/Contacto/Contacto";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
//import Context
import { DarkModeProvider } from "./context/DarkModeContext";
import { CarritoProvider } from "./context/CarritoContext";
import Footer from "./components/Footer/Footer";



function App() {
  // cargarBDD()
  // getProducts();
  // getProducto("0IDZ8U7zAYUsVrVlAfwm")
//   updateProducto("38FeOXIj8HY6hR3ngylg", {
//     "idCategoria": "dispositivos",
//     "nombre": "Notebook Lenovo Ideapad Gaming",
//     "marca": "Lenovo",
//     "modelo": "Ideapad Gaming",
//     "precio": 390000,
//     "stock": 16,
//     "img": "https://firebasestorage.googleapis.com/v0/b/ongame-dc4f1.appspot.com/o/notebook_lenovo.jpg?alt=media&token=3b958fa2-c75b-46c1-92c9-9e81687338ad"
// },)

  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
    <DarkModeProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/category/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
        <ToastContainer/>
      </DarkModeProvider>
      </CarritoProvider>
    </BrowserRouter>
    </>
  );
}
export default App;
