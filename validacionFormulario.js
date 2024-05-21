document.addEventListener("DOMContentLoaded", function() {
    // Agarramos el formulario y todos los campos que vamos a validar
    const form = document.getElementById("reserva-form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const fecha = document.getElementById("fecha");
    const hora = document.getElementById("hora");
    const personas = document.getElementById("personas");
    const errorDiv = document.getElementById("mensaje-error");

    // Función para crear el mensaje de éxito
    function crearMensajeExito() {
        const successDiv = document.createElement("div");
        successDiv.id = "mensaje-exito";
        successDiv.style.color = "green";
        successDiv.style.display = "none";
        // La función crearMensajeExito utiliza insertAdjacentElement para insertar dinámicamente el div de éxito justo después del div de error.
        errorDiv.insertAdjacentElement("afterend", successDiv);
        return successDiv;
    }

    // Escuchamos el evento de enviar el formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Evitamos que el formulario se envíe de manera tradicional
        errorDiv.innerHTML = "";  // Limpiamos cualquier mensaje de error previo
        let successDiv = document.getElementById("mensaje-exito");
        if (!successDiv) {
            successDiv = crearMensajeExito();
        }
        successDiv.innerHTML = "";  // Limpiamos cualquier mensaje de éxito previo
        let isValid = true;  // Asumimos que todo está bien al principio

        // Validamos que todos los campos estén llenos
        if (nombre.value.trim() === "" || email.value.trim() === "" || telefono.value.trim() === "" || fecha.value.trim() === "" || hora.value.trim() === "" || personas.value.trim() === "") {
            isValid = false;
            errorDiv.innerHTML = "<p>Por favor, completa todos los campos.</p>";
        }

        // Validamos que el email tenga el formato correcto
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email.value)) {
            isValid = false;
            errorDiv.innerHTML += "<p>Por favor, introduce un correo electrónico válido.</p>";
        }

        // Validamos que el número de personas sea al menos 1
        if (personas.value.trim() === "" || personas.value < 1) {
            isValid = false;
            errorDiv.innerHTML += "<p>El número de personas es obligatorio y debe ser al menos 1.</p>";
        }

        // Si todo está en orden, mostramos un mensaje de éxito
        if (isValid) {
            errorDiv.style.display = "none";  // Ocultamos el mensaje de error si lo hubiera
            successDiv.innerHTML = `
                <p>La reserva se gestionó con éxito.</p>
                <p><strong>Nombre:</strong> ${nombre.value}</p>
                <p><strong>Email:</strong> ${email.value}</p>
                <p><strong>Teléfono:</strong> ${telefono.value}</p>
                <p><strong>Fecha:</strong> ${fecha.value}</p>
                <p><strong>Hora:</strong> ${hora.value}</p>
                <p><strong>Personas:</strong> ${personas.value}</p>
            `;
            successDiv.style.display = "block";  // Mostramos el mensaje de éxito
            form.reset();  // Reiniciamos el formulario   
        } else {
            errorDiv.style.display = "block";  // Mostramos los mensajes de error
            successDiv.style.display = "none";  // Ocultamos cualquier mensaje de éxito previo
        }
    });
});