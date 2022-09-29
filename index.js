class Producto{
    constructor(id, marca, precio, cantidad){
       this.id = id;
       this.marca = marca;
       this.precio = precio;
       this.cantidad = cantidad;
    }
   }
   
   const inventario = [
       new Producto(1, "Pokemon TCG", 8, 0),
       new Producto(2, "Yugioh TCG", 6, 0),
       new Producto(3, "Digimon TCG", 5, 0),
       new Producto(4, "Final Fantasy TCG", 10, 0),
       new Producto(5, "Weiss TCG", 9, 0),
       new Producto(6, "One Piece TCG", 15, 0),
   ];
localStorage.setItem("disponibilidad", JSON.stringify(inventario));

   const inventarioStorage = (identificador, nombre, valor, cantidad) => {localStorage.setItem(identificador,nombre, valor, cantidad)};

   for (const producto of inventario)
   { let listado = document.createElement("div");
    listado.innerHTML = `<h5> ID: ${producto.id}</h5>
                               <p> Producto: ${producto.marca}</p>
                               <b> $ ${producto.precio}</b>
                               <p> Cantidad =  ${producto.cantidad}</p>
                               <button id="boton${producto.marca}">Agregar</button>`;
                               document.body.appendChild(listado);
                            };

let agregar = document.getElementById(`boton${producto.cantidad}`);
agregar.addEventListener("click", () => agregarProducto(producto.cantidad));

let boton = document.getElementById("boton").onclick;
boton.addEventListener("click", () => {
    listado.innerHTML.cantidad =  "1";
});