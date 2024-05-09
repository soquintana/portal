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

function login(){

        let usuario = document.getElementById('input-usuario').value;
        let contraseña = document.getElementById('input-contraseña').value;

        
        if (usuario === 'codoacodo' && contraseña === '1234') {
        
            window.location.href = 'carga.html';
        } else {
            alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
        }
   
    }

    function vercontraseña() {
        let mostrarpass = document.getElementById('ocultar-contraseña');
        let inputpass = document.getElementById('input-contraseña');
    
        mostrarpass.addEventListener("click", (e) => {
            if (inputpass.type === "password") {
                inputpass.type = "text";
            } else {
                inputpass.type = "password";
            }
        });
    }
    