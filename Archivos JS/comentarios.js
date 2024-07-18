// Función para enviar comentarios por correo electrónico
document.getElementById('comentariosForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const comentario = document.getElementById('comentario').value.trim();

    if (nombre === '' || comentario === '') {
        alert('Por favor, complete todos los campos antes de enviar el comentario.');
        return;
    }

    const email = 'delicius_cake06@hotmail.com'; // Reemplaza con el correo electrónico al que quieres enviar el comentario
    const subject = 'Nuevo Comentario de ' + nombre;
    const body = `Nombre: ${nombre}\nComentario: ${comentario}`;

    // Crear un enlace mailto para abrir el cliente de correo
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir el enlace mailto
    window.location.href = mailtoLink;

    document.getElementById('comentariosForm').reset();
});
