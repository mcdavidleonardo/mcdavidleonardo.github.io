// Validación del formulario y notificación de envío
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.formulario-contacto form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const notification = document.createElement('div');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (nombre.value === '' || email.value === '' || mensaje.value === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        notification.className = 'notification';
        notification.innerText = '¡Mensaje enviado con éxito!';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);

        form.reset();
    });
});

// Efecto de desplazamiento suave para el botón de inicio
document.querySelector('.home-button').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animación para iconos de redes sociales
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});
