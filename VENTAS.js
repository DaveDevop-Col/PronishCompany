document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los botones de "Comprar Ahora"
    const buyButtons = document.querySelectorAll(".buy-btn");

    // Agregar un evento de clic a cada botón
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Gracias por tu interés en comprar este producto. ¡Pronto te contactaremos para finalizar la compra!");
        });
    });

    // Añadir efectos de hover a las cajas de servicios
    const serviceBoxes = document.querySelectorAll(".box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseover", function () {
            box.style.backgroundColor = "#33cc66"; // Cambiar a verde claro
        });

        box.addEventListener("mouseout", function () {
            box.style.backgroundColor = ""; // Volver al color original
        });
    });
});
