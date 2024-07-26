document.addEventListener("DOMContentLoaded", function () {
  fetch("js/perfumes.json")
    .then((response) => response.json())
    .then((data) => {
      const perfumes = data.perfumes;
      const container = document.getElementById("perfumeContainer");

      perfumes.forEach((perfume) => {
        const card = `
            <div class="col-md-4 mb-4 d-flex">
              <div class="card">
                <img src="${perfume.imagen}" class="card-img-top" alt="${
          perfume.nombre
        }">
                <div class="card-body d-flex flex-column justify-content-between">
                  <h5 class="card-title">${perfume.nombre}</h5>
                  <p class="card-text">Marca: ${perfume.marca}</p>
                  <p class="card-text">Precio: $${perfume.precio.toFixed(2)}</p>
                </div>
              </div>
            </div>
          `;
        container.innerHTML += card;
      });
    })
    .catch((error) => console.error("Error cargando el archivo JSON:", error));
});
