const operaciones = require("./analitica");
const ventas = require("./datos");

// TOTAL VENDIDO
console.log("totalVendido vs totalVendidoM: ");
if(operaciones.totalVendido(ventas) === operaciones.totalVendidoM(ventas)){
    console.log("OK");
}else{
    console.log("DIFERENTE");
}

// UNIDADES VENDIDAS
console.log("unidadesVendidas vs unidadesVendidasM:")
if(operaciones.unidadesVendidas(ventas) === operaciones.unidadesVendidasM(ventas)){
    console.log("OK");
}else{
    console.log("DIFERENTE");
}

// VENTAS POR CIUDAD

console.log("ventasPorCiudad vs ventasPorCiudadM: ");
if(operaciones.ventasPorCiudad(ventas, "Medellín") === operaciones.ventasPorCiudadM(ventas, "Medellín")){
    console.log("OK");
}else{
    console.log("DIFERENTE");
}

