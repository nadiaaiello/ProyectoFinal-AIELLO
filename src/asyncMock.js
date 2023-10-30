//class constructora
class producto{
    constructor(id, nombre, descripcion, precio, img, stock){
       this.id = id,
       this.nombre = nombre,
       this.descripcion = descripcion,
       this.precio = precio,
       this.img = img,
       this.stock= stock
    }
 }
 
 

 //Instanciación de objetos: 
 const producto1=new producto(1, "Bon o Bon", "Bombón de chocolate con leche y oblea rellenos con crema de maní.", 100, "bonObon.jpg",16)

 const producto2= new producto(2, "Chicle Bubbaloo","Chicle de fresa relleno de jugoso caramelo líquido de tuttifruti.",20,"chicleBubbaloo.webp", 30)

 const producto3= new producto(3, "Chocolate Aguila", "Barrita de chocolate amargo", 240, "chocolateAguila.png", 5 )
 
 const producto4= new producto(4, "Chupetin POP", "Chupetin Arcor Mr POPs. Sabor blueberry con chicle tutti frutti", 50, "chupetinPop.jpg", 42)

 const producto5= new producto(5, "Gaseosa Coca Cola", "Bebida azucarada gaseosa. 500ml", 300, "gaseosaCocaCola.png" , 10)


 //CREAR UN ARRAY DE OBJETOS
let products = []
products.push(producto1,producto2,producto3,producto4,producto5)

export const getProducts=()=>{
   return new Promise((resolve)=>{
      setTimeout(()=>{resolve(products)}, 5000
      )
   })
}



