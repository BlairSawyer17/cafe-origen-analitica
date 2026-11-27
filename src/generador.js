const operaciones = require("./analitica");

const ciudades = ["Medellín", "Bogotá", "Cartagena", "Cali", "Barranquilla", "Pereira", "Yopal"];

const productos = [
    { producto: "Origen Huila 500 g", precio: 42000 },
    { producto: "Origen Nariño 250 g", precio: 26000 },
    { producto: "Prensa francesa", precio: 95000 },
    { producto: "Molino manual", precio: 120000 },
    { producto: "Origen Sierra 500 g", precio: 45000 },
    { producto: "Cafetera profesional", precio: 250000 }
];

class Venta {
    constructor(id, fecha, cliente, producto, ciudad, cantidad, precio) {
        this.id = id;
        this.fecha = fecha;
        this.cliente = cliente;
        this.producto = producto;
        this.ciudad = ciudad;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generarVentas(n) {
    const ventas = [];
    for (let i = 0; i < n; i++) {

        productoComprado = productos[getRandomInt(productos.length)]
        ventas[i] = new Venta(i + 1, "2026-09-" + String((getRandomInt(30) + 1)).padStart(2, "0"), "C" + String((getRandomInt(n / 3) + 1)).padStart(2, "0"), productoComprado.producto, ciudades[getRandomInt(ciudades.length)], getRandomInt(5) + 1, productoComprado.precio)

    }

    return ventas;
}

const contador = {
    visitas: 0,
    comparador: 0
};

function totalVentasI(ventas, contador) {

    const suma = ventas
        .filter(venta => { contador.visitas++; contador.comparador++; return venta.cantidad > 0 })
        .map(venta => { contador.visitas++; return operaciones.valorVenta(venta) })
        .reduce((acc, valor) => { contador.visitas++; return acc + valor }, 0);

    return suma;
}

function ventaMayorI(ventas, contador) {
    let ventaMax = null;

    for (const venta of ventas) {
        contador.visitas++

        contador.comparador++
        if (venta.cantidad > 0) {

            contador.comparador++
            if (ventaMax === null) {
                ventaMax = venta;

            } else {
                contador.comparador++;
                if (operaciones.valorVenta(venta) > operaciones.valorVenta(ventaMax)) {
                    ventaMax = venta;

                }
            }
        }

    }

    return ventaMax;
}

function totalPorCiudadI(ventas, contador) {
    const ventaCiudad = {};
    
        for(const venta of ventas){
            contador.visitas++
            const ciudad = venta.ciudad.trim().toLowerCase();
            
            contador.comparador++
            if(ventaCiudad[ciudad] === undefined){
                ventaCiudad[ciudad] = 0;
            }
    
            ventaCiudad[ciudad] += operaciones.valorVenta(venta);
        }
    
        return ventaCiudad;
}

module.exports = {
    ciudades,
    productos,
    Venta,
    getRandomInt,
    generarVentas,
    contador,
    totalPorCiudadI,
    totalVentasI,
    ventaMayorI
}