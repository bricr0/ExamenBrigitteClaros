const email = document.getElementById("email")
const contraseña = document.getElementById("contraseña")

let emaill = localStorage.email
let contra = localStorage.contraseña
document.getElementById("iniciar").addEventListener("click", () => {
    if (email.value == !emaill && contraseña.value == !contra){
        alert("Datos erroneos")
    } else {
        alert("Bienvenido!")
        window.location.href = "/menu/index.html"
    }
    });
    