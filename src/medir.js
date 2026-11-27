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
ventas.push(new Comparativa(100,"totalVentas", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta100, generar.contador);
ventas.push(new Comparativa(100,"ventaMayor", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta100, generar.contador);
ventas.push(new Comparativa(100,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador));

generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.primeraVentaI(venta100, generar.contador);
ventas.push(new Comparativa(100,"primeraVenta", generar.contador.visitas, generar.contador.comparador)); 

// 1.000 VENTAS
generar.contador.comparador = 0;
generar.contador.visitas = 0;

const venta1000 = generar.generarVentas(1000);

generar.totalVentasI(venta1000, generar.contador);
ventas.push(new Comparativa(1000,"totalVentas", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta1000,generar.contador);
ventas.push(new Comparativa(1000,"ventaMayor", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta1000, generar.contador);
ventas.push(new Comparativa(1000,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador));

generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.primeraVentaI(venta1000, generar.contador);
ventas.push(new Comparativa(1000,"primeraVenta", generar.contador.visitas, generar.contador.comparador)); 

// 10.000 VENTAS
generar.contador.comparador = 0;
generar.contador.visitas = 0;

const venta10000 = generar.generarVentas(10000);

generar.totalVentasI(venta10000, generar.contador);
ventas.push(new Comparativa(10000,"totalVentas", generar.contador.visitas, generar.contador.comparador));

generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta10000, generar.contador);
ventas.push(new Comparativa(10000,"ventaMayor", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta10000, generar.contador)
ventas.push(new Comparativa(10000,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador));

generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.primeraVentaI(venta10000, generar.contador);
ventas.push(new Comparativa(10000,"primeraVenta", generar.contador.visitas, generar.contador.comparador)); 

// 100.000 VENTAS
generar.contador.comparador = 0;
generar.contador.visitas = 0;

const venta100000 = generar.generarVentas(100000);

generar.totalVentasI(venta100000, generar.contador)
ventas.push(new Comparativa(100000,"totalVentas", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.ventaMayorI(venta100000, generar.contador)
ventas.push(new Comparativa(100000,"ventaMayor", generar.contador.visitas, generar.contador.comparador));


generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.totalPorCiudadI(venta100000, generar.contador)
ventas.push(new Comparativa(100000,"totalPorCiudad", generar.contador.visitas, generar.contador.comparador));

generar.contador.comparador = 0;
generar.contador.visitas = 0;

generar.primeraVentaI(venta100000, generar.contador);
ventas.push(new Comparativa(100000,"primeraVenta", generar.contador.visitas, generar.contador.comparador)); 

console.table(ventas);

// MEDICIÓN DE TIEMPO DE FUNCIÓN O(n²)

const venta2000 = generar.generarVentas(2000);
const venta4000 = generar.generarVentas(4000);
const venta8000 = generar.generarVentas(8000);
const venta16000 = generar.generarVentas(16000);



//console.time(generar.clientesRecurrentes(venta1000));
//console.time(generar.clientesRecurrentes(venta2000));
//console.time(generar.clientesRecurrentes(venta4000));
//console.time(generar.clientesRecurrentes(venta8000));
//console.time(generar.clientesRecurrentes(venta16000));
console.time(generar.clientesRecurrentes(venta100000));


//console.timeEnd(generar.clientesRecurrentes(venta1000));
//console.timeEnd(generar.clientesRecurrentes(venta2000));
//console.timeEnd(generar.clientesRecurrentes(venta4000));
//console.timeEnd(generar.clientesRecurrentes(venta8000));
//console.timeEnd(generar.clientesRecurrentes(venta16000));
console.timeEnd(generar.clientesRecurrentes(venta100000));