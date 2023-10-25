const fundacion = 1988;
const cantidadqs = document.getElementById("cantidad-anos-qs");
const ahora = new Date();
const ano = ahora.getFullYear();
const anosServicios = ano - fundacion;


$(document).ready(function () {
    cantidadqs.innerText = anosServicios;
});