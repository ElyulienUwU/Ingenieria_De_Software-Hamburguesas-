// Función para mostrar una sección
const listaVentas = document.getElementById("listaVentas");
let finances = JSON.parse(localStorage.getItem('finanzas')) || {
};
// Función para mostrar una sección
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}
document.getElementById('total-ventas').textContent = '0.00';
        e.document.getElementById("form-venta").addEventListener("submit",target.reset())
