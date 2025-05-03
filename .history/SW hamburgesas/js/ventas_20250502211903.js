let sales = JSON.parse(localStorage.getItem('Ventas')) || [];

document.getElementById("form-venta").addEventListener("submit", function (e) {
    e.preventDefault();

    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    let precioBase = 0;

    if (producto === 'hamburguesa') {
        precioBase = 5.00;
    } else if (producto === 'cheeseburger') {
        precioBase = 5.50;
    } else if (producto === 'veggie') {
        precioBase = 4.50;
    }

    let precioFinal = precioBase;

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

    const totalVenta = precioFinal * cantidad;

    // Guardar venta
    const venta = { producto, cantidad, precioFinal, totalVenta };
    sales.push(venta);
    localStorage.setItem('Ventas', JSON.stringify(sales));

    // Actualizar total
    const totalAcumulado = sales.reduce((acc, sale) => acc + sale.totalVenta, 0);
    document.getElementById("total-ventas").textContent = totalAcumulado.toFixed(2);

    const listaVentas = document.getElementById("listaVentas");
const item = document.createElement("li");
item.textContent = `${cantidad}x ${producto} - $${totalVenta.toFixed(2)}`;
listaVentas.appendChild(item);

    // Limpiar formulario
    e.target.reset();
    
});
