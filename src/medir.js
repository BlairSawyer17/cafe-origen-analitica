const generar = require("./generador.js");

class Comparativa{
    constructor(n, funcion, visitas, comparador){
        this.n = n;
        this.funcion = funcion;
        this.visitas = visitas;
        this.comparador = comparador;
    }
}

const ventas = [];

// 100 VENTAS

const venta100 = generar.generarVentas(100);

generar.totalVentasI(venta100, generar.contador)
ventas[0] = new Comparativa(100,"totalVentas", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta100, generar.contador);
ventas[1] = new Comparativa(100,"ventaMayor", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta100, generar.contador);
ventas[2] = new Comparativa(100,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador);


// 1.000 VENTAS
generar.contador.comparador = 0;
generar.contador.visitas = 0;

const venta1000 = generar.generarVentas(1000);

generar.totalVentasI(venta1000, generar.contador);
ventas[3] = new Comparativa(1000,"totalVentas", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta1000,generar.contador);
ventas[4] = new Comparativa(1000,"ventaMayor", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta1000, generar.contador);
ventas[5] = new Comparativa(1000,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador);

// 10.000 VENTAS
generar.contador.comparador = 0;
generar.contador.visitas = 0;

const venta10000 = generar.generarVentas(10000);

generar.totalVentasI(venta10000, generar.contador);
ventas[6] = new Comparativa(10000,"totalVentas", generar.contador.visitas, generar.contador.comparador);

generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta10000, generar.contador);
ventas[7] = new Comparativa(10000,"ventaMayor", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta10000, generar.contador)
ventas[8] = new Comparativa(10000,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador);

// 100.000 VENTAS
generar.contador.comparador = 0;
generar.contador.visitas = 0;

const venta100000 = generar.generarVentas(100000);

generar.totalVentasI(venta100000, generar.contador)
ventas[9] = new Comparativa(100000,"totalVentas", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta100000, generar.contador)
ventas[10] = new Comparativa(100000,"ventaMayor", generar.contador.visitas, generar.contador.comparador);


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta100000, generar.contador)
ventas[11] = new Comparativa(100000,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador);

console.table(ventas);