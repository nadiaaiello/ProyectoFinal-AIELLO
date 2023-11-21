import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ongame-dc4f1.firebaseapp.com",
  projectId: "ongame-dc4f1",
  storageBucket: "ongame-dc4f1.appspot.com",
  messagingSenderId: "976380653581",
  appId: "1:976380653581:web:b69b8af5ee01485c19a544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(); //consultar la DB

//CRUD de productos
export const cargarBDD = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(db,"productos"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export const getProducts = async ()=>{
    const productos = await getDocs(collection(db, "productos"));
    const items = productos.docs.map(prod => {
        return{...prod.data(), id: prod.id}

    })
    return items

}

export const getProducto = async (id)=>{
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id:producto.id};
    return item
}

export const updateProducto = async (id, info)=>{
    await updateDoc(doc(db, "productos", id,), info)
}

export const deleteProducto = async (id)=>{
    await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha)=>{
    const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
        datosCliente: cliente, 
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id)=>{
    const ordenCompra = await getDoc(collection(db, "ordenCompra", id))
    const oCompra = {...ordenCompra.data, id: ordenCompra.id}
    return oCompra
}