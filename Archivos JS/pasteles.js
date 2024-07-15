// ArchivosJS/pasteles.js

// Mostrar un mensaje de bienvenida al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    alert('¡Bienvenidos a Pastelería Delicius Cake! La base del sabor');

    // Activar la modal de mantenimiento si está habilitado
    if (MANTENIMIENTO_CONFIG.pasteles) {
        $("#mantenimientoModal").modal('show');
    }
});

// Validar el formulario antes de enviarlo
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const flavor = document.getElementById('flavor').value.trim();
    const size = document.getElementById('size').value.trim();
    const message = document.getElementById('message').value.trim();

    if (flavor === '' || size === '' || message === '') {
        alert('Por favor, complete todos los campos antes de realizar el pedido.');
        return;
    }

    alert(`Pedido realizado:\nSabor: ${flavor}\nTamaño: ${size}\nMensaje: ${message}`);
    document.getElementById('orderForm').reset();
});
