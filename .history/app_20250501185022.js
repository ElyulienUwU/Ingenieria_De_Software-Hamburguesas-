// Cargar datos de localStorage si están disponibles
const listaVentas = document.getElementById("listaVentas");
let finances = JSON.parse(localStorage.getItem('finanzas')) || {
};

let sales = JSON.parse(localStorage.getItem('sales')) || [];

// Función para mostrar una sección
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

// Registrar una venta
document.getElementById("form-venta").addEventListener("submit", function (e) {
    e.preventDefault();
    let producto = document.getElementById("producto").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precioBase = 0;

    // Determinar el precio base
    if (producto === 'hamburguesa') {
        precioBase = 5.00;
    } else if (producto === 'cheeseburger') {
        precioBase = 5.50;
    } else if (producto === 'veggie') {
        precioBase = 4.50;
    }

    let precioFinal = precioBase;

    // Personalizar el pedido (añadir o quitar ingredientes)
    if (document.getElementById("agregarQueso").checked) {
        precioFinal += 1.00;
    }
    if (document.getElementById("agregarBacon").checked) {
        precioFinal += 1.50;
    }
    if (document.getElementById("quitarLechuga").checked) {
        precioFinal -= 0.50;
    }
    if (document.getElementById("quitarTomate").checked) {
        precioFinal -= 0.50;
    }

    let totalVenta = precioFinal * cantidad;
    sales.push({ producto, cantidad, precioFinal, totalVenta });
    document.getElementById("total-ventas").textContent = sales.reduce((acc, sale) => acc + sale.totalVenta, 0).toFixed(2);

    // Actualizar inventario según lo vendido (simulación de reducción de inventario)
    inventory[producto] -= cantidad;
    localStorage.setItem('sales', JSON.stringify(sales)); // Guardar ventas
    localStorage.setItem('inventory', JSON.stringify(inventory)); // Guardar inventario
});

showSection('inventario'); // Inicialmente mostrar inventario
