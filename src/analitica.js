const ventas = require('./datos');

function valorVenta(venta){
    let valorTotal = 0;

    valorTotal 

    return valorTotal;
}

function totalVendido(ventas){
    let totalVentas = 0;

    for(const venta of ventas){
        if (venta.cantidad > 0){
            totalVentas += valorVenta(venta);
        }
    }

    return totalVentas;
}

function unidadesVendidas(ventas){
    let totalUni = 0;

    for(const venta of ventas){
        totalUni += venta.cantidad;
    }

    return totalUni;
}

function ventaMayor(ventas){
    if (!ventas || ventas.length === 0) {
        return null;
    }

    let ventaMax = ventas[0];

    for(const venta of ventas){
        if(valorVenta(venta) > valorVenta(ventaMax)){
            ventaMax = venta;
        }
    }

    return ventaMax;
}

function ticketPromedio(ventas){
    let ventasValidas = 0;

    for(const venta of ventas){
        if(venta.cantidad > 0){
            ventasValidas++;
        }
    }

    if (ventasValidas === 0) {
        return 0;
    }

    return totalVendido(ventas) / ventasValidas;
}

function ventasPorCiudad(ventas, ciudad){
    let totalCiudad = 0;

    for(const venta of ventas){
        if(venta.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase()){
            if(venta.cantidad > 0){
                totalCiudad += valorVenta(venta);
            }
        }
    }

    return totalCiudad;
}

console.log(valorVenta(ventas[1]));
console.log(totalVendido(ventas));
console.log(unidadesVendidas(ventas));
console.log(ventaMayor(ventas));
console.log(ticketPromedio(ventas));
console.log(ventasPorCiudad(ventas, "Medellín"))

const prueba = []

console.log(valorVenta(prueba));
console.log(totalVendido(prueba));
console.log(unidadesVendidas(prueba));
console.log(ventaMayor(prueba));
console.log(ticketPromedio(prueba));
console.log(ventasPorCiudad(prueba, "Medellín"));