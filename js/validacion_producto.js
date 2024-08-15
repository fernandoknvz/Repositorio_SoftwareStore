function validacionCantidad(){
    /* Ajerta preventiva evita el envio del formulario*/
    event.preventDefault();

    let cantidad = document.getElementById('cantidad').value;
    let precio = 25000; //precio fijo de cada producto
    let nombreProducto = "React JS"; //nombre del producto
    cantidad = parseInt(cantidad);

    if (isNaN(cantidad) || cantidad <= 0){
        alert("La cantidad debe ser mayor que cero.");
        return false; // Indica que la validación ha fallado
    }

    agregarAlCarrito(nombreProducto, cantidad, precio);
    alert("Agregado Exitosamente!");

    return true;
}

function agregarAlCarrito(nombreProducto, cantidad, precio) {
    const carrito = document.getElementById('lista-carrito');
    const li = document.createElement('li');
    li.textContent = `Producto: ${nombreProducto}, Cantidad: ${cantidad}, Valor: ${precio}, Precio total: $${precio * cantidad}`;
    carrito.appendChild(li);
}