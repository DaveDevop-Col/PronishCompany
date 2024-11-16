document.addEventListener('DOMContentLoaded', function() {
    // Función para validar el formulario
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        // Obtener los valores de los campos
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        // Validación de los campos
        if (name === '' || email === '' || message === '') {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (!email.match(emailPattern)) {
            alert('Por favor, introduce una dirección de correo electrónico válida.');
            return;
        }

        // Si la validación es exitosa, mostrar mensaje y limpiar formulario
        document.getElementById('success-message').style.display = 'block';
        setTimeout(function() {
            document.getElementById('success-message').style.display = 'none';
        }, 3000); // Mensaje desaparece después de 3 segundos

        // Limpiar formulario después de enviar
        document.getElementById('contact-form').reset();
    });
});
