document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos del modal
    var modal = document.getElementById("diagram-modal");
    var link = document.getElementById("diagram-link");
    var modalImg = document.getElementById("modal-image");
    var span = document.getElementsByClassName("close-button")[0];

    // Cuando el usuario hace clic en el enlace, abre el modal 
    if (link) {
        link.onclick = function(event) {
            event.preventDefault(); // Evita que el enlace navegue
            modal.style.display = "block";
            modalImg.src = "img/designacionPrimaria.png";
        }
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    if (span) {
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }

    // Cuando el usuario hace clic fuera de la imagen, cierra el modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

        // Lógica de login simple
        var loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                    console.log('Evento submit ejecutado');
                var usuario = document.getElementById('usuario').value;
                    if (usuario === 'interinatos') {
                        window.location.href = 'actosOfrecimiento.html';
                    } else if (usuario === 'personaldocente') {
                        window.location.href = 'bandejaExpedientes.html';
                    }
            });
        }
});
