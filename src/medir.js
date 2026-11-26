const generar = require("./generador.js");

const contador = {
    visitas: 0,
    comparador: 0
};

class comparativa{
    constructor(n, visitas, comparador){
        this.n = n;
        this.visitas = visitas;
        this.comparador = comparador;
    }
}


// 100 VENTAS

const venta100 = generar.generarVentas(100);

generar.totalVentasI(venta100, contador)
console.table(generar.contador);


contador.comparador = 0;
contador.visitas = 0;

generar.ventaMayorI(venta100, contador)
console.log("Contador de la ventaMayor con n=100\n");
console.table(generar.contador);


contador.comparador = 0;
contador.visitas = 0;

generar.totalPorCiudadI(venta100,contador)
console.log("Contador del total por ciudad con n=100\n");
console.table(contador);

// 1.000 VENTAS
contador.comparador = 0;
contador.visitas = 0;

const venta1000 = generar.generarVentas(1000);

generar.totalVentasI(venta1000, contador)
console.log("Contador del total de ventas con n=1000\n");
console.table(contador);


contador.comparador = 0;
contador.visitas = 0;

generar.ventaMayorI(venta1000,contador)
console.log("Contador de la ventaMayor con n=1000\n");
console.table(contador);


contador.comparador = 0;
contador.visitas = 0;

generar.totalPorCiudadI(venta1000, contador)
console.log("Contador del total por ciudad con n=1000\n");
console.table(contador);

// 10.000 VENTAS
contador.comparador = 0;
contador.visitas = 0;

const venta10000 = generar.generarVentas(10000);

generar.totalVentasI(venta10000, contador)
console.log("Contador del total de ventas con n=10000\n");
console.table(generar.contador);

contador.comparador = 0;
contador.visitas = 0;

generar.ventaMayorI(venta10000, generar.contador)
console.log("Contador de la ventaMayor con n=10000\n");
console.table(generar.contador);


contador.comparador = 0;
contador.visitas = 0;

generar.totalPorCiudadI(venta10000, generar.contador)
console.log("Contador del total por ciudad con n=10000\n");
console.table(generar.contador);

// 100.000 VENTAS
contador.comparador = 0;
contador.visitas = 0;

const venta100000 = generar.generarVentas(100000);

generar.totalVentasI(venta100000, generar.contador)
console.log("Contador del total de ventas con n=100000\n");
console.table(generar.contador);


contador.comparador = 0;
contador.visitas = 0;

generar.ventaMayorI(venta100000, generar.contador)
console.log("Contador de la ventaMayor con n=100000\n");
console.table(generar.contador);


contador.comparador = 0;
contador.visitas = 0;

generar.totalPorCiudadI(venta100000, generar.contador)
console.log("Contador del total por ciudad con n=100000\n");
console.table(generar.contador);