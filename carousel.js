document.addEventListener('DOMContentLoaded', function() {
    const grande = document.querySelector('.grande');
    const puntos = document.querySelectorAll('.punto');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    let index = 0;

    function updateCarousel() {
        grande.style.transform = `translateX(${-index * 100}%)`;
        updateActivePoint();
    }

    function updateActivePoint() {
        puntos.forEach(punto => punto.classList.remove('activo'));
        puntos[index].classList.add('activo');
    }

    // Navegar por los puntos
    puntos.forEach((punto, i) => {
        punto.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
    });

    // Funcionalidad de los botones
    btnLeft.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = puntos.length - 1;
        }
        updateCarousel();
    });

    btnRight.addEventListener('click', () => {
        index++;
        if (index >= puntos.length) {
            index = 0;
        }
        updateCarousel();
    });
});
