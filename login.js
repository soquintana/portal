document.addEventListener("DOMContentLoaded", function() {
    const formularioInicio = document.getElementById("formularioInicio");
    const formularioRegistro = document.getElementById("formularioRegistro");

    formularioRegistro.style.display = "none"; 

    document.querySelectorAll(".navegacion-inicio-sesion li").forEach(function(item) {
        item.addEventListener("click", function() {
            if (item.classList.contains("registro")) {
                formularioInicio.style.display = "none";
                formularioRegistro.style.display = "block";
            } else {
                formularioInicio.style.display = "block";
                formularioRegistro.style.display = "none";
            }
        });
    });
});

document.getElementById("boton-registrar").addEventListener("click", registrar);
document.getElementById("boton-iniciar-sesion").addEventListener("click", login);

var registros = {};

function registrar() {
    var nombre = document.getElementById("input-nombre-registro").value;
    var correo = document.getElementById("input-correo-registro").value;
    var contraseña = document.getElementById("input-contraseña-registro").value;
    var confirmarContraseña = document.getElementById("input-confirmar-contraseña").value;

    if (contraseña !== confirmarContraseña) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        return;
    }

    registros[nombre] = { correo: correo, contraseña: contraseña };

    document.getElementById("input-nombre-registro").value = "";
    document.getElementById("input-correo-registro").value = "";
    document.getElementById("input-contraseña-registro").value = "";
    document.getElementById("input-confirmar-contraseña").value = "";
    return;
}

function login() {
    var usuario = document.getElementById("input-usuario").value;
    var contraseña = document.getElementById("input-contraseña").value;

    if (registros.hasOwnProperty(usuario)) {
        if (registros[usuario].contraseña === contraseña) {
            window.location.href = "carga.html";
        } else {
            alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
        }
    } else {
        alert("Usuario no registrado. Por favor, regístrate primero.");
    }
    document.getElementById("input-usuario").value = "";
    document.getElementById("input-contraseña").value = ""; 
}


var checkboxMostrarContraseña = document.getElementById("mostrar-contraseña");
var campoContraseña = document.getElementById("input-contraseña");

checkboxMostrarContraseña.addEventListener("change", function() {
    if (checkboxMostrarContraseña.checked) {
        campoContraseña.type = "text";
    } else {
        campoContraseña.type = "password";
    }
});

var checkboxMostrarContraseñaReg = document.getElementById("mostrar-contraseña-reg");
var campoContraseñaReg = document.getElementById("input-contraseña-registro");
var ContraseñaReg = document.getElementById("input-confirmar-contraseña");

checkboxMostrarContraseñaReg.addEventListener("change", function() {
    if (checkboxMostrarContraseñaReg.checked) {
        campoContraseñaReg.type = "text";
    } else {
        campoContraseñaReg.type = "password";
    }
});
checkboxMostrarContraseñaReg.addEventListener("change", function() {
    if (checkboxMostrarContraseñaReg.checked) {
        ContraseñaReg.type = "text";
    } else {
        ContraseñaReg.type = "password";
    }
});