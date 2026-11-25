const ventas = require('./datos');

function valorVenta(venta){
    let valorTotal = 0;

    valorTotal = venta.precio * venta.cantidad;

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

/* VERSIONES CON MÉTODOS DE ARRAY */

function totalVendidoM(ventas){
    const suma = ventas.reduce((acc, venta) => {return acc + valorVenta(venta);}, 0);
    return suma;
}

function unidadesVendidasM(ventas){
    const sumaUni = ventas.reduce((acc,venta) => {return acc + venta.cantidad;}, 0);
    return sumaUni;
}

function ventasPorCiudadM(ventas, ciudad){
    const opCiudad = ciudad
    const sumaCiu = ventas.reduce((acc, venta) => {
        if(venta.ciudad.trim().toLowerCase() === opCiudad.trim().toLowerCase()){
            return acc + valorVenta(venta);
        }

        return acc;
    }, 0);

    return sumaCiu;
}

/* devuelve un objeto con el total vendido por cada ciudad */
function totalPorCiudad(ventas){
    const ventaCiudad = {};

    for(const venta of ventas){
        const ciudad = venta.ciudad.trim().toLowerCase();
        
        if(ventaCiudad[ciudad] === undefined){
            ventaCiudad[ciudad] = 0;
        }

        ventaCiudad[ciudad] += valorVenta(venta);
    }

    return ventaCiudad;
}

/* Agrupe los productos y sume las unidades. */
function unidadesPorProducto(ventas){
    const uniProduc = {};

    for(const venta of ventas){
        if(uniProduc[venta.producto] === undefined){
            uniProduc[venta.producto] = 0;
        }

        uniProduc[venta.producto] += venta.cantidad;
    }

    return uniProduc;
}

/* Devuelve k productos que más dinero generaron de mayor a menor */
function topProductosPorValor(ventas, k){
    const ventaProduct = {};

    for(const venta of ventas){
        if(ventaProduct[venta.producto] === undefined){
            ventaProduct[venta.producto] = 0;
        }

        ventaProduct[venta.producto] += valorVenta(venta);
    }

    const ventasPorProducto = Object.entries(ventaProduct);

    ventasPorProducto.sort((a, b) => b[1] - a[1]);

    return ventasPorProducto.slice(0, k);
}

module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor
};

