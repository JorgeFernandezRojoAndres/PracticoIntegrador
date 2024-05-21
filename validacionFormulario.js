// Función para validar el formulario de contacto
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validación 
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }
    //no usar alertas nativas !jamas

    // Validación de formato de correo electrónico
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduce un correo electrónico válido.');
        return false;
    }

    return true; 
}
//agregar calificacion de estrellas 
//mostrar datos enviados creando nuevos elementos 
//mostrar errores creando o mostrando elementos que ya tengamos previamente 
