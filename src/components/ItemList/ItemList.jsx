import Item from "../Item/Item"
import ItemCart from "../ItemCart/ItemCart"
const ItemList = ({products, plantilla}) => {
  return (
    <>
    {plantilla === "item" 
        ? 
        products.map(product => <Item item={product} key={product.id}/>)
        :
        products.map(product => <ItemCart item={product} key={product.id}/>)
      }
    </>
  )
}

export default ItemList