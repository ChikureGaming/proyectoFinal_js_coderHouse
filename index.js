let carrito = [];
const divisa = "$";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

fetch("./producto.json")
  .then((response) => response.json())
  .then((producto) => {
    console.log(producto);
    const inventario = producto; 
    producto.forEach((producto) => {
      const miNodo = document.createElement("div");
      miNodo.classList.add("card", "col-sm-4");

      const miNodoCardBody = document.createElement("div");
      miNodoCardBody.classList.add("card-body");

      const miNodoTitle = document.createElement("h5");
      miNodoTitle.classList.add("card-title");
      miNodoTitle.textContent = producto.nombre;

      const miNodoPrecio = document.createElement("p");
      miNodoPrecio.classList.add("card-text");
      miNodoPrecio.textContent = `${producto.precio}${divisa}`;

      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', producto.imagen);

      const miNodoBoton = document.createElement("button");
      miNodoBoton.classList.add("btn", "btn-primary");
      miNodoBoton.textContent = "+";
      miNodoBoton.setAttribute("marcador", producto.id);
      miNodoBoton.addEventListener("click", anyadirProductoAlCarrito);

      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodoCardBody.appendChild(miNodoImagen);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });

    function anyadirProductoAlCarrito(evento) {
      carrito.push(evento.target.getAttribute("marcador"));
      renderizarCarrito();
    }

    function renderizarCarrito() {
      DOMcarrito.textContent = "";
      console.log(carrito);
      const carritoSinDuplicados = [...new Set(carrito)];
      console.log(carritoSinDuplicados);
      carritoSinDuplicados.forEach(function (item, indice) {
        let miItem = inventario.filter(function (
          itemListaDeProductos
        ) {
          return itemListaDeProductos["id"] == item;
        });
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
          return itemId === item ? (total += 1) : total;
        }, 0);
        const miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "text-left", "mx-2");
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

        const miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-danger", "mx-5");
        miBoton.textContent = "X";
        miBoton.style.marginLeft = "1rem";
        miBoton.dataset.item = item;
        miBoton.addEventListener("click", borrarItemCarrito);

        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
      });
      DOMtotal.textContent = calcularTotal();
    }

    function borrarItemCarrito(evento) {
      const id = evento.target.dataset.item;
      carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
      });
      renderizarCarrito();
    }

    function calcularTotal() {
      return carrito
        .reduce((total, item) => {
          const miItem = producto.filter((producto) => {
            return producto.id === parseInt(item);
          });
          return total + miItem[0].precio;
        }, 0)
        .toFixed(2);
    }

    function vaciarCarrito() {
      carrito = [];
      renderizarCarrito();
    }

    DOMbotonVaciar.addEventListener("click", vaciarCarrito);

    renderizarCarrito();

    let botonEfecto = document.getElementById("boton-vaciar");

    botonEfecto.addEventListener("click", () => {
      Swal.fire({
        icon: "warning",
        title: "Carrito Vacio",
        text: "Carrito Vaciado Exitosamente",
      });
    });
  });
