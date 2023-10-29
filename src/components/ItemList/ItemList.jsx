import Item from '../Item/Item'
import React from 'react'

function ItemList() {
  return (
    <div>
        {products.map(prod=> <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList