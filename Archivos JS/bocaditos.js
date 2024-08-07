// Carrito de compras
let carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    alert(nombre + " ha sido agregado al carrito.");
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    let carritoHtml = '';
    let total = 0;
    carrito.forEach(producto => {
        carritoHtml += `
            <div class="producto-carrito">
                <h4>${producto.nombre}</h4>
                <p>Precio: $${producto.precio.toFixed(2)}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Subtotal: $${(producto.precio * producto.cantidad).toFixed(2)}</p>
            </div>
        `;
        total += producto.precio * producto.cantidad;
    });
    document.getElementById('carrito-lista').innerHTML = carritoHtml;
    document.getElementById('total-carrito').innerText = total.toFixed(2);
}

// Función para finalizar la compra
function finalizarCompra() {
    let total = document.getElementById('total-carrito').innerText;
    let carritoHtml = 'Resumen de la compra:\n\n';
    carrito.forEach(producto => {
        carritoHtml += `
            Producto: ${producto.nombre}
            Precio: $${producto.precio.toFixed(2)}
            Cantidad: ${producto.cantidad}
            Subtotal: $${(producto.precio * producto.cantidad).toFixed(2)}\n\n
        `;
    });
    carritoHtml += `Total: $${total}\n\n`;

    // Encode the message to be URL safe
    let whatsappMessage = encodeURIComponent(carritoHtml);

    // WhatsApp link with the message
    let whatsappUrl = `https://wa.me/593995732785?text=${whatsappMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');

    carrito = []; // Resetear el carrito
    actualizarCarrito(); // Actualizar la visualización del carrito
}

// Inicializar carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarCarrito();
});
