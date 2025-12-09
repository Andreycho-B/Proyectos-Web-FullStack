// Seleccionamos los elementos
const cookiePopup = document.getElementById('cookiePopup');
const acceptBtn = document.getElementById('acceptBtn');
const closeBtn = document.getElementById('closeBtn');

// Función para mostrar el popup
function showPopup() {
    // Agregamos la clase 'show' que cambia el 'bottom' en CSS
    cookiePopup.classList.add('show');
}

// Función para guardar el consentimiento
function saveConsent() {
    // Guardamos en el navegador que el usuario ya aceptó
    // "cookieAccepted" es la clave, "true" es el valor
    localStorage.setItem('cookieAccepted', 'true');
    
    // Ocultamos el popup
    cookiePopup.classList.remove('show');
}

// LÓGICA PRINCIPAL AL CARGAR LA PÁGINA
window.addEventListener('load', () => {
    
    // 1. Verificamos si YA existe el consentimiento en localStorage
    const consent = localStorage.getItem('cookieAccepted');

    // 2. Si NO existe (es null), mostramos el popup después de un segundo
    if (!consent) {
        setTimeout(showPopup, 1000); // Espera 1 segundo para ser elegante
    }
});

// Evento al hacer clic en "I like Cookies"
acceptBtn.addEventListener('click', saveConsent);

// Evento al hacer clic en la "X" (Cierra pero no guarda consentimiento permanente)
closeBtn.addEventListener('click', () => {
    cookiePopup.classList.remove('show');
});