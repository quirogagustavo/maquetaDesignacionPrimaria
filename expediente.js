document.addEventListener('DOMContentLoaded', function() {
    const fojas = document.querySelectorAll('.document-wrapper');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const pageCounter = document.getElementById('page-counter');

    let currentPage = 0;
    const totalPages = fojas.length;

    function updatePage() {
        // Ocultar todas las fojas
        fojas.forEach(foja => {
            foja.classList.remove('active');
        });

        // Mostrar la foja actual
        if (fojas[currentPage]) {
            fojas[currentPage].classList.add('active');
        }

        // Actualizar el contador
        if (currentPage === 0) {
            pageCounter.textContent = 'Caratula';
        } else {
            pageCounter.textContent = `Foja ${currentPage} de ${totalPages - 1}`;
        }

        // Habilitar/deshabilitar botones
        prevButton.disabled = (currentPage === 0);
        nextButton.disabled = (currentPage === totalPages - 1);
    }

    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updatePage();
        }
    });

    // Inicializar la vista
    updatePage();
});