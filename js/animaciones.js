/*Ejecucion cuando el documento html se haya cargado*/
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 200); // Espaciado de tiempo entre animaciones de cada item
    });
  });
