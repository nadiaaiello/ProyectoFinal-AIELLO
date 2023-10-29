const Item=({id, nombre, descripcion, precio, img, stock}) => {
    return(
        <article>
            <header><h2>{nombre}</h2></header>
            <section>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                <p>Stock: {stock}</p>
            </section>
        </article>
    )
}

export default Item