## Diccionario de datos

    | Campo | Tipo de Dato | Descripción |
    | :--- | :--- | :--- |
    | ID | Identificador | Identificador único de la venta |
    | Fecha | Fecha | Fecha de la realización del pedido con AAAA/MM/DD |
    | Cliente | Identificador | Identificación única del cliente que realizó el pedido|
    | Producto | Texto | Producto que compró el cliente |
    | Ciudad | Texto | Ciudad desde la que el pedido se realiza |
    | Cantidad | Numérico | Cantidad pedida del producto comprado |
    | Precio | Numérico | Valor a pagar por unidad del producto |

## Casos borde detectados

### 1. Nombres de las ciudades
    - *Problema:* En la venta con el "id: 5", la ciudad está escrita como "medellín", en lugar de "Medellín" como en las otras ventas.
    - *Riesgo:* JavaScript diferencia mayúsculas y minúsculas por el código ASCII por lo que puede haber algún error al utilizar algún método de arreglo y aparecer como ciudades diferentes.
    - *Decisión:* Normalizar las ciudades con primera mayúscula y el resto en minúscula, o pasarlas completamente a minúsculas.

### 2. Cantidad igual a cero
    - *Problema:* En la venta con el "id: 8", la cantidad de producto aparece en 0, por lo que no tiene sentido.
    - *Riesgo:* No es una venta efectiva y no hay clave que nos especifique el estado de la venta(si fue cancelada, pendiente o completada), por lo que o nos falta información o es un error.
    - *Decisión:* Marcar como pendiente a revisar por si fue un error de digitación, venta cancelada o pedido erroneo.

### 3. Sin información de IDClientes
    - *Problema:* Los clientes están representados mediante códigos como "C01", "C02" y "C08", pero no existe un catálogo de clientes que permita verificar si todos los códigos corresponden a clientes registrados.
    - *Riesgo:* No es posible confirmar si los identificadores son válidos o si algún código fue ingresado incorrectamente.
    - *Decisión:* Mantener los identificadores actuales y solicitar o construir un catálogo de clientes para validar su existencia y unicidad.

## Plan de indicadores en pseudocódigo

### ¿Cuánto se vendió?

    Definir total Como Real

    total <- 0

    Para Cada precio De ventas
        Si precio > 0 Entonces
            total += precio
        FinSi
    FinPara

    Imprimir "El total de ventas es: $" + total

### ¿Cuántas unidades salieron?

    Definir totalUni Como Entero

    totalUni <- 0

    Para Cada cantidad De ventas
        Si cantidad > 0 Entonces
            totalUni += cantidad
        FinSi
    FinPara

    Imprimir "Las cantidades vendidas fueron: " + totalUni

### ¿Venta más grande?

    Definir valorVenta, ventaMax Como Real

    ventaMax <- 0
    
    Para i <- 0 Hasta (longitud de ventas - 1) Con Paso 1 Hacer
        valorVenta <- (precio de venta en posición i) * (cantidad de venta en posición i)

        Si valorVenta > ventaMax Entonces 
            ventaMax <- valorVenta
        FinSi
    FinPara

    Imprimir "La venta más grande fue de: $" + ventaMax

### ¿Promedio por venta?

    Definir promedioVentas Como Real

    promedioVentas <- total / (longitud de ventas)

    Imprimir "El promedio de venta es de: " + promedioVentas

    Nota: total es una variable tomada del primer plan.

## Pruebas

### Funciones con arreglos vacíos

    1. valorVenta(): Cuenta con una protección inicial en la que si el arreglo es vacío devuelve 0.
    2. totalVendido(): Al estar la variable totalVentas inicializada en cero, la función debería devolver 0.
    3. unidadesVendidas(): Al estar la variable totalUni inicializada en cero, la función debería devolver 0. 
    4. ventaMayor(): Como el objetivo es devolver un elemento del arreglo, si el arreglo está vacío este devuelve null ya que no hay .
    5. ticketPromedio(): Al no recibir los parámetros requeridos y usar operadores matemáticos para su resultado, la función debería devolver NaN.
    6. ventasPorCiudad(): Al estar la variable totalCiudad inicializada en cero, la función dbería devolver 0.

### Tabla de trazas 