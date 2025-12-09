// 1. Seleccionamos todos los botones y todos los contenidos
const tabButtons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

// 2. Agregamos un "escuchador de eventos" (EventListener) a cada botón
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        // PASO A: Quitar la clase 'active' de TODOS los botones y contenidos
        // (Esto "resetea" el estado)
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // PASO B: Agregar la clase 'active' al botón que se clickeó
        button.classList.add('active');

        // PASO C: Mostrar el contenido correspondiente
        // Obtenemos el ID del contenido desde el atributo "data-tab" del botón
        const contentId = button.getAttribute('data-tab');
        const contentToShow = document.getElementById(contentId);
        
        contentToShow.classList.add('active');
    });
});