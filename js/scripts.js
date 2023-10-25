const fundacion = 1988;
const cantidad = document.getElementById("cantidad-anos");
const ahora = new Date();
const ano = ahora.getFullYear();
const anosServicios = ano - fundacion;


$(document).ready(function () {
    cantidad.innerText = anosServicios;
});
