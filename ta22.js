const tamañoVentana = document.getElementById('tamaño-ventana');

function actualizarTamañoVentana() {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    tamañoVentana.textContent = `Tamaño actual de la ventana: ${ancho} x ${alto}`;
}

actualizarTamañoVentana();

window.addEventListener('resize', actualizarTamañoVentana);
