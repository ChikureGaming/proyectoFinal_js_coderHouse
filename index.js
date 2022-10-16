

class Producto{
    constructor(id, marca, precio){
       this.id = id;
       this.marca = marca;
       this.precio = precio;
    }
   }
   
   const inventario = [
       new Producto(1, "Pokemon TCG", 8),
       new Producto(2, "Yugioh TCG", 6),
       new Producto(3, "Digimon TCG", 5),
       new Producto(4, "Final Fantasy TCG", 10),
       new Producto(5, "Weiss TCG", 9),
       new Producto(6, "One Piece TCG", 15),
   ];
localStorage.setItem("disponibilidad", JSON.stringify(inventario));

   const inventarioStorage = (identificador, nombre, valor) => {localStorage.setItem(identificador,nombre, valor)};

let productos = document.getElementById("productos");

fetch("./producto.json")
.then((response) => response.json())
.then((producto) => {
    console.log(producto);
    producto.forEach((producto) => {

        productos.innerHTML += `<h5> ID: ${producto.id}</h5>
                                   <p> Producto: ${producto.nombre}</p>
                                   <b> $ ${producto.precio}</b>
                                   <button id="boton${producto.marca}">Agregar</button>`;
});

let boton1 = document.getElementById("botonPokemon TCG");

boton1.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Agregar',
        text: 'Paquete de Pokemon agregado',
      });
});

let boton2 = document.getElementById("botonYugioh TCG");

boton2.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Agregar',
        text: 'Paquete de Yugioh agregado',
      });
});

let boton3 = document.getElementById("botonDigimon TCG");

boton3.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Agregar',
        text: 'Paquete de Digimon agregado',
      });
});

let boton4 = document.getElementById("botonFinal Fantasy TCG");

boton4.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Agregar',
        text: 'Paquete de Final Fantasy agregado',
      });
});

let boton5 = document.getElementById("botonWeiss TCG");

boton5.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Agregar',
        text: 'Paquete de Weiss agregado',
      });
});

let boton6 = document.getElementById("botonOne Piece TCG");

boton6.addEventListener("click", () => {
    Swal.fire({
        icon: 'success',
        title: 'Agregar',
        text: 'Paquete de One Piece agregado',
      });
    });
});