const ventas = require('./datos');

function valorVenta(venta){
    if(
        !venta ||
        !Number.isFinite(venta.precio) ||
        !Number.isFinite(venta.cantidad)
    ){
        return 0;
    }

    return venta.precio * venta.cantidad;
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
        if(venta.cantidad > 0){
            totalUni += venta.cantidad;
        }
    }

    return totalUni;
}

function ventaMayor(ventas){
    let ventaMax = null;

    for(const venta of ventas){

        if(venta.cantidad > 0){

            if(
                ventaMax === null ||
                valorVenta(venta) > valorVenta(ventaMax)
            ){
                ventaMax = venta;
            }
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

    const suma = ventas
        .filter(venta => venta.cantidad > 0)
        .map(venta => valorVenta(venta))
        .reduce((acc, valor) => acc + valor, 0);

    return suma;
}

function unidadesVendidasM(ventas){

    const sumaUni = ventas
        .filter(venta => venta.cantidad > 0)
        .map(venta => venta.cantidad)
        .reduce((acc, cantidad) => acc + cantidad, 0);

    return sumaUni;
}

function ventasPorCiudadM(ventas, ciudad){

    const ciudadBuscada = ciudad.trim().toLowerCase();

    const sumaCiu = ventas
        .filter(venta =>
            venta.cantidad > 0 &&
            venta.ciudad.trim().toLowerCase() === ciudadBuscada
        )
        .map(venta => valorVenta(venta))
        .reduce((acc, valor) => acc + valor, 0);

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

    if(!Number.isInteger(k) || k <= 0){
        return [];
    }

    const ventaProduct = {};

    for(const venta of ventas){

        if(venta.cantidad > 0){

            if(ventaProduct[venta.producto] === undefined){
                ventaProduct[venta.producto] = 0;
            }

            ventaProduct[venta.producto] += valorVenta(venta);
        }
    }

    const ventasPorProducto = [...Object.entries(ventaProduct)];

    ventasPorProducto.sort((a, b) => b[1] - a[1]);

    return ventasPorProducto.slice(0, k);
}

function productoMasVendido(ventas){

    if(!ventas || ventas.length === 0){
        return null;
    }

    const productoUnidades = {};

    for(const venta of ventas){
        if(productoUnidades[venta.producto] === undefined){
            productoUnidades[venta.producto] = 0;
        }

        productoUnidades[venta.producto] += venta.cantidad;
    }

    const productosPorUnidades = Object.entries(productoUnidades);

    productosPorUnidades.sort((a, b) => b[1] - a[1]);

    return {
        producto: productosPorUnidades[0][0],
        cantidad: productosPorUnidades[0][1]
    };
}

function ventasDelDia(ventas, fecha){
    const ventasDia = ventas.reduce((acc, venta) => {
        if(venta.fecha === fecha){
            return acc + valorVenta(venta);
        }

        return acc;
    }, 0);

    return ventasDia
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
    topProductosPorValor,
    productoMasVendido,
    ventasDelDia
};

