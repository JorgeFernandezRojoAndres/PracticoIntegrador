// carousel.js

// Array de URLs de las imágenes
const images = [
    "img/imagen1.jpg",
    "img/imagen2.jpg",
    "img/imagen3.jpg",
    "img/imagen4.jpg",
    "img/imagen5.jpg",
    "img/imagen6.jpg",
    // Añade más URLs de imágenes según sea necesario
];

let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("carousel-img");
    imgElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Mostrar la primera imagen al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    showImage(currentIndex);
});

// Agregar event listeners para los botones de avance y retroceso
document.getElementById("btn-next").addEventListener("click", nextImage);
document.getElementById("btn-prev").addEventListener("click", prevImage);
