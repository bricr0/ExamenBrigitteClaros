const titulo = document.getElementById("titulo")
const descripcion = document.getElementById("descripcion")
const ubicacion = document.getElementById("ubicacion")
const inicio = document.getElementById("inicio")
const final = document.getElementById("final")
const tabla = document.getElementById("tabla")

document.getElementById("boton").addEventListener("click", () => {
if (!titulo.value || !descripcion.value || !ubicacion.value || !inicio.value || !final.value){
    alert("Ingrese bien los datos")
} else {
    const Datos = {
        titulo : titulo.value,
        descripcion : descripcion.value,
        ubicacion : ubicacion.value,
        inicio : inicio.value,
        final : final.value
    }
    localStorage.setItem("Datos", JSON.stringify(Datos));
    alert("Datos guardados");
    tabla.innerHTML = `
    <li>${titulo.value}</li>
    <li>${descripcion.value}</li>
    <li>${ubicacion.value}</li>
    <li>${inicio.value}</li>
    <li>${final.value}</li>`
    }});
