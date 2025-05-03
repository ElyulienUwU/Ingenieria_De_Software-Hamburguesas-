let finances = JSON.parse(localStorage.getItem('finances')) || {
    activo: 5000,
    pasivo: 1000,
    capital: 4000
};

let sales = JSON.parse(localStorage.getItem('sales')) || [];
// Registrar una venta
try {
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
    
    
    });
} catch (error) {
    console.log();
}

