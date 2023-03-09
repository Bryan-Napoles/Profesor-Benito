

function validarMaterias(event) {
    event.preventDefault(); // evitar que se envíe el formulario

    let semestreSeleccionado = document.querySelector('option[name="semestre"]:checked').value;
    let materiasSeleccionadas = document.querySelectorAll('input[name="materia"]:checked');

    // validar si las materias seleccionadas corresponden al semestre seleccionado
    for (let i = 0; i < materiasSeleccionadas.length; i++) { 
        let semestresPermitidos = materiasSeleccionadas[i].dataset.semestre.split(' ');
        alert(`Agregates esta materia ${materiasSeleccionadas[i].value}`);
        if (!semestresPermitidos.includes(semestreSeleccionado)) {
            alert(`La materia ${materiasSeleccionadas[i].value} no está disponible para el semestre seleccionado`);
            materiasSeleccionadas[i].checked = false;
        }
    }

    const formulario = document.querySelector("#formulario");

    
    
        const nombre = document.querySelector("#taco").value
    
        const respuesta = document.getElementById("lapiz");
    
        respuesta.textContent = "Tu materia es " + nombre
    



}