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

   for (const producto of inventario) {
    let listado = document.createElement("div");
    listado.innerHTML = `<h5> ID: ${producto.id}</h5>
                               <p> Producto: ${producto.marca}</p>
                               <b> $ ${producto.precio}</b>`;
    document.body.appendChild(listado);
   }

   function orden(){
    let p1 = parseInt(prompt("Cuantos sobres de Pokemon TCG quieres"));
    while (isNaN(p1)) {
        p1 = prompt(
        "Favor de ingresar solamente dígitos. Cuántos sobres de Pokemon TCG quieres");
    }
    
    let p2 = parseInt(prompt("Cuantos sobres de Yugioh TCG quieres"));
    while (isNaN(p2)) {
        p2 = prompt(
        "Favor de ingresar solamente dígitos. Cuántos sobres de Yugioh TCG quieres");
    }

    let p3 = parseInt(prompt("Cuantos sobres de Digimon TCG quieres"));
    while (isNaN(p3)) {
        p3 = prompt(
        "Favor de ingresar solamente dígitos. Cuántos sobres de Digimon TCG quieres");
    }

    let p4 = parseInt(prompt("Cuantos sobres de Final Fantasy TCG quieres"));
    while (isNaN(p4)) {
        p4 = prompt(
        "Favor de ingresar solamente dígitos. Cuántos sobres de Final Fantasy TCG quieres");
    }

    let p5 = parseInt(prompt("Cuantos sobres de Weiss TCG quieres"));
    while (isNaN(p5)) {
        p5 = prompt(
        "Favor de ingresar solamente dígitos. Cuántos sobres de Weiss TCG quieres");
    }

    let p6 = parseInt(prompt("Cuantos sobres de One Piece TCG quieres"));
    while (isNaN(p6)) {
        p6 = prompt(
        "Favor de ingresar solamente dígitos. Cuántos sobres de One Piece TCG quieres");
    }
    
    

    const t1 = 8 * p1;
    const t2 = 6 * p2;
    const t3 = 5 * p3;
    const t4 = 10 * p4;
    const t5 = 9 * p5;
    const t6 = 15 * p6;
    
    const total = t1 + t2 + t3 +t4 + t5 + t6; 
    
    alert("Tu total sería de $" + total);
    } 
