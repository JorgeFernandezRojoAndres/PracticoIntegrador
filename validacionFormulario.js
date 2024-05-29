document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reserva-form");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const fecha = document.getElementById("fecha");
    const hora = document.getElementById("hora");
    const personas = document.getElementById("personas");
    const errorDiv = document.getElementById("mensaje-error");

    function crearMensajeExito() {
        const successDiv = document.createElement("div");
        successDiv.id = "mensaje-exito";
        successDiv.style.color = "green";
        successDiv.style.display = "none";
        errorDiv.insertAdjacentElement("afterend", successDiv);
        return successDiv;
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        errorDiv.innerHTML = "";
        let successDiv = document.getElementById("mensaje-exito");
        if (!successDiv) {
            successDiv = crearMensajeExito();
        }
        successDiv.innerHTML = "";
        let isValid = true;

        // Validamos que todos los campos estén llenos
        if (nombre.value.trim() === "" || email.value.trim() === "" || telefono.value.trim() === "" || fecha.value.trim() === "" || hora.value.trim() === "" || personas.value.trim() === "") {
            isValid = false;
            errorDiv.innerHTML += "<p>Por favor, completa todos los campos.</p>";
        }

        // Validación del nombre para que no contenga números
        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (!nombreRegex.test(nombre.value)) {
            isValid = false;
            errorDiv.innerHTML += "<p>El nombre no debe contener números ni caracteres especiales.</p>";
        }

        // Validación del email sin usar HTML5
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email.value)) {
            isValid = false;
            errorDiv.innerHTML += "<p>Por favor, introduce un correo electrónico válido.</p>";
        }

        // Validación del número de personas
        if (personas.value.trim() === "" || personas.value < 1) {
            isValid = false;
            errorDiv.innerHTML += "<p>El número de personas es obligatorio y debe ser al menos 1.</p>";
        }

        // Validación de la fecha para que no sea una fecha anterior a la fecha actual
        const today = new Date().toISOString().split('T')[0];
        if (fecha.value < today) {
            isValid = false;
            errorDiv.innerHTML += "<p>La fecha de la reserva no puede ser anterior a hoy.</p>";
        }

        // Si todo está en orden, mostramos un mensaje de éxito
        if (isValid) {
            errorDiv.style.display = "none";
            successDiv.innerHTML = `
                <p>La reserva se gestionó con éxito.</p>
                <p><strong>Nombre:</strong> ${nombre.value}</p>
                <p><strong>Email:</strong> ${email.value}</p>
                <p><strong>Teléfono:</strong> ${telefono.value}</p>
                <p><strong>Fecha:</strong> ${fecha.value}</p>
                <p><strong>Hora:</strong> ${hora.value}</p>
                <p><strong>Personas:</strong> ${personas.value}</p>
            `;
            successDiv.style.display = "block";
            form.reset();
        } else {
            errorDiv.style.display = "block";
            successDiv.style.display = "none";
        }
    });
});
