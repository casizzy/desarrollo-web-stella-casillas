var historialEncuestas = JSON.parse(localStorage.getItem('historialEncuestas')) || [];

function enviarDatos() {
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    var educacion = document.getElementById("educacion").value;
    var ocupacion = document.getElementById("ocupacion").value;


    var datos = {
        edad: edad,
        sexo: sexo,
        educacion: educacion,
        ocupacion: ocupacion
    };


    historialEncuestas.push(datos);


    localStorage.setItem('historialEncuestas', JSON.stringify(historialEncuestas));


    document.getElementById("encuestaForm").reset();

    window.location.href = "resultado-stella-casillas.html";
}

function mostrarDatos() {
    var resultadoDiv = document.getElementById("resultado");

    if (!resultadoDiv) {
        console.error("El elemento con id 'resultado' no existe.");
        return;
    }

    var html = "";

    var historialEncuestasGuardado = JSON.parse(localStorage.getItem('historialEncuestas')) || [];


    if (historialEncuestasGuardado.length > 0) {
        html += "<ul>";
        historialEncuestasGuardado.forEach(function(datos, index) {
            html += "<li><strong>Encuesta " + (index + 1) + ":</strong> Edad: " + datos.edad + ", Sexo: " + datos.sexo + ", Educación: " + datos.educacion + ", Ocupación: " + datos.ocupacion + "</li>";
        });
        html += "</ul>";
    } else {
        html += "<p>No hay datos de encuesta para mostrar.</p>";
    }

    resultadoDiv.innerHTML = html;
}

mostrarDatos();

function borrarHistorial() {

    localStorage.removeItem('historialEncuestas');
    console.log("Historial borrado manualmente.");

    mostrarDatos();
}