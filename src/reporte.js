const ventas = require("./datos");
const operaciones = require("./analitica.js");

// RESUMEN GENERAL

console.log("RESUMEN GENERAL CAFÉ ORIGEN\n");

console.log("Tabla de ventas del mes: ");
console.table(ventas);

console.log("\nEl total vendido en el mes fue de: ", operaciones.totalVendidoM(ventas).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }));

console.log("\nEl total de unidades vendidas en el mes fue de: ", operaciones.unidadesVendidasM(ventas));

console.log("\nLa venta más grande del mes fue: ");
console.log("   ",operaciones.ventaMayor(ventas).cantidad, " unidades de:", operaciones.ventaMayor(ventas).producto, "Por el cliente:", operaciones.ventaMayor(ventas).cliente, "El día:", operaciones.ventaMayor(ventas).fecha, "Por un valor final de:", operaciones.valorVenta(operaciones.ventaMayor(ventas)).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }));

console.log("\nEl promedio de venta fue de:", operaciones.ticketPromedio(ventas).toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }), " por compra.");

// VENTAS POR CIUDAD

console.log("\nVENTAS POR CIUDAD\n");

console.log("Tabla de ventas: ")
console.table(operaciones.totalPorCiudad(ventas));

console.log("El total de ventas en Medellín fue de: ", operaciones.ventasPorCiudadM(ventas, "Medellín").toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }), "\n");
console.log("El total de ventas en Bogotá fue de: ", operaciones.ventasPorCiudadM(ventas, "Bogotá").toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }), "\n");
console.log("El total de ventas en Cali fue de: ", operaciones.ventasPorCiudadM(ventas, "Cali").toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }), "\n");
console.log("El total de ventas en Pereira fue de: ", operaciones.ventasPorCiudadM(ventas, "Pereira").toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }), "\n");

// UNIDADES POR PRODUCTO

console.log("\nUNIDADES VENDIDAS POR PRODUCTO\n");
console.log("Tabla de unidades vendidas por producto: ")
console.table(operaciones.unidadesPorProducto(ventas));

console.log("El producto más vendido fue:", operaciones.productoMasVendido(ventas).producto, "con un total de:", operaciones.productoMasVendido(ventas).cantidad, "unidades vendidas.\n");

// TOP PRODUCTOS POR VALOR

console.log("\nTOP 3 PRODUCTOS POR VALOR\n");

console.log("Tabla de los 3 productos que más dinero generaron: ")
console.table(operaciones.topProductosPorValor(ventas, 3));

//RESUMEN DE UN DÍA

console.log("RESUMEN POR DÍA\n");

console.log("")

