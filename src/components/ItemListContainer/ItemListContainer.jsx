import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
//context
import { getProducts } from "../../utils/firebase";
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();
  useEffect(()=>{
    if(idCategoria){
      getProducts()
    .then(items =>{
      const products = items.filter(prod => prod.stock > 0).filter(item => item.idCategoria === idCategoria)
      const productsList = <ItemList products={products} plantilla="item"/>;
      setProductos(productsList)
    })
    .catch(error => console.log(error))
    }else{
      getProducts()
      .then(items =>{
        const products = items.filter(prod => prod.stock > 0)
        const productsList = <ItemList products={products} plantilla="item"/>;
        setProductos(productsList)
      })
      .catch(error => console.log(error))
    }
  }, [idCategoria])


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-3 items-center">
      {productos}
    </div>
    )
}

export default ItemListContainer