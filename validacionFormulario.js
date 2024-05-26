// Agarramos el formulario y todos los campos que vamos a validar
const form = document.getElementById("reserva-form");
const fields = [
    { element: document.getElementById("nombre"), name: "Nombre" },
    { element: document.getElementById("email"), name: "Email" },
    { element: document.getElementById("telefono"), name: "Teléfono" },
    { element: document.getElementById("fecha"), name: "Fecha" },
    { element: document.getElementById("hora"), name: "Hora" },
    { element: document.getElementById("personas"), name: "Personas" }
];
const errorDiv = document.getElementById("mensaje-error");

// Función para crear el mensaje de éxito
function crearMensajeExito() {
    const successDiv = document.createElement("div");
    successDiv.id = "mensaje-exito";
    successDiv.style.color = "green";
    successDiv.style.display = "none";
    // Utiliza insertAdjacentElement para insertar dinámicamente el div de éxito justo después del div de error.
    errorDiv.insertAdjacentElement("afterend", successDiv);
    return successDiv;
}

// Creamos el div para el mensaje de éxito
const successDiv = crearMensajeExito();

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    errorDiv.innerHTML = ""; // Limpiar mensajes de error previos
    let isValid = true;

    // Validamos que todos los campos estén llenos
    fields.forEach(field => {
        if (field.element.value.trim() === "") {
            isValid = false;
            errorDiv.innerHTML += `<p>Por favor, completa el campo ${field.name}.</p>`;
        }
    });

    // Validamos que el email tenga el formato correcto
    const emailField = fields.find(field => field.name === "Email");
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailField && !emailRegex.test(emailField.element.value)) {
        isValid = false;
        errorDiv.innerHTML += "<p>Por favor, introduce un correo electrónico válido.</p>";
    }

    // Validamos que el número de personas sea al menos 1
    const personasField = fields.find(field => field.name === "Personas");
    if (personasField && (personasField.element.value.trim() === "" || personasField.element.value < 1)) {
        isValid = false;
        errorDiv.innerHTML += "<p>El número de personas es obligatorio y debe ser al menos 1.</p>";
    }

    // Si todo está en orden, mostramos un mensaje de éxito
    if (isValid) {
        errorDiv.style.display = "none";  // Ocultamos el mensaje de error si lo hubiera
        successDiv.innerHTML = `<p>La reserva se gestionó con éxito.</p>
            ${fields.map(field => `<p><strong>${field.name}:</strong> ${field.element.value}</p>`).join('')}
        `;
        successDiv.style.display = "block";  // Mostramos el mensaje de éxito
        form.reset();  // Reiniciamos el formulario   
    } else {
        errorDiv.style.display = "block";  // Mostramos los mensajes de error
        successDiv.style.display = "none";  // Ocultamos cualquier mensaje de éxito previo
    }
}

// Asociamos la función de validación al evento submit del formulario
form.addEventListener("submit", validarFormulario);
