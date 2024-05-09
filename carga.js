function mostrarPDFPreview(input) {
    const file = input.files[0];
    const pdfPreview = document.getElementById("pdf-preview");
    const pdfUploader = document.getElementById("pdf-uploader");

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const pdfURL = `${e.target.result}`;
            pdfPreview.innerHTML = `<iframe src="https://docs.google.com/gview?embedded=true&url=${pdfURL}#toolbar=0&page=1" frameborder="0"></iframe>`;

            pdfPreview.style.display = "block"; 
            pdfUploader.style.display = "none"; 
        };

        reader.readAsDataURL(file);
        const pdfContainer = document.querySelector(".pdf-container");
        pdfContainer.classList.add("pdf-loaded");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("pdf-file");

    fileInput.addEventListener("change", function () {
        mostrarPDFPreview(this);
    });
});

window.addEventListener('load', function() {
    var modal = document.getElementById("myModal");
  
    var closeBtn = modal.querySelector(".close");

    modal.style.display = "block";
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  });


const cerrarSesion = document.getElementById('cerrar-sesion');

cerrarSesion.addEventListener('click', function() {

    window.location.href = 'index.html'; 
});


/*<embed src="${pdfURL}#toolbar=0&page=3" />*/