document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-contacto');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Formulario enviado correctamente.');
            // Aqu� puedes agregar el c�digo para enviar el formulario
        }
    });

    function validateForm() {
        let isValid = true;

        // Validaci�n de nombre
        const nombre = document.getElementById('nombre').value.trim();
        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert('El nombre solo debe contener letras.');
            isValid = false;
        }

        // Validaci�n de apellido
        const apellido = document.getElementById('apellido').value.trim();
        if (!/^[a-zA-Z\s]+$/.test(apellido)) {
            alert('El apellido solo debe contener letras.');
            isValid = false;
        }

        // Validaci�n de correo electr�nico
        const email = document.getElementById('email').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, introduce un correo electr�nico v�lido.');
            isValid = false;
        }

        // Validaci�n de fecha de nacimiento
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        if (!isValidDate(fechaNacimiento)) {
            alert('Por favor, introduce una fecha de nacimiento v�lida.');
            isValid = false;
        }

        // Validaci�n de tel�fono
        const telefono = document.getElementById('telefono').value.trim();
        if (!/^\d{7,}$/.test(telefono)) {
            alert('El tel�fono debe contener solo n�meros y tener al menos 7 d�gitos.');
            isValid = false;
        }

        // Validaci�n de ubicaci�n
        const ubicacion = document.getElementById('ubicacion').value;
        if (ubicacion === '') {
            alert('Por favor, selecciona tu ubicaci�n.');
            isValid = false;
        }

        return isValid;
    }

    function isValidDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        return date instanceof Date && !isNaN(date) && date < now;
    }
});
