

const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")
const nombre = document.getElementById("nombre")

document.getElementById("boton").addEventListener("click", () => {
if (!email.value || !contraseña.value || !nombre.value){
        alert("Ingrese bien los datos")
} else {
const UserDatos = {
    name : nombre.value,
    email : email.value,
    contraseña : contraseña.value
}
localStorage.setItem("UserDatos", JSON.stringify(UserDatos));
alert("Datos guardados");
}});


