document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones de "Comprar Ahora"
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Agregar un evento de clic a cada botón
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Para adquirir este producto podrás ir al apartado de contacto y especificar la referencia del equipo que quieres comprar. Uno de nuestros asesores se contactará contigo.");
        });
    });
});
